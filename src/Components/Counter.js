import { useState } from "react";

const Counter = () => {
    //let counter = 0;

    //Todos los estados deben estar dento de un componente
    const [counter, setCounter] = useState(0);

    console.log("Renderizando counter: "+ counter);
    return(
        <div>
            <p> El contador es: {counter}</p>
            <button onClick={()=>{setCounter(counter+1);console.log(counter);}}>incrementar</button>
        </div>

    );

}

export default Counter;