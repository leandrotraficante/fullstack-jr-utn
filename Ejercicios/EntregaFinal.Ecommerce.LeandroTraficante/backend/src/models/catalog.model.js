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
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
        minlength: [2, 'El código debe tener al menos 2 caracteres'],
        maxlength: [10, 'El código no puede exceder 10 caracteres'],
        match: [/^[A-Z0-9-]+$/, 'Código inválido - solo letras, números y guiones'],
        immutable: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [300, 'La descripción no puede exceder 300 caracteres']
    },
    image: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return !v || /^https?:\/\/\S+$/i.test(v);
            },
            message: 'La imagen debe ser una URL válida (http/https)'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const catalogModel = mongoose.model(catalogCollection, catalogSchema);

export default catalogModel;
