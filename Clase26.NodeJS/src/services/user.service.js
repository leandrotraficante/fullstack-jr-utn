import UserRepository from '../repository/user.repository.js';

const usersRepository = new UserRepository();

const getAll = async () => {
    const users = await usersRepository.getAll();
    return users
}

const saveUser = async (userData) => {
    const user = await usersRepository.save(userData)
    return user;
};

export default {
    getAll,
    saveUser,
};
