import { createHash, isValidPassword, generateToken } from '../utils/utils.js';
import usersModel from '../models/users.model.js'

const register = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    };

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await usersModel.findOne({ email: normalizedEmail });

    if (existingUser) {
        throw new Error('User already exists');
    };

    const hashedPassword = createHash(password);

    const newUser = await usersModel.create({ email: normalizedEmail, password: hashedPassword });

    const token = generateToken(newUser);

    return {
        user: {
            id: newUser._id,
            email: newUser.email
        },
        token
    }
};

const login = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    };

    const user = await usersModel.findOne({ email });

    if (!user) {
        throw new Error('Invalid credentials');
    };

    const comparePassword = isValidPassword(password, user.password);

    if (!comparePassword) {
        throw new Error('Invalid credentials');
    }

    const token = generateToken(user);

    return {
        token: token,
        user: {
            id: user._id,
            email: user.email
        }
    }

}

export default {
    register,
    login
}