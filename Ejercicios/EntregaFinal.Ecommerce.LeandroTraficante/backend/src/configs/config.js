import dotenv from 'dotenv';

dotenv.config();

const configs = {
    PORT: process.env.PORT,
    MONGODB: process.env.MONGO_URI,
    JWT_SecretKey: process.env.JWT_SecretKey,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    CORS: process.env.CORS_ORIGINS
};

export default configs;