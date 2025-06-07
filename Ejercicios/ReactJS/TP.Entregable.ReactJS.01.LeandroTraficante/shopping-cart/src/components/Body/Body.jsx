import React from 'react';
import List from '../List/List';
import './body.css'

function Body({ addToCart }) {
    return (
        <main>
            <h3 className='title-body'>Products</h3>
            <List addToCart={addToCart}></List>
        </main>
    );
}

export default Body;