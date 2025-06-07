import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompraRealizada.css'

function CompraRealizada({ vaciarCarrito }) {
    const navigate = useNavigate();

    useEffect(() => {
        // Vacía el carrito apenas entra
        vaciarCarrito();

        // Redirige a home después de 5 segundos
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout); // limpieza
    }, [navigate, vaciarCarrito]);

    return (
        <div className="success-page">
            <h2>¡Gracias por tu compra!</h2>
            <p>En breve recibirás un correo con los detalles de tu pedido.</p>
            <p>Redirigiendo a la página principal...</p>
        </div>
    );
}

export default CompraRealizada;
