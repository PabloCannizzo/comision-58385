/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/itemListContainer'
import Footer from "./components/Footer"

const App = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ItemListContainer
          Titulo="inicio de pagina" Subtitulo="2da Pre-Entrega" Alumno="CANNIZZO PABLO" Comision="Comisión: 48385"
        />
      </main>

      <Footer />
    </>
  )
}

export default App
