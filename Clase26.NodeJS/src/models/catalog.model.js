import mongoose from 'mongoose';

const catalogCollection = 'catalog';

const catalogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [50, 'El nombre no puede exceder 50 caracteres']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
    }
}, {
    timestamps: true
});

const catalogModel = mongoose.model(catalogCollection, catalogSchema);

export default catalogModel;
