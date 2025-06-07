import React from 'react';
import Cart from '../../components/Cart/Cart';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './CartCheckout.css'

function CartCheckout({ cartItems, setCartItems }) {
  const calcularTotal = () =>
    cartItems.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  const navigate = useNavigate();

    const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.producto.id !== id));
  };

  return (
    <div className="cart-checkout-page">
      <Button onClick={() => navigate('/')}>Volver a Home</Button>
      <h2>Resumen del Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>

      ) : (
        <>
          <Cart cartItems={cartItems} onRemove={handleRemove}/>
          <div className="cart-total">
            <h3>Total a pagar: ${calcularTotal()}</h3>
            <Button onClick={() => navigate('/compra-realizada')}>Finalizar compra</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartCheckout;
