import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
    Box, 
    Typography, 
    Button, 
    CircularProgress, 
    Paper, 
    Grid, 
    Chip,
    Divider,
    Alert
} from '@mui/material';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext.js';
import productService from '../services/product.service.js';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { cart, addToCart, deleteProdFromCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    
    const cartItem = cart.find(item => item.product._id === product?._id);
    const quantity = cartItem ? cartItem.quantity : 0;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await productService.getById(productId);
                setProduct(data);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Producto no encontrado');
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const handleAddToCart = () => {
        if (product && product.stock > 0) {
            const success = addToCart(product);
            if (success) {
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 2000);
            }
        }
    };

    const handleBackToProducts = () => {
        navigate(-1); // Vuelve a la página anterior
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                <CircularProgress size={40} />
            </Box>
        );
    }

    if (error || !product) {
        return (
            <Box textAlign="center" py={4}>
                <Typography variant="h5" color="error" gutterBottom>
                    {error || 'Producto no encontrado'}
                </Typography>
                <Button variant="contained" onClick={handleBackToProducts} startIcon={<ArrowBack />}>
                    Volver a productos
                </Button>
            </Box>
        );
    }

    return (
        <Box>
            <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={handleBackToProducts}
                sx={{ mb: 3 }}
            >
                Volver a productos
            </Button>

            <Paper sx={{ p: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img
                                src={imageError ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' : product.image}
                                alt={product.name}
                                onError={() => setImageError(true)}
                                style={{
                                    width: '100%',
                                    maxWidth: 400,
                                    height: 400,
                                    objectFit: 'cover',
                                    borderRadius: 8
                                }}
                            />
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                {product.name}
                            </Typography>
                            
                            <Typography variant="h3" color="primary" gutterBottom>
                                ${product.price}
                            </Typography>

                            <Box sx={{ mb: 2 }}>
                                <Chip 
                                    label={`Stock: ${product.stock}`} 
                                    color={product.stock > 0 ? 'success' : 'error'}
                                    variant="outlined"
                                />
                            </Box>

                            {product.category && (
                                <Box sx={{ mb: 2 }}>
                                    <Chip 
                                        label={product.category.name} 
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Box>
                            )}

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6" gutterBottom>
                                Descripción
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                {product.description || 'Sin descripción disponible'}
                            </Typography>

                            <Box sx={{ mt: 3 }}>
                                {quantity > 0 ? (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            onClick={() => deleteProdFromCart(product._id)}
                                            sx={{ minWidth: 48, px: 2 }}
                                        >
                                            -
                                        </Button>
                                        <Typography variant="h6" sx={{ minWidth: 40, textAlign: 'center' }}>
                                            {quantity}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            onClick={() => addToCart(product)}
                                            disabled={quantity >= product.stock}
                                            sx={{ minWidth: 48, px: 2 }}
                                        >
                                            +
                                        </Button>
                                    </Box>
                                ) : (
                                    <Button
                                        variant="contained"
                                        size="large"
                                        startIcon={<ShoppingCart />}
                                        disabled={product.stock <= 0}
                                        onClick={handleAddToCart}
                                        sx={{ mr: 2 }}
                                    >
                                        {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
                                    </Button>
                                )}
                            </Box>

                            {addedToCart && (
                                <Alert severity="success" sx={{ mt: 2 }}>
                                    ¡Producto agregado al carrito!
                                </Alert>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ProductDetail;
