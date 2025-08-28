import { FC, useEffect, useState} from "react";
import { fetchPage } from "../services/api";
import { useParams } from "react-router-dom";

export const BookContentPage:FC = () => {
    const [content, setContent] = useState(null)
    const [format, _] = useState("text");

    const {id, numberPage} = useParams();


    useEffect(() => {
        fetchPage(id, Number(numberPage), format)
        .then(setContent)
    },[id, numberPage, format])

    console.log("pages", content)
    return <div id="page-content">{content}</div>
    
}