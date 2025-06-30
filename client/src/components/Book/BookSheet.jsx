import {Table, Badge} from 'react-bootstrap'
import style from "./styles/Book.module.css"

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
                    <td colSpan={2}><div className={style.book_cover} style={{backgroundImage: `url(${book.image})`}}></div></td>
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
                    <td><Badge bg="info">{book.category}</Badge></td>
                </tr>
                <tr>
                    <td><h5>Format:</h5> </td>
                    <td>
                        <div className='d-grid gap-2 d-md-flex justify-content-center'>
                            <a href='#' className='btn btn-primary btn-sm'>.txt</a>
                            <a href='#' className='btn btn-primary btn-sm'>.pdf</a>
                            <a href='#'  className='btn btn-primary btn-sm'>.html</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}