import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormats1753886518986 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "formats",
            columns: [
                {
                    name: "format_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "book_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "type",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "url",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("formats");
    }

}
