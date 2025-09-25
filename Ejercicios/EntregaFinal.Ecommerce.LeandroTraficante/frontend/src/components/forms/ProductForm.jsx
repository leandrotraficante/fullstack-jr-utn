import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Alert,
    CircularProgress,
    Paper,
    Grid,
    Divider
} from '@mui/material';
import { Save, Cancel } from '@mui/icons-material';
import productService from '../../services/product.service.js';
import catalogService from '../../services/catalog.service.js';

const ProductForm = ({ onClose, onSuccess, initialData = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        categoryName: ''
    });
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const isEdit = !!initialData && initialData._id;
    const isNewWithCategory = !!initialData && initialData.categoryId;

    useEffect(() => {
        fetchCategories();
        if (isEdit) {
            setFormData({
                name: initialData.name || '',
                code: initialData.code || '',
                description: initialData.description || '',
                image: initialData.image || '',
                price: initialData.price?.toString() || '',
                stock: initialData.stock?.toString() || '',
                categoryName: initialData.category?.name || ''
            });
        } else if (isNewWithCategory) {
            // Pre-select the category when adding from within a category
            const category = categories.find(cat => cat._id === initialData.categoryId);
            if (category) {
                setFormData(prev => ({ ...prev, categoryName: category.name }));
            }
        }
    }, [initialData, isEdit, isNewWithCategory, categories]);

    // Validate category selection when categories change
    useEffect(() => {
        if (formData.categoryName && categories.length > 0) {
            const categoryExists = categories.some(cat => cat.name === formData.categoryName);
            if (!categoryExists) {
                setFormData(prev => ({ ...prev, categoryName: '' }));
            }
        }
    }, [categories, formData.categoryName]);

    // Get valid category value for Select
    const getValidCategoryValue = () => {
        if (!formData.categoryName || categories.length === 0) {
            return '';
        }
        const categoryExists = categories.some(cat => cat.name === formData.categoryName);
        return categoryExists ? formData.categoryName : '';
    };

    const fetchCategories = async () => {
        try {
            const data = await catalogService.getAll();
            setCategories(data);
        } catch (err) {
            setError('Error al cargar las categorías', err);
        }
    };

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
        
        if (!formData.price || isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
            errors.price = 'El precio debe ser un número mayor a 0';
        }
        
        if (!formData.stock || isNaN(parseInt(formData.stock)) || parseInt(formData.stock) < 0) {
            errors.stock = 'El stock debe ser un número mayor o igual a 0';
        }
        
        if (!isNewWithCategory && !formData.categoryName) {
            errors.categoryName = 'Debe seleccionar una categoría';
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
        const value = event.target.value;
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
            const productData = {
                name: formData.name.trim(),
                code: formData.code.trim(),
                description: formData.description.trim(),
                image: formData.image.trim(),
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
                categoryName: formData.categoryName
            };

            if (isEdit) {
                await productService.update(initialData._id, productData);
                setSuccess('Producto actualizado correctamente');
            } else {
                await productService.create(productData);
                setSuccess('Producto creado correctamente');
            }

            // Reset form if creating new product
            if (!isEdit) {
                setFormData({
                    name: '',
                    code: '',
                    description: '',
                    image: '',
                    price: '',
                    stock: '',
                    categoryName: ''
                });
            }

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {
            setError(err.response?.data?.message || 'Error al guardar el producto');
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
                {isEdit ? 'Editar Producto' : 'Nuevo Producto'}
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
                    <TextField
                        fullWidth
                        label="Nombre del producto"
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

                    {!isNewWithCategory && (
                        <FormControl fullWidth error={!!validationErrors.categoryName} required>
                            <InputLabel>Categoría</InputLabel>
                            <Select
                                value={getValidCategoryValue()}
                                onChange={handleInputChange('categoryName')}
                                label="Categoría"
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category._id} value={category.name}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {validationErrors.categoryName && (
                                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                                    {validationErrors.categoryName}
                                </Typography>
                            )}
                        </FormControl>
                    )}

                    {isNewWithCategory && (
                        <Box sx={{ 
                            p: 2, 
                            backgroundColor: 'primary.light', 
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <Typography variant="body2" color="primary.contrastText">
                                Categoría:
                            </Typography>
                            <Typography variant="body2" fontWeight="medium" color="primary.contrastText">
                                {formData.categoryName}
                            </Typography>
                        </Box>
                    )}

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

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="Precio"
                            type="number"
                            value={formData.price}
                            onChange={handleInputChange('price')}
                            error={!!validationErrors.price}
                            helperText={validationErrors.price}
                            inputProps={{ min: 0, step: 0.01 }}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleInputChange('stock')}
                            error={!!validationErrors.stock}
                            helperText={validationErrors.stock}
                            inputProps={{ min: 0 }}
                            required
                        />
                    </Box>
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

export default ProductForm;
