

export async function fetchBooks() {
    const response = await fetch("http://localhost:3000/api/book")
    const data = await response.json();
    console.log(response)
    return data
}

export async function fetchBook(id) {
    const response = await fetch(`http://localhost:3000/api/book/${id}`)
    const data = await response.json()
    return data
}

export async function fetchPage(id, numberPage = 2, format) {
    const response = await fetch(`http://localhost:3000/api/book/${id}/page/${numberPage}?format=${format}`);
    const contentType = response.headers.get('Content-Type');

    console.log(contentType)
    
    if(contentType.includes("text/html")) {
        const html = await response.text()
        return html;
    } else if(contentType.includes("text/plain")){
        const text = await response.text();
        return text;
    } 
    else {
        const json = await response.json();
        document.getElementById("page-content").textContent = json.content || '[contenido vacio]'
    }
    // return data;
}