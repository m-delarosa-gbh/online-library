import { ForeignKey, MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddFormatColumnPageTable1754410103710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.addColumn("pages", new TableColumn ({ name: "format_id", type: "int"}))

       await queryRunner.createForeignKey("pages", new TableForeignKey({
        columnNames: ["format_id"],
        referencedColumnNames: ["format_id"],
        referencedTableName: "formats",
        onDelete: "CASCADE",
       }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
