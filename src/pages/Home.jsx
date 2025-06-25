import { BookList, HeaderNavigation } from "../layouts"

export const Home = ({books}) => {
    return(
        <>
            <HeaderNavigation />
            <BookList books={books} />
        </>
    )
}