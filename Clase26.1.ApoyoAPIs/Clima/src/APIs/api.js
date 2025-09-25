import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '7b40f1aa132afe9d0125ec3139bb078d'


const client = axios.create({
    baseURL: API_BASE_URL,
});

const obtenerDatosClima = async(city) => {
    try {
        const respuesta = await client.get(`?q=${city}&units=metric&appid=${API_KEY}`);
        return respuesta.data
    } catch (error) {
        console.log("ERROR:" + error)
    } finally {
        console.log("Llamada a API Clima exitosa")
    }
};

export default obtenerDatosClima