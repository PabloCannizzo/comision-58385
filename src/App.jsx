import './index.scss'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"
import Contactos from './components/Contactos'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path='/carrito' element={<Carrito />}/>
            <Route path='/checkout' element={<Checkout />}/>            
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
