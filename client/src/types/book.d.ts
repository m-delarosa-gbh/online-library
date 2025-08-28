export interface Book {
    category: string,
     cover_url: string,
     title: string,
     author: string, 
     book_id: number
}

export interface BookListProps {
    books:Book[]
}