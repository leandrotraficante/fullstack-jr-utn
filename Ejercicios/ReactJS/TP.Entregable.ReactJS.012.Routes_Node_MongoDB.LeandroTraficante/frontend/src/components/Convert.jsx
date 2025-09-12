import React, { useState } from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Card, 
  CardContent,
  Grid,
  Divider
} from '@mui/material';

const Convert = () => {

    const [pesos, setPesos] = useState(0);
    const [dolares, setDolares] = useState(0);

    const handleConvert = (e) => {
        const valorPesos = parseFloat(e.target.value) || 0;
        setPesos(valorPesos);
        setDolares(valorPesos / 1423);
    };


    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Conversor
            </Typography>
            <Card sx={{ maxWidth: 500, mx: 'auto' }}>
                <CardContent>
                    <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    fullWidth
                                    label="Ingrese la cantidad de pesos"
                                    type="number"
                                    onChange={handleConvert}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 3 }} />
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Resultado
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Pesos: ${pesos.toFixed(2)}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Valor en dólares: ${dolares.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Convert;