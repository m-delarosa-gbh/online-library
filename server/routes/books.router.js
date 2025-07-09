import { Router } from 'express';
import pool from "../conf/databse.js";

const router = Router();

router.get('/', async (req, res) => {
  const allBooks = await pool.query("SELECT books.book_id, books.title, books.cover_url, books.description, books.published_at, authors.name AS author, categories.name AS category,json_agg(json_build_object( 'type', formats.type,'url', formats.url)) FILTER (WHERE formats.format_id IS NOT NULL) AS formats FROM books JOIN authors ON books.author_id = authors.author_id JOIN categories ON books.category_id = categories.category_id LEFT JOIN formats ON books.book_id = formats.book_id GROUP BY books.book_id, authors.name, categories.name;");
  res.json(allBooks.rows);
    // res.send(books);
})

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const book = await pool.query("SELECT books.book_id, books.title, books.cover_url, books.description, books.published_at, authors.name AS author, categories.name AS category, json_agg(json_build_object( 'type', formats.type,'url', formats.url)) FILTER (WHERE formats.format_id IS NOT NULL) AS formats FROM books JOIN authors ON books.author_id = authors.author_id JOIN categories ON books.category_id = categories.category_id LEFT JOIN formats ON books.book_id = formats.book_id WHERE books.book_id = $1 GROUP BY books.book_id, authors.name, categories.name", [id])
  res.json(book.rows[0])
})

// router.get('/:id', (req, res) => {
//   const book = books.find((b) => b.id === parseInt(req.params.id))
//   res.send(book);
// })

// const result = await pool.query(`
//   SELECT books.title, authors.name AS author
//   FROM books
//   JOIN authors ON books.author_id = authors.author_id
// `);
// console.log(result.rows[0])

export default router