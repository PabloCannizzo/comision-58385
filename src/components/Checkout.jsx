import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            carrito: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito()
            })
    }
    if (pedidoId) {
        return (
            <div className='Final-compra'>
                <h1 className='main-title'>Muchas Gracias por tu Compra!</h1>
                <br/>
                <p>Tu numero de pedido es: {pedidoId} </p>
            </div>
        )
    }

    return (

        <div className="formulario-final">
            <h2 className="main-title1">Finalizar Compra</h2>
            <h3 className='main-title2'>Completa con tus datos para finalizar</h3>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />

                <button className="comprar" type="submit">COMPRAR</button>
            </form>
        </div>
    )
}

export default Checkout