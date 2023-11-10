import { Link } from "react-router-dom";
import React, { useState } from "react";

const Footer = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBSCRIPTO", { nombre, email });
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <footer>
            <div className="footer">
                <div>
                    <ul className="opciones">
                        <li>
                            <Link className="opciones-links" to="/Contactos">preguntas frecuentes</Link>
                        </li>
                        <li>
                            <Link className="opciones-links" to="/Contactos">comunidad</Link>
                        </li>
                        <li>
                            <Link className="opciones-links" to="/Contactos">conocenos más</Link>
                        </li>
                        <li>
                            <Link className="opciones-links" to="/Contactos">contacto</Link>
                        </li>
                        <li>
                            <Link className="opciones-links" to="/Contactos">politicas de privacidad</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="main-title">Informate de nuestras novedades</h5>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={nombre}
                            onChange={handleNombre}
                        />
                        <input
                            type="email"
                            placeholder="Ingresa tu e-mail"
                            value={email}
                            onChange={handleEmail}
                        />
                        <button className="enviar" type="submit">Suscribirse</button>
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