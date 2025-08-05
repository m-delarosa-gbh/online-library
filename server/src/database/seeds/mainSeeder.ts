import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import AuthorSeed from "./authors.seed.ts";
import CategoriesSeed from "./categories.seed.ts";
import BooksSeed from "./books.seed.ts";
import PageSeed from "./pages.seed.ts";
import FormatSeed from "./formats.seed.ts";

export default class MainSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        await new AuthorSeed().run(dataSource);
        await new CategoriesSeed().run(dataSource);
        await new BooksSeed().run(dataSource);
        await new FormatSeed().run(dataSource);
        await new PageSeed().run(dataSource);
        }
}