const express = require('express');
const router = express.Router();

    const books = [
        {
    "id": 1,
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "category": "Realismo mágico",
    "image": "https://covers.openlibrary.org/b/id/10444161-L.jpg",
    "slug" : "cien-anos-de-soledad"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "category": "Distopía",
    "image": "https://covers.openlibrary.org/b/id/153541-L.jpg",
    "slug" : "distopia"
  },
  {
    "id": 3,
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "category": "Romance",
    "image": "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    "slug" : "orgullo-y-prejuicio"
  },
  {
    "id": 4,
    "title": "El señor de los anillos",
    "author": "J.R.R. Tolkien",
    "category": "Fantasía",
    "image": "https://covers.openlibrary.org/b/id/10521297-L.jpg",
    "slug" : "el-senor-de-los-anillos"
  },
  {
    "id": 5,
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "category": "Fábula",
    "image": "https://covers.openlibrary.org/b/id/10555958-L.jpg",
    "slug" : "el-principito"
  }
    ]

router.get('/', (req, res) => {
    res.json(books);
})

// app.get('/books/:id', (req, res) => {
//     const book = books.find((u) => u.id === parseInt(req.params.id))
//     if (book) {
//         res.json(book)
//     } else {
//         res.status(404).send('User not found')
//     }
// })

module.exports = router