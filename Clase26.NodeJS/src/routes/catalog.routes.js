import express from 'express';
import { createCatalog, getAllCatalogs, getCatalogById, updateCatalogById, deleteCatalogById } from '../controllers/catalog.controller.js'
import authMiddleware from '../middleware/auth.token.js';

const catalogRouter = express.Router();

catalogRouter.get('/', getAllCatalogs);
catalogRouter.post('/', authMiddleware, createCatalog);
catalogRouter.get('/:id', authMiddleware, getCatalogById);
catalogRouter.put('/:id', authMiddleware, updateCatalogById);
catalogRouter.delete('/:id', authMiddleware, deleteCatalogById);

export default catalogRouter;
