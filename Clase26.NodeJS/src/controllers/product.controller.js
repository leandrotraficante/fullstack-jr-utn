import productsService from '../services/products.service.js'

const createProduct = async (req, res) => {
    const productData = req.body;
    try {
        const product = await productsService.saveProduct(productData);
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAll();
        console.log(products)
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const productById = await productsService.getById(productId);
        res.status(200).send(productById)
    } catch (error) {
        res.status(500).send({ error: error.message })

    }
};

const updateProductById = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    try {
        const updatedProduct = await productsService.updateProduct(productId, productData);
        console.log(updatedProduct)
        res.status(200).send(updatedProduct)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productsService.deleteProductById(productId);
        console.log(deletedProduct)
        res.status(200).send(deletedProduct)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
};