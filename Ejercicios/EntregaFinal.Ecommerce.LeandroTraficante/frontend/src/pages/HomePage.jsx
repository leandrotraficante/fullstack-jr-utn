import { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Box, Paper, InputBase, IconButton, Divider, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import catalogService from '../services/catalog.service.js';
import productService from '../services/product.service.js';

const HomePage = () => {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fetchCategoriesWithProducts = async () => {
    try {
      const [categoriesData, productsData] = await Promise.all([
        catalogService.getAll(),
        productService.getAll('', 1, 1000)
      ]);
      
      const products = productsData.products || productsData;
      
      const categoriesWithProducts = categoriesData.filter(category => {
        return products.some(product => product.category?._id === category._id);
      });
      
      setCategoriesWithProducts(categoriesWithProducts);
    } catch (error) {
      console.error('Error cargando categorías:', error);
    } finally {
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    fetchCategoriesWithProducts();
  }, []);

  useEffect(() => {
    const handleDataUpdate = () => {
      fetchCategoriesWithProducts();
    };

    window.addEventListener('dataUpdated', handleDataUpdate);
    return () => window.removeEventListener('dataUpdated', handleDataUpdate);
  }, []);

  const handleSearch = async (e) => {
    e?.preventDefault();
    const term = searchTerm.trim();
    if (!term) {
      setSearchResults([]);
      return;
    }
    setSearchLoading(true);
    try {
      const data = await productService.getAll(term, 1, 12);
      setSearchResults(data.products || data);
    } catch (error) {
      console.error('Error buscando productos:', error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  if (loadingCategories) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Catálogo</Typography>

      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 3 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar productos..."
          inputProps={{ 'aria-label': 'buscar productos' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <>
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="clear-search"
              onClick={() => { setSearchTerm(''); setSearchResults([]); setSearchLoading(false); }}
            >
              <CloseIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </>
        )}
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {searchTerm ? (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Resultados de búsqueda</Typography>
          {searchLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="120px">
              <CircularProgress size={28} />
            </Box>
          ) : searchResults.length === 0 ? (
            <Typography color="text.secondary">No se encontraron productos.</Typography>
          ) : (
            <Grid container spacing={3}>
              {searchResults.map((product) => (
                <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ) : null}

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Categorías
          <Chip 
            label={`${categoriesWithProducts.length} categorías disponibles`}
            color="primary"
            size="small"
            sx={{ ml: 2 }}
          />
        </Typography>
      </Box>
      
      {categoriesWithProducts.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No hay categorías con productos disponibles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Las categorías aparecerán aquí cuando tengan productos
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {categoriesWithProducts.map((category) => (
            <Grid 
              key={category._id} 
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;