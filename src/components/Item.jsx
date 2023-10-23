import React from "react";
import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} />
            <h3>{producto.nombre}</h3>
            <br />
            <b>Precio c/u: $ {producto.precio}</b>
            <h4>Categoria: {producto.categoria}</h4>
            <br />
            <Link className="ver-mas" to={`/item/${producto.id}`}>ver más</Link>
        </div>
    )
}
export default Item