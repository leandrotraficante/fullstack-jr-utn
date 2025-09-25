import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function PurchaseSuccess() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(6);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                ¡Compra realizada con éxito!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Gracias por tu compra. Recibirás un correo con los detalles del pedido.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Serás redirigido al inicio en {seconds} segundos.
            </Typography>
            <Button variant="contained" component={Link} to="/">
                Volver al inicio
            </Button>
        </Box>
    );
}

export default PurchaseSuccess;

