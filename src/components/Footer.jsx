const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div>
                    <ul className="opciones">
                        <li>
                            <a className="opciones-links"  href="./Contactos"/* to="/Contactos" */>preguntas frecuentes</a>
                        </li>
                        <li>
                            <a className="opciones-links"  href="./Contactos"/* to="/Contactos" */>comunidad</a>
                        </li>
                        <li>
                            <a className="opciones-links"  href="./Contactos"/* to="/Contactos" */>conocenos más</a>
                        </li>
                        <li>
                            <a className="opciones-links" href="./Contactos"/*  to="/Contactos" */>contacto</a>
                        </li>
                        <li>
                            <a className="opciones-links" href="./Contactos"/*  to="/Contactos" */>politicas de privacidad</a>
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
            <div className="derechos">
                <p>&copy; 2023 Company, Inc. todos los derechos reservados. LiquorStore</p>
            </div>
        </footer>
    )
}

export default Footer

//logo de whatsapp presenta error para verse