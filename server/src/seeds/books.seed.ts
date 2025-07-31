import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Authors, Books, Categories } from "../entity";

export default class BooksSeeds implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const bookRepository = dataSource.getRepository(Books);
        const authors = dataSource.getRepository(Authors);
        const categories = dataSource.getRepository(Categories);
        const allBooks = await bookRepository.find();
        if (allBooks.length > 0) return;
        
        const books =[
            {
                title: "The Great Gatsby",
                author: "John Doe",
                cover_url: "https://via.placeholder.com/150",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                published_at: new Date(),
                category: "Ficción",
            }
        ]
        for (const booksOfData of books) {
            const author_id = await authors.findOneBy({name: booksOfData.author});
            const category_id = await categories.findOneBy({name: booksOfData.category});
            if (!author_id || !category_id) {
                throw new Error("Author or category not found");
            }
            await bookRepository.save({...booksOfData, author_id, category_id});
        }
    }
}