import { pageRepository } from "../database/repository";
import { Request, Response } from "express";

export class PageController {

    static async findPage(request: Request, response: Response){
        const book_id = Number(request.params.id);
        const page_number = Number(request.params.page_number);
        const format = request.query.format as "html" | "text";
        
        
        if(isNaN(book_id) || isNaN(page_number)){
            
            return response.status(400).send({message: 'Invalid book id or page number'})
        }
        const page = await pageRepository.findPage(book_id, page_number)
        
        if(page.page_number === undefined || page.content === undefined){
            return response.status(404).send({message: 'Page not found'})
        }

        if(format === "html"){
            response.setHeader("Content-Type", "text/html")
            return response.status(200).send(`${page.content}`)
        }

        if(format === "text"){
            response.setHeader("Content-Type", "text/plain")
            return response.status(200).send(page.content)
        }

        return response.status(200).send(page)
    }
}