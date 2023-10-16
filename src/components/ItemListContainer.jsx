import { useRef } from "react"
import Contador from "./Contador"
import Container from "./Container"


const ItemListContainer = (props) => {

    return (
        <>
            <div className="main">

                {/* <img src={props.imagen} alt="${producto.nombre}" />
                <h3>${props.producto}</h3>
                <b>Precio c/u: $ ${props.precio}</b>
                <h4>Categoria: ${props.categoria}</h4>
                <h5>Stock disponible: ${props.cantidad} unidades</h5> */}
                <h2>{props.Titulo}</h2>
                <h3>{props.Subtitulo}</h3>
                <p>{props.Alumno}</p>
                <p>{props.Comision}</p>
                <Contador stock={10} inicial={1} />
                <Container />
            </div>
        </>
    )
}

export default ItemListContainer