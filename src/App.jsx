/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"
import ItemDetailContainer from './components/ItemDetailContainer'


function App () {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ItemListContainer/>
        <ItemDetailContainer itemId={1}/>
      </main>

      <Footer />
    </>
  )
}

export default App
