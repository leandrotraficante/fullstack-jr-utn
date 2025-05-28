import React, { useState, useEffect } from "react";
import axios from 'axios';

function Page3() {
  const dogApi = "https://dog.ceo/api/breeds/image/random";
  const [dog, setDog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dogAsync = async () => {
    try {
      const response = await axios.get(dogApi);
      setDog(response.data);
    } catch (error) {
      console.log("Error fetching dog image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dogAsync();
  }, []);

  return (
    <div style={{ backgroundColor: 'lightgrey', height: 200 }}>
      <h3>EJEMPLO DE CONSUMIR API CON AXIOS + ASYNC AWAIT</h3>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <img src={dog.message} alt="Dog" height={150} />
      )}
    </div>
  );
}

export default Page3;
