

export async function fetchBooks() {
    const response = await fetch("/data/books.json")
    const data = await response.json();
    return data
}