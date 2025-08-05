import { useEffect, useState} from "react";
import { fetchPage } from "../services/api";
import { useParams, useSearchParams } from "react-router-dom";

export const BookContentPage = () => {
    const [page, setPage] = useState(null)

    const {id, numberPage} = useParams();
    const format = ""


    useEffect(() => {
        fetchPage(id, numberPage, format)
        .then(setPage)
    },[id, numberPage, format])

    console.log("pages", page)
    return <div id="page-content">{page}</div>
    
}