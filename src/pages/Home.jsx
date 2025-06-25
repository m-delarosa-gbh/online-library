import { useEffect, useState } from "react";
import { BookList, HeaderNavigation } from "../layouts"
import { fetchBooks } from "../services/api";

export const Home = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks().then(setBooks)
  }, [])

    return(
        <>
            <HeaderNavigation />
            <BookList books={books} />
        </>
    )
}