import { useState, useEffect } from "react"
import Presentacional from "./Presentacional.jsx"
import { getProductos } from "../utils"

function Container() {
    const [state, setState] = useState([])

    useEffect(() => {
        const resultado = getProductos()
        resultado.then(productos => {
            console.log("Termino de traerse el producto");
            setState(productos)
        })
        
    }, [])

    return (
        <Presentacional state={state} />
    )
}


export default Container