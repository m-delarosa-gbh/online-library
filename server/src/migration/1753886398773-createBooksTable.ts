import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
