import mongoose from 'mongoose';

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre no puede exceder 100 caracteres']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'La descripción no puede exceder 500 caracteres']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'El precio no puede ser negativo'],
        validate: {
            validator: function(v) {
                return v > 0;
            },
            message: 'El precio debe ser mayor a 0'
        }
    }
}, {
    timestamps: true
});

const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel;