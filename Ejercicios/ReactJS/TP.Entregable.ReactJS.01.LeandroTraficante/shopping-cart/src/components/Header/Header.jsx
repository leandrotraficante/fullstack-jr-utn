import React from 'react';
import cartLogo from '../../assets/shopping-cart2.png'
import Button from '../Button/Button';
import './header.css'
import '../Button/button.css'
import { useNavigate } from 'react-router-dom';


function Header({ cartItems = [] }) {

    const totalCantidad = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

    const navigate = useNavigate();

    const navToCart = () => { navigate('/checkout') };

    return (
        <header className='header'>
            <h3 className='header-title'>SHOPPING CART</h3>
            <div className='actions'>
                <Button className='btn-my-profile'>Mi Cuenta</Button>
                <div className='cart-container' onClick={() => {navToCart()}}>
                    <img src={cartLogo} alt="carrito" className='cart-icon' />
                    <span className='cart-counter'>{totalCantidad}</span>
                </div>

            </div>

        </header>

    );
}

export default Header;