import { useState } from "react"

function Contador(props) {
    const [Contador, setContador] = useState(props.inicial)


    const handleSumar = () => {
        if (Contador < props.stock) {
            setContador(Contador + 1)
            console.log(`Agrego ${setContador}`)
        }
    }

    const handleResta = () => {
        if (Contador > 1) {
            setContador(Contador - 1)
            console.log(`Quitó `)
        }
    }

    const handleResetear = () => {
        setContador(1)
        console.log("Reseteo")
    }

    return (
        <div className="contador">
            <p>Contador Actual: {Contador}</p>
            <button onClick={handleSumar} className="btn-contador">Sumar</button>
            <button onClick={handleResta} className="btn-contador">Resta</button>
            <button onClick={handleResetear} className="btn-contador">Resetear</button>
        </div>
    )
}

export default Contador