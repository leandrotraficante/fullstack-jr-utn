import jwt from 'jsonwebtoken';

const secretKey = 'development-full-stack'; // esto va en .env

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send({ error: 'Access denied. No token provided.' });
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send({ error: 'Invalid token.' });
        req.user = user;
        next();
    });
};

export default authMiddleware;