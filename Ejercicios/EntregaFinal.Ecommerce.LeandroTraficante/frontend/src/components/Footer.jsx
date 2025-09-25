import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'grey.100', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 2 }}>
                    <SocialLinks />
                </Box>
                <Typography variant="body2" color="text.secondary" align="center">
                    © Leandro Traficante - 2025 E-Commerce. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;