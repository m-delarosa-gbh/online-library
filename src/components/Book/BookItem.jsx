import { Button, Card } from "react-bootstrap";
import style from "./styles/Book.module.css"
export const BookItem = (book) => {
    console.log(book);
    return(
        // bootstrap card
    <div className="bookcontainer">
        <Card className={style.bookItem}>
            <Card.Header>{book.category}</Card.Header>
                <div className={style.book_cover} style={{backgroundImage: `url(${book.image})`}}></div>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    <span className="bookauthor">{book.author}</span>
                </Card.Text>
                <Button variant="primary" href="#">Read Book</Button>
            </Card.Body>
        </Card>
    </div>
    );
}