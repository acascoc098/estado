
const Pie = ({counter, children}) => {
    console.log('Renderizando Componente Pie ' + counter);
    return <>
            <p>{children}</p>
            <p>{counter}</p>
        </>
    ;
}

export default Pie;