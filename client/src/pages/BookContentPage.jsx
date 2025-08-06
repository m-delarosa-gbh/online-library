import { useEffect, useState} from "react";
import { fetchPage } from "../services/api";
import { useParams } from "react-router-dom";

export const BookContentPage = () => {
    const [content, setContent] = useState(null)
    const [format, setFormat] = useState("text");

    const {id, numberPage} = useParams();


    useEffect(() => {
        fetchPage(id, numberPage, format)
        .then(setContent)
    },[id, numberPage, format])

    console.log("pages", content)
    return <div id="page-content">{content}</div>
    
}