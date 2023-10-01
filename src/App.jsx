import './App.css'
import { useState } from "react"

export default function App(){

const [numero, setNumero] = useState (0)

const Aumentar= () => {setNumero(numero + 1)}

const Diminuir= () => {setNumero(numero - 1)}


    return(
        <>
        <section>
            <h1>Contador</h1>
            <p>{numero}</p>
            <button id='mais' onClick={Aumentar}>Aumentar</button>
            <button id='menos' onClick={Diminuir}>Diminuir</button>
        </section>
        </>
    )
}
