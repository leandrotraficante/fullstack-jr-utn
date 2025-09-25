import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Paper,
    Button,
    CircularProgress,
    Alert,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Avatar,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import { 
    Add, 
    Edit, 
    Delete, 
    ArrowBack,
    AdminPanelSettings,
    ExpandMore,
    Inventory,
    Logout
} from '@mui/icons-material';
import productService from '../services/product.service.js';
import catalogService from '../services/catalog.service.js';
import ProductForm from '../components/forms/ProductForm.jsx';
import CatalogForm from '../components/forms/CatalogForm.jsx';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { isUserLogged, logout, loading: authLoading } = useAuth();
    const [products, setProducts] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showProductForm, setShowProductForm] = useState(false);
    const [showCatalogForm, setShowCatalogForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingCatalog, setEditingCatalog] = useState(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);

    useEffect(() => {
        if (!authLoading && !isUserLogged) {
            navigate('/admin/login');
        }
    }, [isUserLogged, authLoading, navigate]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [productsData, catalogsData] = await Promise.all([
                productService.getAll('', 1, 1000), 
                catalogService.getAll()
            ]);
            
            setProducts(productsData.products || productsData || []);
            setCatalogs(catalogsData || []);
        } catch (err) {
            setError('Error al cargar los datos', err);
        } finally {
            setLoading(false);
        }
    };

    const refreshData = () => {
        fetchData();
        window.dispatchEvent(new CustomEvent('dataUpdated'));
    };

    const getProductsByCategory = () => {
        const sortedCatalogs = [...catalogs].sort((a, b) => a.name.localeCompare(b.name));
        
        return sortedCatalogs.map(catalog => {
            const categoryProducts = products
                .filter(product => product.category?._id === catalog._id)
                .sort((a, b) => a.name.localeCompare(b.name));
            
            return {
                ...catalog,
                products: categoryProducts
            };
        });
    };

    const handleBackToSite = () => {
        navigate('/');
    };

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleEditProduct = (productId) => {
        const product = products.find(p => p._id === productId);
        setEditingProduct(product);
        setShowProductForm(true);
    };

    const handleDeleteProduct = (productId) => {
        const product = products.find(p => p._id === productId);
        setDeleteItem({
            type: 'product',
            id: productId,
            name: product?.name || 'producto'
        });
        setShowDeleteDialog(true);
    };

    const handleDeleteCategory = (categoryId) => {
        const category = catalogs.find(c => c._id === categoryId);
        setDeleteItem({
            type: 'category',
            id: categoryId,
            name: category?.name || 'categoría'
        });
        setShowDeleteDialog(true);
    };

    const handleAddProduct = (categoryId) => {
        setEditingProduct({ categoryId });
        setShowProductForm(true);
    };

    const handleAddCategory = () => {
        setEditingCatalog(null);
        setShowCatalogForm(true);
    };

    const handleEditCategory = (categoryId) => {
        const catalog = catalogs.find(c => c._id === categoryId);
        setEditingCatalog(catalog);
        setShowCatalogForm(true);
    };

    const handleFormSuccess = () => {
        refreshData();
        setShowProductForm(false);
        setShowCatalogForm(false);
        setEditingProduct(null);
        setEditingCatalog(null);
    };

    const handleFormClose = () => {
        setShowProductForm(false);
        setShowCatalogForm(false);
        setEditingProduct(null);
        setEditingCatalog(null);
    };

    const handleConfirmDelete = async () => {
        if (!deleteItem) return;

        try {
            if (deleteItem.type === 'product') {
                await productService.delete(deleteItem.id);
            } else if (deleteItem.type === 'category') {
                await catalogService.delete(deleteItem.id);
            }
            
            refreshData();
        } catch (error) {
            setError('Error al eliminar el elemento', error);
        } finally {
            setShowDeleteDialog(false);
            setDeleteItem(null);
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
        setDeleteItem(null);
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                <CircularProgress size={40} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign="center" py={4}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
                <Button variant="contained" onClick={fetchData}>
                    Reintentar
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AdminPanelSettings sx={{ fontSize: 32, mr: 1, color: 'primary.main' }} />
                <Typography variant="h4" component="h1">
                    Admin Dashboard
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
                    onClick={handleBackToSite}
                    sx={{ mr: 1 }}
                >
                    Volver al sitio
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<Logout />}
                    onClick={handleLogout}
                    color="error"
                >
                    Cerrar sesión
                </Button>
            </Box>

            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={handleAddCategory}
                >
                    Nueva Categoría
                </Button>
            </Box>

            {getProductsByCategory().map((category) => (
                <Accordion key={category._id} sx={{ mb: 2 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{ 
                            backgroundColor: category.isActive ? 'primary.light' : 'warning.light',
                            color: category.isActive ? 'primary.contrastText' : 'warning.contrastText',
                            '&:hover': { 
                                backgroundColor: category.isActive ? 'primary.main' : 'warning.main' 
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Inventory sx={{ mr: 1 }} />
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {category.name}
                            </Typography>
                            {!category.isActive && (
                                <Chip
                                    label="DESACTIVADA"
                                    color="warning"
                                    size="small"
                                    sx={{ mr: 1 }}
                                />
                            )}
                            <Chip
                                label={`${category.products.length} productos`}
                                color="secondary"
                                sx={{ mr: 2 }}
                            />
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                {category.description || 'Sin descripción'}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Button
                                    size="small"
                                    startIcon={<Add />}
                                    onClick={() => handleAddProduct(category._id)}
                                >
                                    Agregar Producto
                                </Button>
                                <IconButton
                                    size="small"
                                    onClick={() => handleEditCategory(category._id)}
                                    color="primary"
                                    aria-label="editar categoría"
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    onClick={() => handleDeleteCategory(category._id)}
                                    color="error"
                                    aria-label="eliminar categoría"
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        {!category.isActive && (
                            <Alert severity="warning" sx={{ mb: 2 }}>
                                Esta categoría está desactivada. Los productos no se muestran al público.
                            </Alert>
                        )}
                        {category.products.length === 0 ? (
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                                No hay productos en esta categoría
                            </Typography>
                        ) : (
                            <List dense>
                                {category.products.map((product) => (
                                    <ListItem key={product._id} divider>
                                        <ListItemAvatar>
                                            <Avatar
                                                src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                                                alt={product.name}
                                                variant="rounded"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </ListItemAvatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 0.5 }}>
                                                {product.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                                <Chip
                                                    label={`$${product.price}`}
                                                    color="primary"
                                                    size="small"
                                                    variant="outlined"
                                                />
                                                <Chip
                                                    label={`Stock: ${product.stock}`}
                                                    color={product.stock > 0 ? 'success' : 'error'}
                                                    size="small"
                                                />
                                                {product.stock <= 5 && product.stock > 0 && (
                                                    <Chip
                                                        label="Stock bajo"
                                                        color="warning"
                                                        size="small"
                                                    />
                                                )}
                                            </Box>
                                        </Box>
                                        <ListItemSecondaryAction>
                                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleEditProduct(product._id)}
                                                    color="primary"
                                                    aria-label="editar producto"
                                                >
                                                    <Edit />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleDeleteProduct(product._id)}
                                                    color="error"
                                                    aria-label="eliminar producto"
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </Box>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}

            <Dialog 
                open={showProductForm} 
                onClose={handleFormClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent sx={{ p: 0 }}>
                    <ProductForm
                        initialData={editingProduct}
                        onClose={handleFormClose}
                        onSuccess={handleFormSuccess}
                    />
                </DialogContent>
            </Dialog>

            {/* Catalog Form Dialog */}
            <Dialog 
                open={showCatalogForm} 
                onClose={handleFormClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent sx={{ p: 0 }}>
                    <CatalogForm
                        initialData={editingCatalog}
                        onClose={handleFormClose}
                        onSuccess={handleFormSuccess}
                    />
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={showDeleteDialog}
                onClose={handleCancelDelete}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    Confirmar eliminación
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        ¿Estás seguro de que quieres eliminar {deleteItem?.type === 'product' ? 'el producto' : 'la categoría'} 
                        <strong> "{deleteItem?.name}"</strong>?
                    </Typography>
                    {deleteItem?.type === 'category' && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Advertencia:</strong> Al eliminar esta categoría, todos los productos 
                                asociados también serán eliminados permanentemente.
                            </Typography>
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancelar
                    </Button>
                    <Button 
                        onClick={handleConfirmDelete} 
                        color="error" 
                        variant="contained"
                        startIcon={<Delete />}
                    >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
