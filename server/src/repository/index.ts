import { AppDataSource } from "../conf/data-source";
import { Books } from "../entity";
import { BookServices } from "../sevices/bookServices";

export const bookRepository = new BookServices(AppDataSource.getRepository(Books))
