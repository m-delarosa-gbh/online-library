import { Repository } from "typeorm";
import { Pages } from "../entity";

export class PageServices {
    constructor(private readonly pageRepository: Repository<Pages>){}

    async findPage(book_id:number, page_number:number, format: string | undefined){
        const page = await this.pageRepository.findOne({where: {book: {book_id}, page_number, format:{format}}, relations: ['book', 'format']})
        const result = {
            page_number: page?.page_number,
            content: page?.content,
            format: page?.format?.format ?? null
        }
        console.log(result)
        return result;
    }
}