import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress
} from '@mui/material';
import { Lock, AdminPanelSettings } from '@mui/icons-material';
import authService from '../services/auth.service.js';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
    const navigate = useNavigate();
    const { isUserLogged, login, loading: authLoading } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isUserLogged) {
            navigate('/admin/dashboard');
        }
    }, [isUserLogged, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await authService.login(formData.email, formData.password);
            login(response.token);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Credenciales inválidas. Acceso denegado.');
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <CircularProgress size={40} />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                py: 4
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    p: 4,
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <AdminPanelSettings 
                        sx={{ 
                            fontSize: 48, 
                            color: 'primary.main',
                            mb: 1 
                        }} 
                    />
                    <Typography variant="h4" component="h1" gutterBottom>
                        Admin Panel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Acceso exclusivo para administradores
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{ mb: 2 }}
                        disabled={loading}
                    />
                    <TextField
                        fullWidth
                        label="Contraseña"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        sx={{ mb: 3 }}
                        disabled={loading}
                    />

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        startIcon={loading ? <CircularProgress size={20} /> : <Lock />}
                        disabled={loading}
                        sx={{ py: 1.5 }}
                    >
                        {loading ? 'Iniciando sesión...' : 'Acceder al Panel'}
                    </Button>
                </form>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                        variant="text"
                        onClick={() => navigate('/')}
                        sx={{ textTransform: 'none' }}
                    >
                        ← Volver al sitio principal
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default AdminLogin;
