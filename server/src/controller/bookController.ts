import { bookRepository } from "../repository";
import { Request, Response } from "express";

export class BookController{
    static async all(request: Request, response: Response){
        const data = await bookRepository.findAll();
        console.log("data", data);
        return response.status(200).send(data)
    }

    static async findOne(request:Request, response:Response){
        const id = Number(request.params.id);
        const data = await bookRepository.findOne(id)
        return response.status(200).send(data)
    }
}