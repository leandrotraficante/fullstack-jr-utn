import React from 'react';


// De esta manera, si queremos modificar la variable suma, react no sabe como modificar el componente mutable;
// Inicia la variable con un valor inicial, pero el framework REACT no entiende como modificarlo
function MutableComponent() {
    let suma = 0;
    const sumar = () => {
        suma = suma + 1;
    };
    return (
        <div style={{ margin: 30 }}>
            <button onClick={sumar()}>Agregar 1</button>
            <br />
            <span>{suma}</span>
        </div>
    )
};
export default MutableComponent;