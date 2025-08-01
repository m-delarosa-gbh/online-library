import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Authors } from "../../entity/index.ts";

export default class AuthorSeed implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const authorRepository = dataSource.getRepository(Authors);
        const authors = await authorRepository.find();
        if (authors.length > 0) return;
        await authorRepository.save([
            {
                name: "John Doe",
            },
            {
                name: "Jane Doe",
            },
            {
                name: "John Smith",
            },
            {
                name: "Jane Smith",
            }
        ])
    }
}