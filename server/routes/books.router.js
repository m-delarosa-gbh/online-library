import { Router } from 'express';
import books from '../data/books.json' with {type: 'json'}

const router = Router();

router.get('/', (req, res) => {
    res.send(books);
})

// app.get('/books/:id', (req, res) => {
//     const book = books.find((u) => u.id === parseInt(req.params.id))
//     if (book) {
//         res.json(book)
//     } else {
//         res.status(404).send('User not found')
//     }
// })

export default router