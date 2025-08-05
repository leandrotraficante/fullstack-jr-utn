import mongoose from 'mongoose';

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
});

const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel;