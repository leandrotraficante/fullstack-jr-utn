import authService from '../services/auth.service.js';

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.registerUser(email, password);
        
        if (!user) { // "Si no se puede crear nuevo usuario"
            // Porque el email ya existe en DB:
            return res.status(400).send({ error: 'Cannot create user: email already exists' });
        }
        
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.loginUser(email, password);
        
        if (!token) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }
        
        res.status(200).send({ 
            token,
            message: 'Login successful'
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export {
    registerUser,
    loginUser
};
