import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePageTable1754057508538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pages",
            columns: [
                { name: "page_id", type: "int", isPrimary: true, isGenerated: true },
                { name: "page_number", type: "int" },
                { name: "content", type: "text" },
                { name: "book_id", type: "int" },
            ]
        }));
        await queryRunner.createForeignKey("pages", new TableForeignKey({
            columnNames: ["book_id"],
            referencedColumnNames: ["book_id"],
            referencedTableName: "books",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pages");
    }

}
