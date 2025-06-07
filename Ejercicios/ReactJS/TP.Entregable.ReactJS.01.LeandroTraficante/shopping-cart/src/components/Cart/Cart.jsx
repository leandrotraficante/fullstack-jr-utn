import React from 'react';
import './cart.css';
import Button from '../Button/Button'; // Asumiendo que tienes este componente

function Cart({ cartItems, onRemove }) {
  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div key={item.producto.id} className="cart-item">
          <img src={item.producto.imagen} alt={item.producto.nombre} className="cart-img" />
          <div className="cart-info">
            <h4>{item.producto.nombre}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.producto.precio}</p>
            <div className="subtotal-container">
              <p className="subtotal">Subtotal: ${item.producto.precio * item.cantidad}</p>
            </div>
          </div>
          <Button className="btn-eliminar-producto" onClick={() => onRemove(item.producto.id)}>Eliminar</Button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
