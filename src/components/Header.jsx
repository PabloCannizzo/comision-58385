const Header = () => {

    return (
        <header>
            <nav className="navbar">
                <div id="navbarContenido" className="navbarContenido">
                    <ul>
                        <li>
                            <a href="./index.html">
                                <h1>Mi proyecto React</h1>
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
        </header>
    )
}

export default Header