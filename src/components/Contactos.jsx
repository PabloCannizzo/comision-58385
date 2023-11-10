import { useForm } from "react-hook-form";

const Contactos = () => {

    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="container">
                <h2 className="main-title">Contacto</h2>
                <form className="formulario" onSubmit={handleSubmit(enviar)}>
                    
                    <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                    <input type="email" placeholder="Ingresa tu e-mail" {...register("email")}/>
                    <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")}/>
                    
                    <button className="enviar" type="submit">Enviar</button>
                </form>
            </div>
            <div className="container">
                <h2 className="main-title">
                    <strong>preguntas frecuentes</strong>
                </h2>
                <div>
                    <ul className="link-preguntas">
                        <li className="preg1">
                            <h4><a href="./Contactos">¿Dónde recibo lo último en Motocicletas?</a></h4>
                        </li>
                        <li className="preg2">
                            <h4><a href="./Contactos">¿Cómo me suscribo a las últimas noticias?</a></h4>
                        </li>
                        <li className="preg3">
                            <h4><a href="./Contactos">¿Cómo creo una cuenta en motocicletas?</a></h4>
                        </li>
                        <li className="preg4">
                            <h4><a href="./Contactos">¿Qué medios de pagos reciben?</a></h4>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Contactos