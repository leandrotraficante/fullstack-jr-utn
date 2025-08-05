import productsService from '../services/products.service.js'

const createProduct = async (req, res) => {
    try {
        const product = await productsService.saveProduct(req.body);
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
}

export {
    createProduct,
    getAllProducts
};