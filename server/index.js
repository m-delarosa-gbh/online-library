
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env || 3000;
import books from './data/books.json' with {type: 'json'}

app.use(express.json()); 
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173'  
}));

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.use('/api/books', (req, res) => {
    res.json(books);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});