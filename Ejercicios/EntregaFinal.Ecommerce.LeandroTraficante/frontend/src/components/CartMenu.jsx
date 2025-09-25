import React, { useState } from 'react';
import { Button, Box, Popover, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

const CartMenu = () => {
    const { cart, addToCart, deleteProdFromCart, removeItem } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'cart-popover' : undefined;

    return (
        <>
            <Button color="inherit" aria-describedby={id} onClick={handleOpen} sx={{ minWidth: 0, px: 1 }}>
                Carrito ({totalItems})
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{ paper: { sx: { width: 320, p: 1 } } }}
            >
                {cart.length === 0 ? (
                    <Box sx={{ p: 2 }}>Tu carrito está vacío</Box>
                ) : (
                    <>
                        <List dense sx={{ maxHeight: 300, overflowY: 'auto' }}>
                            {cart.map(({ product, quantity }) => (
                                <ListItem
                                    key={product._id}
                                    alignItems="center"
                                    secondaryAction={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                                            <Button aria-label="disminuir cantidad" size="small" variant="text" sx={{ minWidth: 0, px: 0.7, py: 0, lineHeight: 1 }} onClick={() => deleteProdFromCart(product._id)}>-</Button>
                                            <Button
                                                aria-label="aumentar cantidad"
                                                size="small"
                                                variant="text"
                                                sx={{ minWidth: 0, px: 0.7, py: 0, lineHeight: 1 }}
                                                disabled={Number.isFinite(product?.stock) && quantity >= product.stock}
                                                onClick={() => addToCart(product)}
                                            >
                                                +
                                            </Button>
                                            <Button aria-label="eliminar producto" size="small" variant="text" color="error" sx={{ minWidth: 0, px: 0.7, py: 0, lineHeight: 1 }} onClick={() => removeItem(product._id)}>x</Button>
                                        </Box>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="rounded"
                                            src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                                            alt={product.name}
                                            imgProps={{ onError: (e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'; } }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={product.name}
                                        secondary={`Cantidad: ${quantity} • $${product.price}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <Box sx={{ p: 1.5, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                            <Button size="small" variant="contained" onClick={() => { handleClose(); navigate('/cart'); }} sx={{ px: 1 }}>
                                Finalizar compra
                            </Button>
                        </Box>
                    </>
                )}
            </Popover>
        </>
    );
};

export default CartMenu;


