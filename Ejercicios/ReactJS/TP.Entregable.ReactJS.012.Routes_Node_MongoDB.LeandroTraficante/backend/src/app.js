import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import skillsRoutes from './router/skills.route.js';
import projectsRoutes from './router/projects.route.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const app = express();
const PORT = 8080;
mongoose.connect('mongodb+srv://leandrotraficante:Ad79M97L9f5G9z09@cluster0.spjsbdg.mongodb.net/FullStackJRUTN_TP_0012?retryWrites=true&w=majority&appName=Cluster0', {});

app.use(express.json());

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:5173', // URL del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})); 

const swaggerOptions = {
    definition: {
        openapi: '3.0.1', 
        info: {
            title: 'API de Portfolio Personal',
            description: 'API para gestión de skills y projects'
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Servidor de desarrollo'
            }
        ]
    },
    apis: ['./src/router/*.js', './docs/**/*.yaml']
};

const specs = swaggerJSDoc(swaggerOptions);

app.get('/', (req, res) => res.send('API OK'));

app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);

app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto: ${PORT}`);
});