import React, { useState, useEffect } from "react";
import axios from 'axios';


function Page2() {
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    const [dog, setDog] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(dogApi).then((response) => {
            setDog(response.data)
            setIsLoading(false)
        })
    }, [])
    

    return (
        <div style={{ backgroundColor: 'pink', height: 200 }}>
            <h3>EJEMPLO DE CONSUMIR API CON AXIOS</h3>
            {isLoading ?
                <h2>Loading...</h2>
                :
                <img src={dog.message} alt="" height={150} />
            }
        </div>
    );
}

export default Page2;