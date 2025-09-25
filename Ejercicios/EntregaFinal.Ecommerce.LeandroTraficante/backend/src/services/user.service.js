import UserRepository from '../repository/user.repository.js';

const usersRepository = new UserRepository();

const getAll = async () => {
    const users = await usersRepository.getAll();
    return users
}

const getById = async (userId) => {
    const userById = await usersRepository.getById(userId);
    return userById
}

const saveUser = async (userData) => {
    const user = await usersRepository.save(userData)
    return user;
};

const updateUser = async (userId, userData) => {
    const userToUpdate = await usersRepository.updateById(userId, userData);
    return userToUpdate
};

const deleteUserById = async (userId) => {
    const userToDelete = await usersRepository.deleteById(userId);
    return userToDelete
}

export default {
    getAll,
    getById,
    saveUser,
    updateUser,
    deleteUserById
};
