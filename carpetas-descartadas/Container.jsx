import { useState, useEffect } from "react"
/* import Presentacional from "./Presentacional.jsx" */
/* import { getProductos } from "../utils" */
import { pedirDatos } from "../src/helpers/pedirDatos.js"

const Container =() => {

    const [productos, setProductos] = useState([]);
    console.log(productos);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])



    return (
        <ItemList/>
    )
}

export default Container


{/* <Presentacional state={state} /> */}