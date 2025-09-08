import React, { useState } from 'react';

const Convert = () => {

    const [pesos, setPesos] = useState(0);
    const [dolares, setDolares] = useState(0);

    const handleConvert = (e) => {
        const valorPesos = parseFloat(e.target.value) || 0;
        setPesos(valorPesos);
        setDolares(valorPesos / 1423);
    };


    return (
        <div style={{
            padding: 40,
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#404040', 
                marginBottom: 30,
                fontSize: 28
            }}>Convert</h2>
            <div>
                <input 
                type="text"
                placeholder='Ingrese la cantidad de pesos'
                onChange={handleConvert} 
                />
                <p>Pesos: ${pesos.toFixed(2)}</p>
                <p>Valor en dólares: ${dolares.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Convert;