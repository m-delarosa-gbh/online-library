import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateBooksTable1753886398773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "books",
            columns: [
                {
                    name: "book_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "title",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "author_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "category_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "cover_url",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: false,
                },
                
            ]
        }));
        await queryRunner.createForeignKey("books", new TableForeignKey({
            columnNames: ["author_id"],
            referencedColumnNames: ["author_id"],
            referencedTableName: "authors",
            onDelete: "CASCADE",
        }));
        await queryRunner.createForeignKey("books", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["category_id"],
            referencedTableName: "categories",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
