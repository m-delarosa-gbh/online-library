import { DataSource } from "typeorm";
import { Books, Formats, Pages } from "../../entity";
import { Seeder } from "typeorm-extension";

export default class PageSeed implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const pagesRepository = dataSource.getRepository(Pages);
        const allPages = await pagesRepository.find();

        const booksRepository = dataSource.getRepository(Books);
        const formatRepository = dataSource.getRepository(Formats);

        if (allPages.length > 0) return;

        const pagesData = [
            {
                page_number: 1,
                content: "Page 1 content 1",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 1,
                content: "<article>Page 1</article> <div><p>content 1</p></div>",
                book_id: 1,
                format: "html"
            },
            {
                page_number: 2,
                content: "Page 2 content 2",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 2,
                content: "<article>Page 2</article> <div><p>content 2</p></div>",
                book_id: 1,
                format: "html"
            },
            {
                page_number: 3,
                content: "Page 3 content 3",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 3,
                content: "<article>Page 3</article> <div><p>content 3</p></div>",
                book_id: 1,
                format: "html"
            },
            {
                page_number: 4,
                content: "Page 4 content 4",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 4,
                content: "<article>Page 4</article> <div><p> content 4</p></div>",
                book_id: 1,
                format: "html"
            },
            {
                page_number: 5,
                content: "Page 5 content 5",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 5,
                content: "<article>Page 5</article> <div><p> content 5</p></div>",
                book_id: 1,
                format: "html"
            },
            {
                page_number: 6,
                content: "Page 6 content 6",
                book_id: 1,
                format: "text"
            },
            {
                page_number: 6,
                content: "<article>Page 6</article> <div><p> content 6</p></div>",
                book_id: 1,
                format: "html"
            },
        ];

        for (const page of pagesData) {
            const book = await booksRepository.findOneBy({ book_id: page.book_id });
            const format = await formatRepository.findOneBy({ format: page.format})


            if (!book || !format) {
                throw new Error("Book not found");
            }
            await pagesRepository.save({ ...page, book, format });
        }
        
    }
}