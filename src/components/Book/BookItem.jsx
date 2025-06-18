export const BookItem = ({book}) => {
    console.log(book);
    return(
        // bootstrap card
    <div className="bookcontainer">
        <a href="#" className="booklink">
            <div className="bookimgcontainer">

            </div>
            <span className="bookcategory">Realismo mágico</span>
            <h3 className="booktitle">Cien años de soledad</h3>
            <span className="bookauthor">Gabriel García Márquez</span>
        </a>
    </div>
    );
}