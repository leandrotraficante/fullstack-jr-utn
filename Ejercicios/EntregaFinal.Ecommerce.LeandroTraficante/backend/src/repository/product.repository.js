import productsModel from '../models/product.model.js'

export default class ProductsRepository {

    getAll = async (query = {}, page = 1, limit = 10) => {
        const skip = (page - 1) * limit;

        const products = await productsModel
            .find(query)
            .populate('category', 'name')
            .skip(skip)
            .limit(limit)
            .lean();

        const total = await productsModel.countDocuments(query);

        return {
            products,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    };

    getById = async (productId) => {
        const productById = await productsModel
            .findById(productId)
            .populate('category', 'name');
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
