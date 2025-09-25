import userService from '../services/user.service.js'

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const userById = await userService.getById(userId);
        res.status(200).json(userById)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    
    if (Object.keys(userData).length === 0) {
        return res.status(400).json({ error: 'Debe enviar al menos un campo para actualizar' });
    }
    
    try {
        const updatedUser = await userService.updateUser(userId, userData);
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await userService.deleteUserById(userId);
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};