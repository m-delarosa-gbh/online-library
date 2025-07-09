import {Table, Badge} from 'react-bootstrap'
import style from "./styles/Book.module.css"
import { BookFormat } from './BookFormats';

export const BookSheet = ({book}) => {
    return(
        <Table striped className={style.bookSheet}>
            <thead>
                <tr>
                    <th colSpan={2}><h2 className="text-center">{book.title}</h2></th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td colSpan={2}><div className={style.book_cover} style={{backgroundImage: `url(${book.cover_url})`}}></div></td>
                </tr>
                <tr>
                    <td>
                        <h5>Author:</h5>
                    </td>
                    <td><span>{book.author}</span></td>
                </tr>
                <tr>
                    <td>
                        <h5>Category:</h5>
                    </td>
                    <td>{
                        // book.categories.map((category, index) => (
                        //     <Badge key={index} bg="info" className="mx-1">{category}</Badge>
                        // ))
                        <Badge bg="info" className="mx-1">{book.category}</Badge>
                        }</td>
                </tr>
                <tr>
                    <td><h5>Formats:</h5> </td>
                    <td>
                        <div className='d-grid gap-2 d-md-flex justify-content-center'>
                            <BookFormat formats={book.formats} />
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}