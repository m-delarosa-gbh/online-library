import { Container, Row, Col } from "react-bootstrap"
import { BookList, HeaderNavigation } from "./layouts"
import books from "./data/books.json";

function App() {
  return (
    <>
        <HeaderNavigation />
        <BookList books={books} />
    </>
  )
}

export default App
