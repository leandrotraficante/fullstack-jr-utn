import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product.routes.js';
import userRouter from './routes/users.routes.js';
import catalogRouter from './routes/catalog.routes.js';
import authRouter from './routes/auth.routes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const app = express();
const PORT = 8080; // iria en variable de entorno .env

// iria en variable de entorno .env
mongoose.connect('mongodb+srv://leandrotraficante:krtKsIAIqJJVFfPO@cluster0.spjsbdg.mongodb.net/FullStackJRUTN_Clase26_API_Catalog?retryWrites=true&w=majority&appName=Cluster0', {})

app.use(express.json()); // para poder recibir los body en JSON 

//Configuracion inicial de documentación swagger:
const swaggerOptions = {
    definition: {
        openapi: '3.0.1', 
        info: {
            title: 'API de Catalogos de Productos',
            description: 'API pensada para e-commerce basico'
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Servidor de desarrollo'
            }
        ]
    },
    apis: ['./src/routes/*.js', './docs/**/*.yaml'] // Incluye tanto rutas JS como archivos YAML
};

const specs = swaggerJSDoc(swaggerOptions);

app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/catalog', catalogRouter);
app.use('/auth', authRouter);


app.listen(PORT, () => { // el metodo listen recibe el puerto donde el servidor debe comunicarse con el exterior
    console.log(`Servidor iniciado en puerto: ${PORT}`)
}); 