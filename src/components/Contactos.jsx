import { useForm } from "react-hook-form";

const Contactos = () => {

    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="nosotros">
                <div className="formulario">
                    <h2 className="main-title">Ingresa un Contacto</h2>
                    <form className="formulario" onSubmit={handleSubmit(enviar)}>

                        <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                        <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                        <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />

                        <button className="enviar" type="submit">Enviar</button>
                    </form>
                </div>
                <div className="preguntas">
                    <h2 className="main-title">
                        preguntas frecuentes
                    </h2>
                    <div>
                        <ul className="link-preguntas">
                            <li className="preg1">
                                <h4><a href="./Contactos">¿Dónde recibo mi compra?</a></h4>
                            </li>
                            <li className="preg2">
                                <h4><a href="./Contactos">¿Cómo me suscribo a las últimas novedades?</a></h4>
                            </li>
                            <li className="preg3">
                                <h4><a href="./Contactos">¿Cómo puedo comprar?</a></h4>
                            </li>
                            <li className="preg4">
                                <h4><a href="./Contactos">¿Qué medios de pagos reciben?</a></h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactos