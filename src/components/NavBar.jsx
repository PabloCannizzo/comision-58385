import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbarContenido">
                <ul>
                    <li>
                        <a href="./index.html">
                            <h1>LiquorStore</h1>
                        </a>
                    </li>
                    <li>
                        <a href="#">productos</a>
                    </li>
                    <li>
                        <a href="#">envios</a>
                    </li>
                    <form role="search">
                        <input type="search" placeholder="Busqueda" aria-label="Search"></input>
                        <button type="submit">Buscar</button>
                    </form>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

/* const [modoDark] = useState(true)

    setTimeout(()=> {
        modoDark = false
    }, 2500) */