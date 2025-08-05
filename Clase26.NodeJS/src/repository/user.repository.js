import usersModel from '../models/users.model.js';

export default class UserRepository {
    getAll = async () => {
        const users = await usersModel.find().lean();//metodo para transforamr de BSON a POJO
        return users;
    };

    save = async (user) => {
        const result = await usersModel.create(user);
        return result;
    };
}