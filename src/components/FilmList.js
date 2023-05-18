import Film from "./Film"

const FilmList = ({films}) => {
    
    const filmComponents = films.map( film => {
        return (
            <>
            <Film key={film.id} name={film.name} url={film.url}/>
            </>

        )
    })

    return (
        <>
        <ul>
            {filmComponents}
        </ul>
        </>
    )
}

export default FilmList