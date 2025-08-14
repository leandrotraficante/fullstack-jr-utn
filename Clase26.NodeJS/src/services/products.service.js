import ProductsRepository from '../repository/product.repository.js';

const productsRepository = new ProductsRepository();

const getAll = async (searchTerm = '') => {
    let query = {};
    
    // Búsqueda blanda por nombre O descripción
    if (searchTerm) {
        query.$or = [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } }
        ];
    }
    
    const products = await productsRepository.getAll(query);
    return products;
};

const getById = async (productId) => {
    const productById = await productsRepository.getById(productId);
    return productById
}

const saveProduct = async (productData) => {
    const product = await productsRepository.save(productData)
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
