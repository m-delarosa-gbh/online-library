import { FC, useEffect, useState } from "react";
import { BookList, HeaderNavigation } from "../layouts"
import { fetchBooks } from "../services/api";

export const Home:FC = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks().then(setBooks)
  }, [])

    return(
        <>
            <BookList books={books} />
        </>
    )
}