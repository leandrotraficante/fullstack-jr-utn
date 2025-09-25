import mongoose from 'mongoose';

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre no puede exceder 100 caracteres']
    },
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
        minlength: 3,
        maxlength: 20,
        match: [/^[A-Z0-9-]+$/, 'Código inválido'],
        immutable: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'La descripción no puede exceder 500 caracteres']
    },
    image: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return !v || /^https?:\/\/\S+$/i.test(v);
            },
            message: 'La imagen debe ser una URL válida (http/https)'
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'El precio debe ser mayor a 0']
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock no puede ser negativo'],
        default: 0
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'catalog', 
        required: true 
    }
}, {
    timestamps: true
});

const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel;