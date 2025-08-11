import productsModel from '../models/product.model.js'

export default class ProductsRepository {

    getAll = async () => {
        const products = await productsModel.find().lean();//metodo para transforamr de BSON a POJO
        return products;
    };

    getById = async (productId) => {
        const productById = await productsModel.findById(productId);
        return productById
    }

    save = async (product) => {
        const result = await productsModel.create(product);
        return result;
    };

    updateById = async (productId, productData) => {
        const productToUpdate = await productsModel.findByIdAndUpdate(productId, productData, { new: true });
        if (!productToUpdate) {
            throw new Error('Producto no encontrado');
        }
        return productToUpdate;
    };

    deleteById = async (productId) => {
        const productToDelete = await productsModel.findByIdAndDelete(productId);
        if (!productToDelete) {
            throw new Error('Producto no encontrado');
        }
        return productToDelete;
    }
}
