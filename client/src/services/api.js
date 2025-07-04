

export async function fetchBooks() {
    const response = await fetch("http://localhost:3000/api/books")
    const data = await response.json();
    console.log(response)
    return data
}

export async function fetchBook(id) {
    const response = await fetch(`http://localhost:3000/api/books/${id}`)
    const data = response.json()
    console.log(response)
    return data
}