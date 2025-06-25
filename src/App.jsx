import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages"


function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/data/books.json")
    .then((res) => res.json())
    .then((data) => setBooks(data))
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
      </Routes>
    </>
  )
}

export default App
