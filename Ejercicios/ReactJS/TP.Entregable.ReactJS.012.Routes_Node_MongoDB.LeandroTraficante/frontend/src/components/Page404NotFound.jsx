import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

function Page404NotFound() {
    return (
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
            <Box>
                <Typography variant="h1" component="h1" gutterBottom color="primary">
                    404
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    Página no encontrada
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    La ruta que estás buscando no existe.
                </Typography>
                <Button 
                    component={Link} 
                    to='/' 
                    variant="contained" 
                    color="primary"
                    size="large"
                >
                    Volver al Inicio
                </Button>
            </Box>
        </Container>
    );
}

export default Page404NotFound;