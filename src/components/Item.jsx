import React from "react";
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.imagen2} alt={producto.titulo} />
            <div>
                <h3>{producto.nombre}</h3>
                <h4>Precio: $ {producto.precio}</h4>
                <h5>Categoria: {producto.categoria}</h5>
                <Link className="ver-mas" to={`/item/${producto.id}`}>conoce más</Link>
            </div>
        </div>
    )
}
export default Item