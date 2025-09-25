import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

const Feed = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 360 }}>
                <CardHeader
                    title="Lavadora Samsung 9kg EcoBubble"
                    subheader="Modelo WW90T554DTW · En stock"
                />
                <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=60"
                    alt="Lavadora de carga frontal Samsung"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Eficiencia energética A+++, 9kg de capacidad y tecnología EcoBubble que cuida tus prendas.
                        15 programas de lavado, Vapor Hygiene y motor Digital Inverter con 10 años de garantía.
                        Envío rápido y retiro en tienda disponibles. Precio: $379.999
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Feed;