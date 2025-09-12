import mongoose from 'mongoose';

const projectsCollection = 'projects';

const projectSchema = new mongoose.Schema({
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
    },
    technologies: {
        type: Array,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true,
        enum: ['Completed', 'In progress'],
        default: 'In progress'
    }
}, {
    timestamps: true
});

const projectsModel = mongoose.model(projectsCollection, projectSchema);

export default projectsModel;