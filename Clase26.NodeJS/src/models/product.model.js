import mongoose from 'mongoose';

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel;