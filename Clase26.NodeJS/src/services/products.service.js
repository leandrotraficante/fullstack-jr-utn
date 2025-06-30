import productsModel from '../models/product.model.js';

const createProduct = async (productData) => {
    const product = new productsModel(productData);
    return await product.save();
};

export default {
    createProduct,
};
