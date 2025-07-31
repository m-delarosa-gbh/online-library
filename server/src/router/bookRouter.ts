import { Router } from "express";
import { BookController } from "../controller";

const bookRouter = Router()
bookRouter.get('/', BookController.all);
bookRouter.get('/:id', BookController.findOne)

export default bookRouter