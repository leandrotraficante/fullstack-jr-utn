import userService from '../services/user.service.js'

const createUser = async (req, res) => {
    try {
        const user = await userService.saveUser(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        console.log(users)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const userById = await userService.getById(userId);
        res.status(200).send(userById)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
        const updatedUser = await userService.updateUser(userId, userData);
        console.log(updatedUser)
        res.status(200).send(updatedUser)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await userService.deleteUserById(userId);
        console.log(deletedUser)
        res.status(200).send(deletedUser)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

export {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};