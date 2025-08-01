import { Repository } from "typeorm";
import { Pages } from "../entity";

export class PageServices {
    constructor(private readonly pageRepository: Repository<Pages>){}

    async findPage(book_id:number, page_number:number){
        const page = await this.pageRepository.findOne({where: {book: {book_id}, page_number}, relations: ['book']})
        const result = {
            page_number: page?.page_number,
            content: page?.content,
        }
        return result;
    }
}