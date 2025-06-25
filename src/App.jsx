import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { BookList, HeaderNavigation } from "./layouts"



function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/data/books.json")
    .then((res) => res.json())
    .then((data) => setBooks(data))
  }, [])
  console.log({books})
  return (
    <>
        <HeaderNavigation />
        <BookList books={books} />
    </>
  )
}

export default App
