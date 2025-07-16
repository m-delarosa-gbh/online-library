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

router.post('/', async (req, res) =>{
   const {
    title,
    cover_url,
    description,
    author,
    category,
    formats
  } = req.body

    let authorId;
    let categoryId;

    const existingAuthor = await pool.query(`SELECT author_id FROM authors WHERE name = $1`, [author]);
    
    if(existingAuthor.rows.length > 0) {
      authorId = existingAuthor.rows[0].author_id;
    } else {
       const authorResult = await pool.query(
        `INSERT INTO authors (name)
        VALUES ($1)
        RETURNING author_id`,
        [author]
      );
      authorId = authorResult.rows[0].author_id
    }

    const existingCategory = await pool.query(`SELECT category_id FROM categories WHERE name = $1`, [category])

    if(existingCategory.rows.length > 0){
      categoryId = existingCategory.rows[0].category_id
    } else {
      const categoryResult = await pool.query(
        `INSERT INTO categories (name)
        VALUES ($1)
        RETURNING category_id`, [category]
      );
      categoryId = categoryResult.rows[0].category_id
    }
  
 const bookInsert = await pool.query("INSERT INTO books (title, cover_url, description, author_id, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING book_id", [title,
    cover_url,
    description,
    authorId,
    categoryId])

    const bookId = bookInsert.rows[0].book_id;

     for (const format of formats) {
      await pool.query(
        `INSERT INTO formats (book_id, type, url)
         VALUES ($1, $2, $3)`,
        [bookId, format.type, format.url]
      );
    }
    res.send("Book added correctly")
})

export default router