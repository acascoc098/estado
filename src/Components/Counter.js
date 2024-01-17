import { useState } from "react";
import './Counter.css'

const Counter = () => {
    //let counter = 0;

    //Todos los estados deben estar dento de un componente
    const [counter, setCounter] = useState(0);

    console.log("Renderizando counter: "+ counter);
    return(
        <div>
            <p> El contador es: <a>{counter}</a></p>
            <button onClick={()=>{setCounter(counter+1);console.log(counter);}}>Incrementar</button>
            <button onClick={()=>{setCounter(counter-1);console.log(counter);}}>Decrementar</button>
            <button onClick={()=>{setCounter(0);console.log(counter);}}>Reset</button>
        </div>

    );

}

export default Counter;