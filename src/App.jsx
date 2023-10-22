/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"
import Contactos from './components/Contactos'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main> 
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item" element={<ItemDetailContainer itemId={1} />} />
            <Route path="/contactos" element={<Contactos/>} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
