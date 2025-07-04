import { Router } from 'express';
import pool from "../conf/databse.js";

const router = Router();

router.get('/', async (req, res) => {
  const allBooks = await pool.query("SELECT * FROM books")
  res.json(allBooks.rows);
    // res.send(books);
})

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const book = await pool.query("SELECT * FROM books WHERE book_id = $1", [id])
  res.json(book.rows[0])
})

// router.get('/:id', (req, res) => {
//   const book = books.find((b) => b.id === parseInt(req.params.id))
//   res.send(book);
// })

export default router