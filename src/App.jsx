/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const App = () => {

  return (
    <>
      <Header />
      
      <Main
        Titulo="inicio de pagina" Subtitulo="1era Pre-Entrega" Alumno="CANNIZZO PABLO" Comision="Comisión: 48385"
      />
      
      <Footer />
    </>
  )
}

export default App
