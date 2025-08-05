import mongoose from 'mongoose';

const usersCollection = 'users';

const userschema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:  {
        type: String,
        require: true,
    },
});

const usersModel = mongoose.model(usersCollection, userschema);

export default usersModel;