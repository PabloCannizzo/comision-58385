import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container-carrito'>
            <h1 className='title-carrito'>Carrito de Compras</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.subNombre}</h3>
                        <p>Precio Unitario: ${prod.precio}</p>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <br />
                        <hr />
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                    <div className='botones-finales'>
                        <h2>Precio Total: ${precioTotal()}</h2>
                        <br />
                        <div className='botones'>
                            <button  className="finalizar-compra1" onClick={handleVaciar}>Vaciar</button>
                            <Link to="/checkout">
                                <button className='finalizar-compra2'>Finalizar Compra</button>
                            </Link>
                        </div>
                    </div> :
                    <h2>El carrito está vacío</h2>
            }
        </div>
    )
}

export default Carrito