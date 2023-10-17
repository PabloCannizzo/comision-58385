import React from "react";

const Item = ({ producto }) => {
    return (
        <div>
            <img src={producto.imagen} />
            <h3>{producto.nombre}</h3>
            <br />
            <b>Precio c/u: $ {producto.precio}</b>
            <h4>Categoria: {producto.categoria}</h4>
            <br />
            <a className="ver-mas" href={`/item/${producto.id}`}>ver más</a>
        </div>
    )
}
export default Item