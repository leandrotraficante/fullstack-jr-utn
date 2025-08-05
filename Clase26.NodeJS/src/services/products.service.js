import ProductsRepository from '../repository/product.repository.js';

const productsRepository = new ProductsRepository();

const getAll = async () => {
    const products = await productsRepository.getAll();
    return products
}

const saveProduct = async (productData) => {
    const product = await productsRepository.save(productData)
    return product;
};

export default {
    getAll,
    saveProduct,
};
