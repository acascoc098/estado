import { useState } from "react";

const Counter = () => {
    let counter = 0;

    //Todos los estados deben estar dento de un componente
    useState(0)

    console.log("Renderizando counter: "+ Counter);
    return(
        <div>
            <p> El contador es: {counter}</p>
            <button onClick={()=>{counter++}}>incrementar</button>
        </div>

    );

}

export default Counter;