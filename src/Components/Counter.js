import { useState } from "react";
import './Counter.css';
import Pie from './Pie';
import Card from "./Card";

const Counter = () => {
    //let counter = 0;

    //Todos los estados deben estar dento de un componente
    const [counter, setCounter] = useState(0);
    const [max, setMax] = useState(20);
    const [min, setMin] = useState(0);

    const [range, setRange] = useState({min: 0, max: 20})
    /*Primer intento de poner un max y un min con un input
    function TextInput() {
        const [text, setText] = useState('');
        function handleChange(event) {
    setText(event.target.value);}
    }*/

    console.log("Renderizando counter: "+ counter);
    console.log(max);
    console.log(min);
    return(
        <div>
            <p>Indica el máximo:</p>
            <input type="number" value={range.max} onChange={event => {
                                                                const newMax = parseInt(event.target.value);
                                                                if (newMax > range.min) {
                                                                    setRange({min: range.min, max: newMax})
                                                                }
                                                                
                                                                if (counter > newMax) {
                                                                    setCounter(newMax);
                                                                }
                                                                }}/>
            <p>Máximo de: {range.max}</p>
            <p>Indica el mínimo:</p>
            <input type="number" value={min} onChange={event => {
                                                                const newMin = parseInt(event.target.value);
                                                                if (max > newMin) {
                                                                    setMin(newMin)
                                                                }

                                                                if (counter < newMin) {
                                                                    setCounter(newMin);
                                                                }
                                                                }}/>
            <p>Mínimo de: {min}</p>
            <p> El contador es: <a>{counter}</a></p>
            <button onClick={()=>{if (counter < max) {
                setCounter(counter+1)};
                console.log(counter);}}>Incrementar</button>
            <button onClick={()=>{if(counter > min){
                setCounter(counter-1)};
                console.log(counter);}}>Decrementar</button>
            <button onClick={()=>{setCounter(0);console.log(counter);}}>Reset</button>
            
            <Pie counter={counter}>
                <b>Texto del pie</b> 
                <br></br>
                <i>Otro texto</i>
            </Pie>

            <Card>Esto es una tarjeta</Card>
        </div>

    );
}

export default Counter;