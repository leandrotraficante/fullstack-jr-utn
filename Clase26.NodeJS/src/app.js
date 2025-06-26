import express from 'express'

const app = express();
const PORT = 3000;

//Ejemlo de middleware
app.use((req, res, next) => {
    console.log(`Llega una petición a ${req.method} ${req.url}`);
    next(); // sigue al siguiente middleware o ruta
})

app.get('/', (req, res) => { // patron de la ruta que queremos recibir; es la ruta raiz; 
// REQ & RES son las rquest de la solicitud HTTP y response es lo que verá el cliente
    res.send('Hola desde Express!')
});

app.listen(PORT, () => { // el metodo listen recibe el puerto donde el servidor debe comunicarse con el exterior
    console.log(`Servidor iniciado en puerto: ${PORT}`)
});