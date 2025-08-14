import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersModel from '../models/users.model.js';

const secretKey = 'development-full-stack'; // esto va en .env

const registerUser = async (email, password) => {
    const existingUser = await usersModel.findOne({ email });
    if (existingUser) {
        return null;
    }
    
    const hashedPassword = await bcrypt.hash(password, 15);

    const newUser = new usersModel({
        email,
        password: hashedPassword
    });
    await newUser.save();
    return newUser;
};

const loginUser = async (email, password) => {
    const user = await usersModel.findOne({ email });
    if (!user) {
        return null;
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return null;
    }
    
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '24h' });
    return token;
};

export default {
    registerUser,
    loginUser
};