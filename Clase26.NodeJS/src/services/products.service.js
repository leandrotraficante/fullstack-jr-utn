import ProductsRepository from '../repository/product.repository.js';

const productsRepository = new ProductsRepository();

const getAll = async () => {
    const products = await productsRepository.getAll();
    return products
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
