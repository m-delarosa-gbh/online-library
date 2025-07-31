import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Categories } from "../entity";

export default class CategoriesSeeds implements Seeder {
    async run (dataSource: DataSource): Promise<void> {
        const categoryRepository = dataSource.getRepository(Categories);
        const categories = await categoryRepository.find();
        if (categories.length > 0) return;
        await categoryRepository.save([
            {
                name: "Ficción",
            },
            {
                name: "No ficción",
            },
            {
                name: "Biografía",
            },
            {
                name: "Historia",
            },
            {
                name: "Ciencia",
            },
            {
                name: "Romance",
            },
        ])
    }
}