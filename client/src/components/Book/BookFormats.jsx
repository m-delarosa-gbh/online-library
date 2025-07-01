export const BookFormat = ({formats}) => {
    if(!formats) return;
    return(
            formats.map((init) => {
            return(
                Object.entries(init).map((format) => {
                    return(
                        <a key={format[0]} href={format[1]} target='_blank' className='btn btn-primary btn-sm'>{format[0]}</a>
                    )
                })
            )
        })
    )
}