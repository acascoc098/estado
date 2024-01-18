function BotonR2() {
    const baseStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#ddd', // Color base
    };
    function applyHoverStyle(e) {
        e.target.style.backgroundColor = 'lightblue';
        e.target.style.color = '#333';
    }
    function removeHoverStyle(e) {
        e.target.style.backgroundColor = '#ddd';
        e.target.style.color = 'black';
    }

    return (
        <button
        style={baseStyle}
        onMouseEnter={applyHoverStyle}
        onMouseLeave={removeHoverStyle}>
        Hover me!
        </button>
     );
    }
export default BotonR2;