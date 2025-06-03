import React, { useState, useEffect } from "react";

// EJEMPLO DE CONSUMIR API DESDE FETCH (SIN AXIOS NI ASYNC AWAIT)

function Page1() {
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    const [dog, setDog] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(dogApi)
            .then((response) => response.json())
            .then((dog) => {
                setDog(dog)
                setIsLoading(false)
            })
    }, [])



    return (
        // se puede agregar un estado "loading" mientras carga, previo a que muestre la foto 
        <div style={{ backgroundColor: 'lightgreen', height: 200 }}>
            <h3>EJEMPLO DE CONSUMIR API DESDE FETCH (SIN AXIOS NI ASYNC AWAIT)</h3>
            {isLoading ?
                <h2>Loading...</h2>
                :
                <img src={dog.message} alt="" height={150} />
            }
        </div>
    );
}

export default Page1;