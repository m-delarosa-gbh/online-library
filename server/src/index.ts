
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
// import useBooks from './routes/books.router.js';
import  {AppDataSource} from "./conf/data-source.ts";
import bookRouter from './router/bookRouter.ts';
import pageRouter from './router/pageRouter.ts';

const app = express();
const port = process.env || 3000;


app.use(express.json()); 
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173'  
}));



AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
      app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Welcome to the REST API!');
  });
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    app.use('/api/book', bookRouter)
    app.use('/api/book', pageRouter)
  })
.catch((error: any) => console.log(error))