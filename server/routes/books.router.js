import { Router } from 'express';
import books from '../data/books.json' with {type: 'json'}

const router = Router();

router.get('/', (req, res) => {
    res.send(books);
})

router.get('/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id))
  res.send(book);
})

export default router