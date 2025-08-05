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

export {
    createUser,
    getAllUsers
};