import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Formats } from "../../entity";

export default class FormatSeed implements Seeder {
    async run (dataSource: DataSource): Promise<void> {
        const formatRepository = dataSource.getRepository(Formats);
        const formats = await formatRepository.find()
        if (formats.length > 0) return;
        await formatRepository.save([
            {format: "html"},
            {format: "text"},
        ])


    }
}