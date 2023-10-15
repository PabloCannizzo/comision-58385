import { useRef } from "react"
import Contador from "./Contador"

const ItemListContainer = (props) => {

    return (
        <>
            <div className="main">
                <div >
                    <h2>{props.Titulo}</h2>
                    <h3>{props.Subtitulo}</h3>
                    <p>{props.Alumno}</p>
                    <p>{props.Comision}</p>
                </div>
                <Contador stock= {10} inicial= {1}/>
            </div>
        </>
    )
}

export default ItemListContainer