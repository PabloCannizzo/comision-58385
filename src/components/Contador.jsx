import React from "react"

const Contador = ({ cantidad, handleResta, handleSumar, handleAgregar }) => {

    return (
        <div className="contador">
            <p>Contador Actual: {cantidad}</p>
            <button onClick={handleSumar} className="btn-contador">Sumar</button>
            <button onClick={handleResta} className="btn-contador">Resta</button>
            <button onClick={handleAgregar} className="btn-contador">Agregar al Carrito</button>
            {/* <p>Total: $ {(producto.precio) * Contador}</p> */}
        </div>
    )
}


export default Contador