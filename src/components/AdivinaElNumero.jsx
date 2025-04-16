import React, { useState } from 'react';

function AdivinaElNumero() {

    const [numero, setNumero] = useState(1); // creamos un estado "número", que sserá el que elija el usuario (valor inicial 1)
    const [sorteo, setSorteo] = useState(0); // creamos un estado "sorteo", será el numero que salga de manera aleatoria (valor inicial 0)
    const [result, setResult] = useState(false); // creamos el estado de "resultado" (en false para no mostrar inicalmente el resultado, 
    // sino la pantalla de participar en el sorteo)

    const sortear = () => { // función que genera el numero aleatorio 1 - 10; guarda el resultado en la viarable winner 
        // y a su vez en el estado Sorteo
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); // asigno valor por funcion
        setResult(true); // asigno valor por funcion; muestra en la pantalla el resultado
    }

    return (
        <div style={{ margin: 30 }}>
            {!result ? // si Result es false (if result === false) --> !result 
                // si es false, se muestra el input y el botton:
                //type="number" permite que el usuario ingrese números. 
                // El value viene del estado numero. 
                // onChange actualiza ese valor con lo que escribe el usuario. 
                // Number() se recomienda para convertir de string a número. 
                <>
                    <h4>Adivina el numero del 1 al 10</h4>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={numero}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val >= 1 && val <= 10) setNumero(val);
                        }}
                    />

                    <br />
                    <button onClick={() => sortear()}>SORTEAR</button>
                    {/* al hacer click, se ejecuta la función sortear */}
                </>
                :
                // Si result es true; entonces muestra este codigo de bloque:
                <>
                    <hr />
                    <h3>Usted eligio el número: {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3>{sorteo === numero ? "Ganaste" : "Siga Participando"}</h3>
                    <br />
                    <button onClick={() => {
                        setResult(false);
                        setNumero(1);
                    }}>Volver a jugar</button>
                    {/* boton para reiniciar el juego */}
                </>
            }

        </div>
    );
}

export default AdivinaElNumero;