import { Container, Row, Col } from "react-bootstrap";
import { BookItem } from "../components/Book";
import { FC } from "react";
import { BookListProps } from "../types/book";

export const BookList:FC<BookListProps> = ({books}) =>{
    return(
     <Container className="pt-5">
        <Row>
            {books.map((book) => {
                return(
                    <Col key={book.book_id} md="3">
                        <BookItem {...book} />
                    </Col>
                )
            })}
        </Row>
    </Container>
    );
}