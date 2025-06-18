import { Container, Row, Col } from "react-bootstrap";
import { BookItem } from "../components/Book";

export const BookList = ({books}) =>{
    return(
     <Container>
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