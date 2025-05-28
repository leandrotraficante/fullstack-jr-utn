import React, { useState, useEffect } from "react";
import axios from 'axios';


function Page3() {
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    const [dog, setDog] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // La buena practica es primero crear la funcion async, y luego llamarla dentro del useEffect:
    const dogAsync = async () => {
        const response = await axios.get(dogApi)
        setDog(response.data)
        setIsLoading(false)
    };

    useEffect(() => {
        try {
            dogAsync();
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div style={{ backgroundColor: 'lightgrey', height: 200 }}>
            <h3>EJEMPLO DE CONSUMIR API CON AXIOS + ASYNC AWAIT</h3>
            {isLoading ?
                <h2>Loading...</h2>
                :
                <img src={dog.message} alt="" height={150} />
            }
        </div>
    );
}

export default Page3;