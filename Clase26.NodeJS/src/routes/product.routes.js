import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from '../controllers/product.controller.js'
import authMiddleware from '../middleware/auth.token.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/', authMiddleware,createProduct);
productRouter.get('/:id', authMiddleware, getProductById);
productRouter.put('/:id', authMiddleware, updateProductById);
productRouter.delete('/:id', authMiddleware, deleteProductById);

export default productRouter;
