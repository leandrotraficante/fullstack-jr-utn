import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryCard = ({ category }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleImageError = () => {
    setImageError(true);
  };

  const handleViewProducts = () => {
    navigate(`/products/${category._id}`);
  };

  return (
    <Card 
      sx={{ 
        width: '100%',
        maxWidth: 300,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <CardMedia
        sx={{ 
          height: 180,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        image={
          !category.image || imageError 
            ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            : category.image
        }
        title={category.name}
        onError={handleImageError}
      />
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{ 
            fontWeight: 600,
            fontSize: '1.1rem',
            lineHeight: 1.2,
            mb: 1
          }}
        >
          {category.name}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.4
          }}
        >
          {category.description || 'Sin descripción'}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="medium" 
          variant="contained" 
          color="primary" 
          fullWidth
          onClick={handleViewProducts}
          sx={{
            fontWeight: 500,
            textTransform: 'none',
            py: 1
          }}
        >
          Ver Productos
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;