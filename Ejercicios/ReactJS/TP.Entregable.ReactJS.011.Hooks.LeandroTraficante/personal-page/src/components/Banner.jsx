import React, { useState, useEffect } from 'react';

function Banner() {
    const [backgroundColor, setBackgroundColor] = useState('#ff0000');

    const generateRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setBackgroundColor(generateRandomColor());
        }, 5000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div style={{ backgroundColor: backgroundColor, padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Tecnología y eficiencia a su alcance</h1>
        </div>
    );
}

export default Banner;