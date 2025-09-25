import ProductsRepository from '../repository/product.repository.js';
import catalogModel from '../models/catalog.model.js';
import mongoose from 'mongoose';

const productsRepository = new ProductsRepository();

const getAll = async (searchTerm = '', page = 1, limit = 10, categoryId = '') => {
    let query = {};
    
    if (searchTerm) {
        query.$or = [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } }
        ];
    }
    
    const activeCategories = await catalogModel.find({ isActive: true });
    const activeCategoryIds = activeCategories.map(cat => cat._id);
    
    if (categoryId) {
        const categoryObjectId = new mongoose.Types.ObjectId(categoryId);
        if (activeCategoryIds.some(id => id.toString() === categoryId)) {
            query.category = categoryObjectId;
        } else {
            query.category = { $in: [] };
        }
    } else {
        query.category = { $in: activeCategoryIds };
    }
    
    const products = await productsRepository.getAll(query, page, limit);
    return products;
};

const getById = async (productId) => {
    const productById = await productsRepository.getById(productId);
    
    if (productById) {
        // Verificar que la categoría esté activa
        const category = await catalogModel.findById(productById.category);
        if (!category || !category.isActive) {
            throw new Error('Producto no disponible');
        }
    }
    
    return productById
}

const saveProduct = async (productData) => {
    const { categoryName, ...otherData } = productData;
    
    const category = await catalogModel.findOne({ name: categoryName });
    
    if (!category) {
        throw new Error(`Categoría "${categoryName}" no encontrada`);
    }
    
    const product = await productsRepository.save({
        ...otherData,
        category: category._id
    });
    
    return product;
};

const updateProduct = async (productId, productData) => {
    const productToUpdate = await productsRepository.updateById(productId, productData);
    return productToUpdate
};

const deleteProductById = async (productId) => {
    const productToDelete = await productsRepository.deleteById(productId);
    return productToDelete
}

export default {
    getAll,
    getById,
    saveProduct,
    updateProduct,
    deleteProductById
};
