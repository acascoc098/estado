import { useState } from "react"

const BotonR = () => {
    const [color, setColor] = useState("blue");
    //Con boleano
    const [color2, setColor2] = useState(true);

    const colores = ["black","white","green","yellow","blue"];

    //Con array
    const [color3, setColor3] = useState("blue");

    return <>
        <button onClick={() => setColor("green")}>Cambiar</button>
        <b style={{color: color}}>Andrea Castilla Cocera</b>

        <h1 style={{backgroundColor: color2 ? "blue" : "red", color: "white"}}>Hello Style!</h1>
        <button onClick={() => {setColor2(!color2)}}>Cambiar boolean</button>

        <br></br>
        <button onClick={() => {setColor3(colores[Math.floor(Math.random() * 5)])}}> Cambiar array</button>
        <i style={{color: color3, backgroundColor: "ligthgrey"}}>Prueba con el array</i>
    </>
}

export default BotonR;