/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"


function App () {

  /* const productos = [
    { id: 1, nombre: "licores", categoria: "alcohol", precio: 3500, cantidad: 25, descuento: 400, imagen: "./assets/img/licores.png " },
    { id: 2, nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000, imagen: "./assets/img/whiskies.png " },
    { id: 3, nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000, imagen: "./assets/img/vinos.png " },
    { id: 4, nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100, imagen: "./assets/img/cocteles.png " },
    { id: 5, nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350, imagen: "./assets/img/cerveza.png " },
    { id: 6, nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300, imagen: "./assets/img/fernet.png " },
    { id: 7, nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150, imagen: "./assets/img/jugos.png " },
    { id: 8, nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200, imagen: "./assets/img/gaseosas.png " },
    { id: 9, nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300, imagen: "./assets/img/energizantes.png " },
    { id: 10, nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100, imagen: "./assets/img/agua.png " }
  ] */

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ItemListContainer
        /* nombre= {productos.nombre} categoria= {productos.categoria} precio= {productos.precio} stock= {productos.cantidad} imagen= "./assets/img/licores.png " */
        /* producto= {productos.nombre} precio={productos.precio} categoria={productos.categoria} precio={productos.precio} */
          Titulo="inicio de pagina" Subtitulo="2da Pre-Entrega" Alumno="CANNIZZO PABLO" Comision="Comisión: 48385"
        />
      </main>

      <Footer />
    </>
  )
}

export default App
