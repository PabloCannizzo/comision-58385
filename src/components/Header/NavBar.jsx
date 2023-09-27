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
                        <a href="#">Envios</a>
                    </li>
                    <form role="search">
                        <input type="search" placeholder="Search" aria-label="Search"></input>
                        <button type="submit">Buscar</button>
                    </form>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar