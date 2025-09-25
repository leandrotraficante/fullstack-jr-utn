import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Switch,
    FormControlLabel,
    Alert,
    CircularProgress,
    Paper,
    Grid,
    Divider
} from '@mui/material';
import { Save, Cancel } from '@mui/icons-material';
import catalogService from '../../services/catalog.service.js';

const CatalogForm = ({ onClose, onSuccess, initialData = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        image: '',
        isActive: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const isEdit = !!initialData;

    React.useEffect(() => {
        if (isEdit) {
            setFormData({
                name: initialData.name || '',
                code: initialData.code || '',
                description: initialData.description || '',
                image: initialData.image || '',
                isActive: initialData.isActive !== undefined ? initialData.isActive : true
            });
        }
    }, [initialData, isEdit]);

    const validateForm = () => {
        const errors = {};
        
        if (!formData.name.trim()) {
            errors.name = 'El nombre es requerido';
        }
        
        if (!formData.code.trim()) {
            errors.code = 'El código es requerido';
        }
        
        if (!formData.description.trim()) {
            errors.description = 'La descripción es requerida';
        }
        
        if (!formData.image.trim()) {
            errors.image = 'La URL de imagen es requerida';
        } else if (!isValidUrl(formData.image)) {
            errors.image = 'Debe ser una URL válida';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch {
            return false;
        }
    };

    const handleInputChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Clear validation error for this field
        if (validationErrors[field]) {
            setValidationErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const catalogData = {
                name: formData.name.trim(),
                code: formData.code.trim(),
                description: formData.description.trim(),
                image: formData.image.trim(),
                isActive: formData.isActive
            };

            if (isEdit) {
                await catalogService.update(initialData._id, catalogData);
                setSuccess('Categoría actualizada correctamente');
            } else {
                await catalogService.create(catalogData);
                setSuccess('Categoría creada correctamente');
            }

            // Reset form if creating new catalog
            if (!isEdit) {
                setFormData({
                    name: '',
                    code: '',
                    description: '',
                    image: '',
                    isActive: true
                });
            }

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {
            setError(err.response?.data?.message || 'Error al guardar la categoría');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                {isEdit ? 'Editar Categoría' : 'Nueva Categoría'}
            </Typography>
            
            <Divider sx={{ mb: 3 }} />

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {success}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="Nombre de la categoría"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            error={!!validationErrors.name}
                            helperText={validationErrors.name}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Código"
                            value={formData.code}
                            onChange={handleInputChange('code')}
                            error={!!validationErrors.code}
                            helperText={validationErrors.code}
                            required
                        />
                    </Box>

                    <TextField
                        fullWidth
                        label="Descripción"
                        value={formData.description}
                        onChange={handleInputChange('description')}
                        error={!!validationErrors.description}
                        helperText={validationErrors.description}
                        multiline
                        rows={3}
                        required
                    />

                    <TextField
                        fullWidth
                        label="URL de imagen"
                        value={formData.image}
                        onChange={handleInputChange('image')}
                        error={!!validationErrors.image}
                        helperText={validationErrors.image || 'Pega la URL completa de la imagen'}
                        required
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={formData.isActive}
                                onChange={handleInputChange('isActive')}
                                color="primary"
                            />
                        }
                        label="Categoría activa"
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'flex-end' }}>
                    <Button
                        variant="outlined"
                        startIcon={<Cancel />}
                        onClick={handleClose}
                        disabled={loading}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={loading ? <CircularProgress size={20} /> : <Save />}
                        disabled={loading}
                    >
                        {loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear')}
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default CatalogForm;
