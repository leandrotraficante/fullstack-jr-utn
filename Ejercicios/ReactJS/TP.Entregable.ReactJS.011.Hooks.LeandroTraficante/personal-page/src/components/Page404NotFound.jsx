import React from 'react';
import { Link } from 'react-router-dom';

function Page404NotFound() {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <p>La ruta que estás buscando no existe.</p>
            <Link to='/'>Volver al Inicio</Link>
        </div>
    );
}

export default Page404NotFound;