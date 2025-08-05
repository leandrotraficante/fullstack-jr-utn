import express from 'express'
import mongoose from 'mongoose'
import testRouter from './routes/test.routes.js';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/users.routes.js';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/catalogo-db', {})

//Ejemlo de middleware
app.use((req, res, next) => {
    console.log(`Llega una petición a ${req.method} a ${req.url}`);
    next(); // sigue al siguiente middleware o ruta
});

app.use(express.json()); // para poder recibir los body en JSON 

app.use('/api', testRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

// app.get('/', (req, res) => { // patron de la ruta que queremos recibir; es la ruta raiz; 
// // REQ & RES son las rquest de la solicitud HTTP y response es lo que verá el cliente
//     res.send('Hola desde Express!')
// });

// app.get('/test', (req, res) => {
//     res.send('Probando ruta /test')
// });

// app.get('/', (req, res) => {
//     res.send('API funcionando correctamente')
// });

app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body.name)
});

app.listen(PORT, () => { // el metodo listen recibe el puerto donde el servidor debe comunicarse con el exterior
    console.log(`Servidor iniciado en puerto: ${PORT}`)
});