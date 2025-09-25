import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert
} from '@mui/material';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;


const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    provincia: '',
    ciudad: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMsg, setSnackbarMsg] = useState('Mensaje enviado con éxito');

  const formRef = useRef(null);

  const provinciasArgentinas = [
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
    'Ciudad Autónoma de Buenos Aires'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSnackbarSeverity('error');
      setSnackbarMsg('Faltan variables de EmailJS.');
      setSnackbarOpen(true);
      return;
    }
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setSnackbarSeverity('success');
      setSnackbarMsg('Mensaje enviado con éxito');
      setSnackbarOpen(true);
      setFormData({
        nombre: '',
        apellido: '',
        provincia: '',
        ciudad: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
      formRef.current?.reset();
    } catch {
      setSnackbarSeverity('error');
      setSnackbarMsg('No se pudo enviar el mensaje. Intenta nuevamente.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth required sx={{ mb: 2 }}>
              <InputLabel>Provincia</InputLabel>
              <Select
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                label="Provincia"
              >
                {provinciasArgentinas.map((provincia) => (
                  <MenuItem key={provincia} value={provincia}>
                    {provincia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Teléfono (opcional)"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="mensaje"
              multiline
              rows={3}
              value={formData.mensaje}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Enviar Mensaje
            </Button>
          </Box>
        </form>
      </Paper>
      
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbarSeverity} 
          sx={{ width: '100%', fontSize: '1.1rem', py: 1.5 }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
