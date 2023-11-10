import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useState } from "react"

const NavBar = () => {

    /* const [categoria, setCategoria] = useState();

    const handleBuscar = () => {
        
        console.log(`Agrego ${setCategoria}`)
    } */

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <h1>LiquorStore</h1>
            </Link>
            <ul className="menu">
                <li>
                    <Link className="menu-links" to="/Contactos">nosotros</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/productos">productos</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/Contactos">envios</Link>
                </li>
                <form role="search">
                    <input type="search" placeholder="Busqueda" aria-label="Search"></input>
                    <button /* onClick={handleBuscar} */ type="submit">Buscar</button>
                </form>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar

/* const [modoDark] = useState(true)

    setTimeout(()=> {
        modoDark = false
    }, 2500) */