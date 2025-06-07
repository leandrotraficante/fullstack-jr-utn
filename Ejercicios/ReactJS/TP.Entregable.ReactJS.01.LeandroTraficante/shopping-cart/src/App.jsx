import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import React, { useState, useCallback } from 'react'; // el callback para despues pasar en la funcion de vaciar carrito asi no entra en loop infinito 
import { Routes, Route } from 'react-router-dom';
import CartCheckout from './pages/CartCheckout/CartCheckout';
import CompraRealizada from './pages/CompraRealizada/CompraRealizada';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const vaciarCarrito = useCallback(() => {
    setCartItems([]);
  }, []);

  const addToCart = (producto, cantidad) => {
    if (cantidad === 0) return;

    setCartItems(prevItems => {
      const itemExistente = prevItems.find(item => item.producto.id === producto.id);

      if (itemExistente) {
        return prevItems.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevItems, { producto, cantidad }];
      }
    });
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Body addToCart={addToCart} />} />
        <Route path="/checkout" element={<CartCheckout cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/compra-realizada" element={<CompraRealizada vaciarCarrito={vaciarCarrito} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
