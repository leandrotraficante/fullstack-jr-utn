import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import configs from '../configs/config.js'


const createHash = password =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (plainPassword, hashedPassword) =>
    bcrypt.compareSync(plainPassword, hashedPassword);

const generateToken = (user) => {
    return jwt.sign(
        {
            userId: user._id,
            email: user.email,
        },
        configs.JWT_SecretKey,
        { expiresIn: configs.jwtExpiresIn }
    );
};

const verifyToken = async (token) => {
    if (!token) {
        throw new Error('Token is required');
    }

    try {
        return jwt.verify(token, configs.JWT_SecretKey);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token has expired');
        } else {
            throw new Error('Invalid token');
        }
    }
};

export {
    createHash,
    isValidPassword,
    generateToken,
    verifyToken
};