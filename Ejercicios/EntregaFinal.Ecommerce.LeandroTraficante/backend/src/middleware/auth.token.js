import jwt from 'jsonwebtoken';
import configs from '../configs/config.js'

const secretKey = configs.JWT_SecretKey;

const authMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token.' });
        req.user = user;
        next();
    });
};

export default authMiddleware;