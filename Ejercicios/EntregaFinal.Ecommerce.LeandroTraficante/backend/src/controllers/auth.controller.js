import authService from "../services/auth.service.js";

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email and password are required!'
            });
        };

        const result = await authService.register(email, password);

        res.cookie('jwt', result.token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        });
        
        res.status(201).json({
            success: true,
            user: result.user,
            token: result.token,
            message: 'User registered successfully'
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                error: 'User already exists'
            });
        }

        return res.status(500).json({
            success: false,
            error: error.message || 'Internal server error'
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ 
                success: false,
                error: 'Email and password are required' 
            });
        };

        const result = await authService.login(email.toLowerCase(), password);

        res.cookie('jwt', result.token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            user: result.user,
            token: result.token,
            message: 'Login successful'
        });


    } catch (error) {
        if (error.message === 'Invalid credentials') {
            res.status(401).json({ 
                success: false,
                error: 'Invalid email or password' 
            });
        } else {
            res.status(500).json({ 
                success: false,
                error: 'Unable to log in. Please try again later' 
            });
        }
    }
};

const logout = async (req, res) => {
    try {
        const userId = req.user?.userId || 'unknown';
        
        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: 'strict'
        });

        res.status(200).json({
            success: true,
            message: 'Logout successful',
            userId: userId
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Unable to log out. Please try again later' 
        });
    }
};



export {
    register,
    login,
    logout
}