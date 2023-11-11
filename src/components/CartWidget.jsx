import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="CartWidget">
            <Link className="menu-link" to="/carrito">
                <img src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-512.png" alt="carrito" />
                <span className="numerito"></span>
            </Link>
        </div>
    )
}

export default CartWidget

//https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-512.png