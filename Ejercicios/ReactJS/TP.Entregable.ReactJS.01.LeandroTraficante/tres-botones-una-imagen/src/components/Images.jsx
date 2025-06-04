import React, { useState } from 'react';
import gato1 from '../assets/images/gato1.png';
import gato2 from '../assets/images/gato2.png';
import gato3 from '../assets/images/gato3.png';


function Images() {

    const images = {
        img1: gato1,
        img2: gato2,
        img3: gato3
    }

    const [actualImage, setActualImage] = useState(images.img1);

    return (
        <div>
            <img src={actualImage} width={150}/> 
            <hr />
            <button onClick={() => {setActualImage(images.img1)}}>Gatito 1</button>
            <button onClick={() => {setActualImage(images.img2)}}>Gatito 2</button>
            <button onClick={() => {setActualImage(images.img3)}}>Gatito 3</button>
        </div>
    );
}

export default Images;