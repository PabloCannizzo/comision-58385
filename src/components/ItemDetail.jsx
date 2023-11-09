import { useState } from "react"
import Contador from "./Contador"

const ItemDetail = ({ item }) => {

    const [seleccion, setSeleccion] = useState(false)
    function handleSeleccion() {
        setSeleccion(!seleccion);
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen1} />
                <div>
                    <h3>{item.nombre}</h3>
                    <h4>{item.subNombre}</h4>
                    <h5>Categoria: {item.categoria}</h5>
                    <h4>Descripción: {item.descripcion}</h4>
                    <b>Precio c/u: $ {item.precio}</b>
                    <button onClick={handleSeleccion}>{seleccion === true ? "Quitar" : "Agregar"}</button>
                    {seleccion === true && <Contador stock={10} inicial={1} />}
                </div>
            </div>
        </div>
    )
}


export default ItemDetail