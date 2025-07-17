import { Router } from 'express';
import {updateBook, createBook, getBooks, getOneBook, deleteBook} from "../queries/db.js";


const router = Router();

router.get('/', getBooks);

router.get('/:id', getOneBook)

router.post('/', createBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router