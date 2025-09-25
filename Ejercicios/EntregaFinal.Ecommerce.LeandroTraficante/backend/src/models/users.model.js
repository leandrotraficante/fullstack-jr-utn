import mongoose from 'mongoose';

const usersCollection = 'users';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/i, 'Email inválido']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
        maxlength: [120, 'La contraseña es demasiado larga'],
        validate: {
            validator: v => /[A-Za-z]/.test(v) && /\d/.test(v),
            message: 'La contraseña debe incluir letras y números'
        }
    }
}, {
    timestamps: true
});

const usersModel = mongoose.model(usersCollection, userSchema);

export default usersModel;