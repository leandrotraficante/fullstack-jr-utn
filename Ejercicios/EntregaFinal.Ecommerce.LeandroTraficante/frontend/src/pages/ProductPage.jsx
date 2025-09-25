import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, CircularProgress, Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productService from '../services/product.service.js';
import catalogService from '../services/catalog.service.js';

const ProductPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const categories = await catalogService.getAll();
                const currentCategory = categories.find(cat => cat._id === categoryId);
                setCategory(currentCategory);

                const data = await productService.getAll('', 1, 50, categoryId);
                setProducts(data.products || data);

                setLoading(false);
            } catch (error) {
                setError('Error al cargar los productos', error);
                setLoading(false);
            }
        };

        if (categoryId) {
            fetchData();
        }
    }, [categoryId]);

    const handleBackToCategories = () => {
        navigate('/');
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h4" component="h1">
                    {category ? `Productos de ${category.name}` : 'Productos'}
                </Typography>
            </Box>

            {products.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                    <Typography>No hay productos disponibles en esta categoría</Typography>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Button
                startIcon={<ArrowBack />}
                onClick={handleBackToCategories}
                variant="outlined"
            >
                Volver a Categorías
            </Button>
        </Box>
    );
};

export default ProductPage;