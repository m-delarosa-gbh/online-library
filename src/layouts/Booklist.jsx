import { Container, Row, Col } from "react-bootstrap";
import { BookItem } from "../components/Book";

export const BookList = ({books}) =>{
    return(
     <Container className="pt-5">
        <Row>
            {books.map((book) => (
                <Col md="3">
                    <BookItem {...book} />
                </Col>
            ))}
        </Row>
    </Container>
    );
}