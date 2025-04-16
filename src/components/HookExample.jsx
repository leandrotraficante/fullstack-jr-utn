import React, { useState } from 'react';

function HookExample() {

    const [suma, setSuma] = useState(0);

    const sumar = () => {
        setSuma(suma + 1);
    }

    return (
        <div style={{ margin: 30 }}>
            <button onClick={sumar}>Agregar 1</button>
            <br />
            <span>{suma}</span>
        </div>
    )
}

export default HookExample;