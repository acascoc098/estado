import { useState } from "react";
import './Counter.css'

const Counter = () => {
    //let counter = 0;

    //Todos los estados deben estar dento de un componente
    const [counter, setCounter] = useState(0);
    function TextInput() {
        const [text, setText] = useState('');
        function handleChange(event) {
    setText(event.target.value);}
    }

    console.log("Renderizando counter: "+ counter);
    return(
        <div>
            <p>Indica el máximo:</p>
            <input type="text" value={text} onChange={handleChange}></input>
            <p>Indica el mínimo:</p>
            <input type="text" id="min"></input>
            <p> El contador es: <a>{counter}</a></p>
            <button onClick={()=>{if (counter<={text}) {
                setCounter(counter+1)};
                console.log(counter);}}>Incrementar</button>
            <button onClick={()=>{if(counter > 0){
                setCounter(counter-1)};
                console.log(counter);}}>Decrementar</button>
            <button onClick={()=>{setCounter(0);console.log(counter);}}>Reset</button>
        </div>

    );

}

export default Counter;