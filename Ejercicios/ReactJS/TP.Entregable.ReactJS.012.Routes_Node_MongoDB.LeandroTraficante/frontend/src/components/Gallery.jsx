import React, { useState } from 'react';
import { 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Card, 
  CardMedia,
  CardContent
} from '@mui/material';
import gato1 from '../assets/images/gato1.png';
import gato2 from '../assets/images/gato2.png';
import gato3 from '../assets/images/gato3.png';
import gato4 from '../assets/images/gato4.png';
import gato5 from '../assets/images/gato5.png';
import gato6 from '../assets/images/gato6.png';


const Gallery = () => {

    const [isFirstArray, setIsFirstArray] = useState(true);


    const arrayImages1 = [gato1, gato2, gato3];
    const arrayImages2 = [gato4, gato5, gato6];

    const currentArray = isFirstArray ? arrayImages1 : arrayImages2;




    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Galería
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }} justifyContent="center">
                {currentArray.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
                        <Card 
                            sx={{ 
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                maxWidth: 300,
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                            onClick={() => setIsFirstArray(!isFirstArray)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={image}
                                alt="Gato"
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Gallery;