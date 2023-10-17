import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbarContenido">
            <a href="./index.html">
                <h1>LiquorStore</h1>
            </a>
            <ul>
                <li>
                    <a className="menu-links" href="">contactos</a>
                </li>
                <li>
                    <a className="menu-links" href="#">productos</a>
                </li>
                <li>
                    <a className="menu-links" href="#">envios</a>
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