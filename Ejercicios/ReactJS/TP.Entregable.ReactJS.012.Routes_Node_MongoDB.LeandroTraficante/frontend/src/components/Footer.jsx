import React from 'react';
import { 
  Box, 
  Typography 
} from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#404040',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                fontStyle: 'italic'
            }}
        >
            <Typography variant="body2" color="white" gutterBottom>
                &copy; Leandro Traficante - Todos los derechos reservados 2025
            </Typography>
            <Typography variant="body2" color="white">
                leandrotraficante@gmail.com
            </Typography>
        </Box>
    );
}

export default Footer;

