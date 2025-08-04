import productsService from '../services/products.service.js'

const createProduct = async (req, res) => {
    try {
        const product = await productsService.createProduct(req.body);
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
};

export {
    createProduct
}