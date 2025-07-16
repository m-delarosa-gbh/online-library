import { Router } from 'express';
import pool from "../conf/databse.js";
import { getOrCreateAuthor, getOrCreateCategory } from '../helper/dbHelper.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
      const allBooks = await pool.query("SELECT books.book_id, books.title, books.cover_url, books.description, books.published_at, authors.name AS author, categories.name AS category,json_agg(json_build_object( 'type', formats.type,'url', formats.url)) FILTER (WHERE formats.format_id IS NOT NULL) AS formats FROM books JOIN authors ON books.author_id = authors.author_id JOIN categories ON books.category_id = categories.category_id LEFT JOIN formats ON books.book_id = formats.book_id GROUP BY books.book_id, authors.name, categories.name;");
      res.json(allBooks.rows);
      res.send("Getting all the book correctly");
  } catch (error) {
      console.log(error)
      res.status(500).json({error: 'Error trying to get all the books'})
  }

})

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const book = await pool.query("SELECT books.book_id, books.title, books.cover_url, books.description, books.published_at, authors.name AS author, categories.name AS category, json_agg(json_build_object( 'type', formats.type,'url', formats.url)) FILTER (WHERE formats.format_id IS NOT NULL) AS formats FROM books JOIN authors ON books.author_id = authors.author_id JOIN categories ON books.category_id = categories.category_id LEFT JOIN formats ON books.book_id = formats.book_id WHERE books.book_id = $1 GROUP BY books.book_id, authors.name, categories.name", [id])
    if(book.rows.length === 0){
      res.send("sorry this book doesn't exist")
    }
    res.json(book.rows[0])
    
  } catch (error) {
     console.log(error)
      res.status(500).json({error: 'Error trying to get book'})
  }
  
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

  try {
    let authorId = await getOrCreateAuthor(pool, author);
    let categoryId = await getOrCreateCategory(pool, category);

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

    } catch (error) {
        await pool.query('ROLLBACK')
        console.log(error)
        res.status(500).json({error: 'Error trying to insert a book'})
    }
})

router.put('/:id', async(req, res) => {

})

router.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    pool.query(`DELETE FROM formats WHERE book_id = $1`, [id])
    pool.query(`DELETE FROM books WHERE book_id = $1`, [id]);
    res.send("book deleted!")

  } catch(error) {
    console(error)
    res.status(500).json({error:"Error trying to delete book"})
  }
})

export default router