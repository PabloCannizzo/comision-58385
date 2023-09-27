const Main = (props) => {

    return (
        <main className="main">
            <h2>{props.Titulo}</h2>
            <h3>{props.Subtitulo}</h3>
            <p>{props.Alumno}</p>
            <p>{props.Comision}</p>
        </main>
    )
}

export default Main