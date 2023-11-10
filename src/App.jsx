/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"
import Contactos from './components/Contactos'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from './components/Inicio'


function App() {

  return (

    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
