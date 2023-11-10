import React from "react";
import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({productos, titulo}) => {
    return(
        <div>
            <h2 className="h2-producto">Mire nuestra amplia variedad de bebidas y productos!</h2>
            <h2 className="main-title">{toCapital(titulo)}</h2>

            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList