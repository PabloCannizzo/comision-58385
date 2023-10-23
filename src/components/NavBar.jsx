import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbarContenido">
            <Link to="/">
                <h1>LiquorStore</h1>
            </Link>
            <ul>
                <li>
                    <Link className="menu-links" to="/Contactos">nosotros</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/Item">productos</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/Contactos">envios</Link>
                </li>
                <form role="search">
                    <input type="search" placeholder="Busqueda" aria-label="Search"></input>
                    <button type="submit">Buscar</button>
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