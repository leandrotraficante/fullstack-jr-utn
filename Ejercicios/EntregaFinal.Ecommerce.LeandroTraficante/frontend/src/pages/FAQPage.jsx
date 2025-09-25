import React from 'react';
import { Typography, Box } from '@mui/material';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Preguntas Frecuentes
      </Typography>
      <FAQ />
    </Box>
  );
};

export default FAQPage;
