import React, { useState } from 'react';

function Suma() {
    const [num1, setNum1] = useState('0'); // iniciar el estado del primer numero a 0;
    const [num2, setNum2] = useState('0'); // iniciar el estado del segundo numero a 0;
    const [resultado, setResultado] = useState(null); // null para que en principio no muestre nada;

    const handleCalcular = () => { // pasar a numeros los valores ingresados por los usuarios ya que sino se toman como strings:
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) { // validar que se hayan ingresado numeros
            alert('Ambos valores deben ser números.');
            return;
        }
        // si los valores son validos, hacer la suma:
        setResultado(n1 + n2);
    };

    return (
        <div>
            <div>
                <input
                    type='number'
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)} // actualizar el valor del primer numero
                    style={{ width: '50px', padding: '5px' }}
                />
                <span style={{ fontSize: '20px', fontWeight: 'bolder' }}> + </span>
                <input
                    type='number'
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)} // actualizar el valor del segundo numero
                    style={{ width: '50px', padding: '5px' }}
                />
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={handleCalcular} style={{
                        backgroundColor: '#0072CE',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: 0, 
                        cursor: 'pointer',
                        display: 'inline-block',
                        marginTop: '10px',
                        width: '100px'
                    }}>
                    =
                </button>
            </div>

            {resultado !== null && (
                <div style={{
                    border: '5px solid red',
                    marginTop: '15px',
                    display: 'inline-block',
                    padding: '20px',
                    fontWeight: 'bold',
                }}>
                    {resultado}
                </div>
            )}
        </div>
    );
}

export default Suma;
