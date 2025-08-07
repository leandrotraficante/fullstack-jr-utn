import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from '../controllers/product.controller.js'

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', updateProductById);
productRouter.delete('/:id', deleteProductById);

export default productRouter;
