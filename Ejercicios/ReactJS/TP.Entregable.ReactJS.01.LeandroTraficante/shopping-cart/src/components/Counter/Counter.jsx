import React, { useState } from 'react';
import './counter.css'
import Button from '../../components/Button/Button'

function Counter({ onQuantityChange }) {
    const [count, setCount] = useState(1);

    const incrementar = () => {
        const nuevoCount = count + 1;
        setCount(nuevoCount);
        onQuantityChange?.(nuevoCount);
    };

    const bajar = () => {
        if (count === 1) return;
        const nuevoCount = count - 1;
        setCount(nuevoCount);
        onQuantityChange?.(nuevoCount);
    };



    return (
        <div className='counter'>
            <Button onClick={bajar} className="btn-counter">-</Button>
            <span>{count}</span>
            <Button onClick={incrementar} className="btn-counter">+</Button>

        </div>
    );
}

export default Counter;