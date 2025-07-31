import { Repository } from "typeorm";
import { Books } from "../entity";

export class BookServices{
    constructor(private readonly bookRepository: Repository<Books>){}
    async findAll(){
        const books = await this.bookRepository.find({relations: ['author', 'category']});
        const result = books.map((book) => ({
            book_id: book.book_id,
            title: book.title,
            cover_url: book.cover_url,
            description: book.description,
            published_at: book.published_at,
            author: book.author?.name ?? null,
            category: book.category?.name ?? null,
          }));
        console.log(result)
        return result;
    }

    async findOne(book_id:number){
        const book = await this.bookRepository.findOne({where: {book_id}, relations: ['author', 'category']})
        const result = {
            book_id: book?.book_id,
            title: book?.title,
            cover_url: book?.cover_url,
            description: book?.description,
            published_at: book?.published_at,
            author: book?.author?.name ?? null,
            category: book?.category?.name ?? null,
          };
        return result;
    }
}