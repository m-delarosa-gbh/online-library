import { DataSource } from "typeorm";
import { Books, Pages } from "../entity";
import { Seeder } from "typeorm-extension";

export default class PageSeed implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const pagesRepository = dataSource.getRepository(Pages);
        const allPages = await pagesRepository.find();

        const booksRepository = dataSource.getRepository(Books);

        if (allPages.length > 0) return;

        const pagesData = [
            {
                page_number: 1,
                content: "Page 1 content",
                book_id: 1
            },
            {
                page_number: 2,
                content: "Page 2 content",
                book_id: 1
            },
            {
                page_number: 3,
                content: "Page 3 content",
                book_id: 1
            },
            {
                page_number: 4,
                content: "Page 4 content",
                book_id: 1
            },
            {
                page_number: 5,
                content: "Page 5 content",
                book_id: 1
            },
            {
                page_number: 6,
                content: "Page 6 content",
                book_id: 1
            },
        ];

        for (const page of pagesData) {
            const book = await booksRepository.findOneBy({ book_id: page.book_id });
            if (!book) {
                throw new Error("Book not found");
            }
            await pagesRepository.save({ ...page, book });
        }
        
    }
}