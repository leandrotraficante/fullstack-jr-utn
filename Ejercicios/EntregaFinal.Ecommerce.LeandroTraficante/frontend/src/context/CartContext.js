import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingCartItem = cart.find((cartItem) => cartItem.product._id === product._id)
        if (existingCartItem) {
            if (existingCartItem.quantity < product.stock) {
                setCart((prev) => prev.map((cartItem) => {
                    if (cartItem.product._id === product._id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    }
                    return cartItem
                }))
            }
        } else {
            if (product.stock > 0) {
                setCart((prev) => [...prev, { product, quantity: 1 }])
            }
        }
    };

    const deleteProdFromCart = (productId) => {
        setCart((prev) => {
            const existingCartItem = prev.find((cartItem) => cartItem.product._id === productId)
            if (!existingCartItem) return prev
            if (existingCartItem.quantity > 1) {
                return prev.map((cartItem) => {
                    if (cartItem.product._id === productId) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem
                })
            }
            return prev.filter((cartItem) => cartItem.product._id !== productId)
        })
    };

    const removeItem = (productId) => {
        setCart((prev) => prev.filter((cartItem) => cartItem.product._id !== productId))
    };

    const clearCart = () => {
        setCart([])
    };

    const finalizePurchase = async () => {
        clearCart();
        return true;
    };

    return React.createElement(
        CartContext.Provider,
        { value: { cart, addToCart, deleteProdFromCart, removeItem, clearCart, finalizePurchase } },
        children
    )
}