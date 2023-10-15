const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div>
                    <ul>
                        <li>
                            <a href="./index.html">preguntas frecuentes</a>
                        </li>
                        <li>
                            <a href="./index.html">comunidad</a>
                        </li>
                        <li>
                            <a href="./index.html">conocenos más</a>
                        </li>
                        <li>
                            <a href="./index.html">contacto</a>
                        </li>
                        <li>
                            <a href="./index.html">politicas de privacidad</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Subscribite a nuestro newsletter</h5>
                    <form>
                        <input id="newsletter1" type="text" placeholder="Email address"></input>
                        <button type="submit">Subscribir</button>
                    </form>
                </div>
            </div>
            <div>
                <a href="./index.html">
                    <img src="./assets/img/logo-w-color.png" alt="WhatsApp" />
                </a>
            </div>
            <div>
                <p>&copy; 2023 Company, Inc. todos los derechos reservados. LiquorStore</p>
            </div>
        </footer>
    )
}

export default Footer

//logo de whatsapp presenta error para verse