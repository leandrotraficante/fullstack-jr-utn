import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

function Cart() {
    const { cart, addToCart, deleteProdFromCart, removeItem, clearCart, finalizePurchase } = useCart();
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div style={{ padding: 16 }}>
                <h2>Tu carrito está vacío</h2>
            </div>
        );
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div style={{ padding: 16 }}>
            <h2>Carrito</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {cart.map(({ product, quantity }) => (
                    <li key={product._id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #eee' }}>
                        <img
                            src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                            alt={product.name}
                            onError={(e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'; }}
                            style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }}
                        />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600 }}>{product.name}</div>
                            <div>${product.price} x {quantity}</div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <Button variant="outlined" size="small" onClick={() => deleteProdFromCart(product._id)}>-</Button>
                            <Button variant="outlined" size="small" onClick={() => addToCart(product)}>+</Button>
                            <Button variant="text" size="small" color="error" onClick={() => removeItem(product._id)}>Eliminar</Button>
                        </div>
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div>Total ítems: {totalItems}</div>
                    <div>Total: ${totalPrice.toFixed(2)}</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Button variant="outlined" color="inherit" onClick={clearCart}>Vaciar</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={async () => {
                            try {
                                await finalizePurchase();
                                setSnackbarMessage('¡Compra realizada con éxito!');
                                setSnackbarSeverity('success');
                                setSnackbarOpen(true);
                                setTimeout(() => {
                                    navigate('/purchase-success');
                                }, 1500);
                            } catch (err) {
                                console.error('Error finalizando compra', err);
                                setSnackbarMessage('No se pudo finalizar la compra. Intenta nuevamente.');
                                setSnackbarSeverity('error');
                                setSnackbarOpen(true);
                            }
                        }}
                    >
                        Finalizar compra
                    </Button>
                </div>
            </div>
            
            <Snackbar 
                open={snackbarOpen} 
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleSnackbarClose} 
                    severity={snackbarSeverity} 
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Cart;

