import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CartMenu from './CartMenu.jsx';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    E-Commerce
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Inicio
                    </Button>
                    <CartMenu />
                    <Button color="inherit" component={Link} to="/faq">
                        FAQ
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contacto
                    </Button>
                    <Button color="inherit" component={Link} to="/admin/login">
                        Admin Panel
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;