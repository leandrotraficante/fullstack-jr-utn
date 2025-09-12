import React from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Card, 
  CardContent,
  Grid
} from '@mui/material';

function Contact() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Contacto
            </Typography>
            <Card sx={{ maxWidth: 500, mx: 'auto' }}>
                <CardContent>
                    <Box component="form" sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Correo electrónico"
                                    type="email"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mensaje"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary"
                                    fullWidth
                                    size="large"
                                >
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Contact;