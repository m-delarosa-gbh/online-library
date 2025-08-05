import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormatTable1754409762125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
           new Table({
            name: "formats",
            columns:[
                {name: "format_id", type: "int", isPrimary: true, isGenerated: true},
                {name: "format", type: "text"},
            ]

           })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pages");
    }

}
