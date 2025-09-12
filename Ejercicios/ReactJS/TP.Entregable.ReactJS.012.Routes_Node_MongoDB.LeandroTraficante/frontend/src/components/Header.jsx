import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box
} from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Leandro Traficante
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button component={Link} to='/' color="inherit">
            Home
          </Button>
          <Button component={Link} to='/skills' color="inherit">
            Skills
          </Button>
          <Button component={Link} to='/gallery' color="inherit">
            Galería
          </Button>
          <Button component={Link} to='/contact' color="inherit">
            Contacto
          </Button>
          <Button component={Link} to='/convert' color="inherit">
            Conversor
          </Button>
          <Button component={Link} to='/projects' color="inherit">
            Proyectos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
