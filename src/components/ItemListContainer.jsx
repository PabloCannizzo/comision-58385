/* import { pedirDatos } from "../helpers/pedirDatos" */
import { useState, useEffect } from "react"
import Contador from "./Contador"
import { pedirDatos } from "../helpers/pedirDatos.js"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])

    return (
        <>
            <div className="main">
                
                {/* <Container /> */}
                <ItemList productos={productos}/>
                <Contador stock={10} inicial={1} />
            </div>
        </>
    )
}

export default ItemListContainer