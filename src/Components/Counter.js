import { useState } from "react";
import './Counter.css'

const Counter = () => {
    //let counter = 0;

    //Todos los estados deben estar dento de un componente
    const [counter, setCounter] = useState(0);
    const [max, setMax] = useState(20);
    const [min, setMin] = useState(0);
    /*Primer intento de poner un max y un min con un input
    function TextInput() {
        const [text, setText] = useState('');
        function handleChange(event) {
    setText(event.target.value);}
    }*/

    console.log("Renderizando counter: "+ counter);
    console.log(max);
    return(
        <div>
            <p>Indica el máximo:</p>
            <input type="number" value={max} onChange={event => setMax(event.target.value)}/>
            <p>Máximo de: {max}</p>
            <p>Indica el mínimo:</p>
            <input type="number" value={min} onChange={event => setMin(event.target.value)}/>
            <p>Mínimo de: {min}</p>
            <p> El contador es: <a>{counter}</a></p>
            <button onClick={()=>{if (counter < max) {
                setCounter(counter+1)};
                console.log(counter);}}>Incrementar</button>
            <button onClick={()=>{if(counter > min){
                setCounter(counter-1)};
                console.log(counter);}}>Decrementar</button>
            <button onClick={()=>{setCounter(0);console.log(counter);}}>Reset</button>
        </div>

    );

}

export default Counter;