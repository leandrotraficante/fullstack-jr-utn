import React, { useState } from 'react';
import './Gallery.css';
import gato1 from '../assets/images/gato1.png';
import gato2 from '../assets/images/gato2.png';
import gato3 from '../assets/images/gato3.png';
import gato4 from '../assets/images/gato4.png';
import gato5 from '../assets/images/gato5.png';
import gato6 from '../assets/images/gato6.png';


const Gallery = () => {

    const [isFirstArray, setIsFirstArray] = useState(true);


    const arrayImages1 = [gato1, gato2, gato3];
    const arrayImages2 = [gato4, gato5, gato6];

    const currentArray = isFirstArray ? arrayImages1 : arrayImages2;




    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Galería</h2>
            <div className="gallery-images">
                {currentArray.map((image, index) => (
                    <img 
                        src={image} 
                        alt="Gato" 
                        key={index}
                        onClick={() => setIsFirstArray(!isFirstArray)}
                        className="gallery-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;