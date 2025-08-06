export const BookFormat = ({bookId}) => {

    //  book.formats.map((b)=> {console.log(b.type)})
    return(
        //     formats.map((init) => {
        //     return(
        //         Object.entries(init).map((format) => {
        //             return(
        //                 <a key={format[0]} href={format[1]} target='_blank' className='btn btn-primary btn-sm'>{format[0]}</a>
        //             )
        //         })
        //     )
        // })

        //  formats.map((format) => (
        //     <a key={format.url} href={format.url} target='_blank' className='btn btn-primary btn-sm'>{format.type}</a>
        // ))

        <div>
            <a onClick={() => window.open(`/book/${bookId}/page/1?format=html`)} target='_blank' className='btn btn-primary btn-sm mx-1'>html</a>
            <a onClick={() => window.open(`/book/${bookId}/page/1?format=text`)} target='_blank' className='btn btn-primary btn-sm'>text</a>
        </div>
    )
}