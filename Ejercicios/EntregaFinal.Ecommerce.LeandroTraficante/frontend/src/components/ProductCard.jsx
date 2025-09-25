import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const { cart, addToCart, deleteProdFromCart } = useCart();
  const navigate = useNavigate();
  
  const cartItem = cart.find(item => item.product._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, cursor: 'pointer' }}
        image={
          !product.image || imageError 
            ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            : product.image
        }
        title={product.name}
        onError={handleImageError}
        onClick={() => navigate(`/product/${product._id}`)}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(`/product/${product._id}`)}
        >
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" color="primary">
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {product.stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoría: {product.category?.name || 'Sin categoría'}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/product/${product._id}`)}>
          Ver Detalle
        </Button>
        {quantity > 0 ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button 
              size="small" 
              variant="outlined" 
              onClick={() => deleteProdFromCart(product._id)}
              sx={{ minWidth: 32, px: 1 }}
            >
              -
            </Button>
            <Typography variant="body2" sx={{ minWidth: 20, textAlign: 'center' }}>
              {quantity}
            </Typography>
            <Button 
              size="small" 
              variant="outlined" 
              onClick={() => addToCart(product)}
              disabled={quantity >= product.stock}
              sx={{ minWidth: 32, px: 1 }}
            >
              +
            </Button>
          </Box>
        ) : (
          <Button 
            size="small" 
            variant="contained" 
            color="primary" 
            disabled={!(product?.stock > 0)} 
            onClick={() => addToCart(product)}
          >
            Agregar al Carrito
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
