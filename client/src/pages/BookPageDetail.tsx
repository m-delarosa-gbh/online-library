import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchBook } from "../services/api"
import { Container, Row, Col} from "react-bootstrap"

import { BookSheet } from "../components/Book"
import { Book } from "../types/book"

export const BookPageDetail = () => {
    const [book, setBook] = useState<Book | null>(null)
    const { id }= useParams();
    
    useEffect(() => {
        fetchBook(id).then(setBook)
    }, [id])

    if (!book) return <div>Loading...</div>;

        return (
            <Container className="pt-5">
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <BookSheet book={book} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
}