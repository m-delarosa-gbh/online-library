import { Book } from "../types/book";
import { Page } from "../types/page";
import { apiRequest } from "./request";

const BASE_URL = "http://localhost:3000/api"

export async function fetchBooks():Promise<Book[]> {
    return apiRequest<Book[]>(`${BASE_URL}/book`)
}

export async function fetchBook(id: string | number):Promise<Book> {
    return apiRequest(`${BASE_URL}/book/${id}`)
}

export async function fetchPage(id: string | number, numberPage:number = 2, format:string):Promise<string | Page> {
    const url = `${BASE_URL}/book/${id}/page/${numberPage}?format=${format}`
    const data =  apiRequest<string | Page>(url)

    // if (typeof(data) === 'object'){
    //     return data.content || '[contenido vacio]'
    // }

    return data
}

// export async function fetchFormat(id=1, numberPage = 1, format){
//     const response = await fetch(`http://localhost:3000/api/book/${id}/page/${numberPage}?format=${format}`);
//     const contentType = response.headers.get('Content-Type');
//     let formats = []

//     if(contentType.includes("text/html")) {
//         formats.push("text")
//     } else if(contentType.includes("text/plain")){
//         formats.push("html")
//     } 
//    return formats
// }