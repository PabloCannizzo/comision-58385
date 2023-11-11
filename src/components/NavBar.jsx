import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <h1 className="tit-prin">LiquorStore</h1>
            </Link>
            <ul className="menu">
                <li>
                    <Link className="menu-links" to="/">productos</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/productos/alcohol">Alcohol</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/productos/sin alcohol">sin alcohol</Link>
                </li>
                <li>
                    <Link className="menu-links" to="/Contactos">nosotros</Link>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar