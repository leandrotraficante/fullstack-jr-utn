import React from 'react';
import Counter from '../Counter/Counter';
import './card.css'
import { useState } from 'react';
import Button from '../Button/Button';
import './card.css'

function Card({ producto, addToCart }) {

    const { imagen, nombre, descripcion, precio } = producto;
    const [cantidad, setCantidad] = useState(1);

    const handleToCart = () => {
        addToCart(producto, cantidad)
    };

    return (
        <div className='card'>
            <img src={imagen} alt={nombre} className='card-img' />
            <h4 className='product-title'>{nombre}</h4>
            <p className='product-description'>{descripcion}</p>
            <p className='product-price'>Precio unitario: ${precio}</p>


            <Counter onQuantityChange={setCantidad}></Counter>
            <Button onClick={handleToCart} className="btn-add-to-cart">Agregar al Carrito</Button>
        </div>
    );
}

export default Card;