import {DataSource, DataSourceOptions} from "typeorm";
import 'dotenv/config';
import { Authors, Books, Categories, Pages } from "../../entity/index.ts";
import { SeederOptions } from "typeorm-extension";

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    entities: [Authors, Categories, Books, Pages],
    synchronize: true,
    logging: false,
    migrations: ["src/migration/**/*.ts"],
    seeds: ["src/seeds/mainSeeder.ts"],
}
export const AppDataSource = new DataSource(options);
