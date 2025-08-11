import usersModel from '../models/users.model.js';

export default class UserRepository {
    getAll = async () => {
        const users = await usersModel.find().lean();//metodo para transforamr de BSON a POJO
        return users;
    };

    getById = async (userId) => {
        const userById = await usersModel.findById(userId);
        return userById;
    };

    save = async (user) => {
        const result = await usersModel.create(user);
        return result;
    };

    updateById = async (userId, userData) => {
        const userToUpdate = await usersModel.findByIdAndUpdate(userId, userData, { new: true });
        if (!userToUpdate) {
            throw new Error('Usuario no encontrado');
        }
        return userToUpdate;
    };

    deleteById = async (userId) => {
        const userToDelete = await usersModel.findByIdAndDelete(userId);
        if (!userToDelete) {
            throw new Error('Usuario no encontrado');
        }
        return userToDelete;
    };
}