import style from "./styles/Book.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BookItem = (book) => {
    
    return(
        // bootstrap card
    <div className="bookcontainer">
        <Card className={style.bookItem}>
            <Card.Header>{book.category}</Card.Header>
                <div className={style.book_cover} style={{backgroundImage: `url(${book.cover_url})`}}></div>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    <span className="bookauthor">{book.author}</span>
                </Card.Text>
                <Link to={`/book/${book.book_id}`}>
                    Read Book
                </Link>
                
            </Card.Body>
        </Card>
    </div>
    );
}