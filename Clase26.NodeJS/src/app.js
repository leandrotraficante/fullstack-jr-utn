import express from 'express'
import testRouter from './routes/test.routes.js';

const app = express();
const PORT = 3000;

//Ejemlo de middleware
app.use((req, res, next) => {
    console.log(`Llega una petición a ${req.method} a ${req.url}`);
    next(); // sigue al siguiente middleware o ruta
});

app.use(express.json()); // para poder recibir los body en JSON 

app.use('/api', testRouter)

// app.get('/', (req, res) => { // patron de la ruta que queremos recibir; es la ruta raiz; 
// // REQ & RES son las rquest de la solicitud HTTP y response es lo que verá el cliente
//     res.send('Hola desde Express!')
// });

// app.get('/test', (req, res) => {
//     res.send('Probando ruta /test')
// });


// app.post('/', (req, res) => {
//     console.log('OK peticion POST /')
//     res.send('Probando POST /')

// });
// app.post('/test', (req, res) => {
//     console.log(req.body)
//     res.send(req.body.name)
// });

app.listen(PORT, () => { // el metodo listen recibe el puerto donde el servidor debe comunicarse con el exterior
    console.log(`Servidor iniciado en puerto: ${PORT}`)
});