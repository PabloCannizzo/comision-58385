import { useCallback, useContext, useState } from "react"
import Contador from "./Contador"
import { toCapital } from "../helpers/toCapital"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {

    const [seleccion, setSeleccion] = useState(false)
    function handleSeleccion() {
        setSeleccion(!seleccion);
    }

    const [cantidad, setCantidad] = useState(1)

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
        console.log(`Agrego ${setCantidad}`)
    }

    const handleResta = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
        console.log(`Quitó `)
    }

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen1} />
                <div>
                    <h3>{item.nombre}</h3>
                    <h4>{item.subNombre}</h4>
                    <h4>Descripción: {item.descripcion}</h4>
                    <h6>Categoria: {toCapital(item.categoria)}</h6>
                    <b>Precio c/u: $ {item.precio}</b>
                    <button onClick={handleSeleccion} className="btn-agregar">{seleccion === true ? "Quitar" : "Agregar"}</button>
                    {seleccion === true &&
                        <Contador cantidad={cantidad} handleSumar={handleSumar} handleResta={handleResta} handleAgregar={() => {agregarAlCarrito(item, cantidad)}}
                        />}
                </div>
            </div>
        </div>
    )
}


export default ItemDetail