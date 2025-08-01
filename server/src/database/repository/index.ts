import { AppDataSource } from "../conf/data-source";
import { Books, Pages } from "../../entity";
import { BookServices } from "../../sevices/bookServices";
import { PageServices } from "../../sevices/pageServices";

export const bookRepository = new BookServices(AppDataSource.getRepository(Books))
export const pageRepository = new PageServices(AppDataSource.getRepository(Pages))
