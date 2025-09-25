import React, { useState } from 'react';
import ClimaWidget from '../components/ClimaWidget';

function ClimaPage() {

    const [ciudad, setCiudad] = useState('');
    const [ciudadABuscar, setCiudadABuscar] = useState('');

    const handleChange = (e) => {
        setCiudad(e.target.value)
    };

    const handleSearchCity = () => {
        setCiudadABuscar(ciudad)
    }


    return (
        <>
            <input type="text"
                placeholder='Ingrese ciudad'
                value={ciudad}
                onChange={handleChange}
            />
            <button onClick={handleSearchCity}>Buscar</button>
            <ClimaWidget city={ciudadABuscar}></ClimaWidget>
        </>
    );
}

export default ClimaPage;