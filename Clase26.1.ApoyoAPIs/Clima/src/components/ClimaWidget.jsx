import React, { useEffect, useState } from 'react';
import './climaWidget.css';
import obtenerDatosClima from '../APIs/api';

function ClimaWidget({ city }) {
    const [climaActual, setClimaActual] = useState(null);

    const obtenerClima = async () => {
        const respuesta = await obtenerDatosClima(city);
        setClimaActual(respuesta); 
        console.log(respuesta)
    };

    useEffect(() => {
        if (city) {
            obtenerClima();
        }
    }, [city]);


    return (
        <div className='clima-widget'>
            <h3>Clima en {city}</h3>
            {climaActual ? (
                <div className='clima-info'>
                    <p><span>Temperatura:</span> <span>{climaActual.main.temp}°C</span></p>
                    <p><span>Viento:</span> <span>{climaActual.wind.speed} km/h</span></p>
                    <p><span>Presión:</span> <span>{climaActual.main.pressure} hPa</span></p>
                    <p><span>Humedad:</span> <span>{climaActual.main.humidity} %</span></p>
                </div>
            ) : (
                <p>Cargando clima...</p>
            )}
        </div>
    );
}

export default ClimaWidget;
