import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoryTable1753886147794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [{
                    name: "category_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },{
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
