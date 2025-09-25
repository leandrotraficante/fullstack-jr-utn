import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/users.routes.js';
import catalogRouter from './routes/catalog.routes.js';
import authRouter from './routes/auth.routes.js';
import cors from 'cors';
import configs from './configs/config.js';


const app = express();
const PORT = configs.PORT || 3000;
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
const MONGODB = configs.MONGODB;


mongoose.connect(MONGODB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: ORIGIN, credentials: true }));

app.get('/', (req, res) => res.json({ 
    success: true, 
    message: 'API OK' 
}));

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/catalog', catalogRouter);
app.use('/auth', authRouter);


app.listen(PORT, () => { 
    console.log(`Servidor iniciado en puerto: ${PORT}`)
}); 