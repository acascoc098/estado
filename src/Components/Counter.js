
const Counter = () => {
    //Primera idea de crerar un contador que se incremente al pulsar un botón
    let counter = 0;
    return(
        <div>
            <p> El contador es: {counter}</p>
            <button onClick={counter = counter+1}>incrementar</button>
        </div>

    );

}

export default Counter;