import { useState } from "react"

const BotonR = () => {
    const [color, setColor] = useState("blue");
    //Con boleano
    const [color2, setColor2] = useState(true);

    return <>
        <button onClick={() => setColor("green")}>Cambiar</button>
        <b style={{color: color}}>Andrea Castilla Cocera</b>

        <h1 style={{backgroundColor: color2 ? "blue" : "red", color: "white"}}>Hello Style!</h1>
        <button onClick={() => {setColor2(!color2)}}>Cambiar boolean</button>
    </>
}

export default BotonR;