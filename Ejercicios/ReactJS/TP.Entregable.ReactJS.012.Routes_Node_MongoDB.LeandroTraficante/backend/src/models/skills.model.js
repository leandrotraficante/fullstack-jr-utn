import mongoose from 'mongoose';

const skillsCollection = 'skills';

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500, 'La descripción no puede exceder 500 caracteres']
    }
}, {
    timestamps: true
});

const skillsModel = mongoose.model(skillsCollection, skillSchema);

export default skillsModel;