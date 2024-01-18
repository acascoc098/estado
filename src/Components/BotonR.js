import { useState } from "react"

const BotonR = () => {
    const [color, setColor] = useState("black");

    return <>
        <button onClick={() => setColor("green")}>Cambiar</button>
        <b style={{color: color}}>Andrea Castilla Cocera</b>
    </>
}

export default BotonR;