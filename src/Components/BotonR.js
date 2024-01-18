import { useState } from "react"
import BotonR2 from "./BotonR2";

const BotonR = () => {
    const [color, setColor] = useState("blue");
    //Con boleano
    const [color2, setColor2] = useState(true);

    const colores = ["black","white","green","yellow","blue","orange","purple"];

    //Con array
    const [color3, setColor3] = useState("blue");

    return <>
        <button style={{backgroundColor: "lightgreen"}} onClick={() => setColor("green")}>Cambiar</button>
        <b style={{color: color}}>Andrea Castilla Cocera</b>

        <h1 style={{backgroundColor: color2 ? "blue" : "red", color: "white"}}>Hello Style!</h1>
        <button style={{backgroundColor: "lightgreen"}} onClick={() => {setColor2(!color2)}}>Cambiar boolean</button>

        <br></br>
        <button style={{backgroundColor: "lightgreen"}}  onClick={() => {setColor3(colores[Math.floor(Math.random() * colores.length)])}}> Cambiar array</button>
        <i style={{color: color3, backgroundColor: "ligthgrey"}}><b>Prueba con el array</b></i>

        <br></br>
        <BotonR2/>
    </>
}

export default BotonR;