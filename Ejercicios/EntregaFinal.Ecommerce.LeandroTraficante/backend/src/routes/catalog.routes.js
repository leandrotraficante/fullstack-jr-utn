import express from 'express';
import { createCatalog, getAllCatalogs, getCatalogById, updateCatalogById, deleteCatalogById, deactivateCatalog } from '../controllers/catalog.controller.js'
import authMiddleware from '../middleware/auth.token.js';

const catalogRouter = express.Router();

catalogRouter.get('/', getAllCatalogs);
catalogRouter.post('/', authMiddleware, createCatalog);
catalogRouter.get('/:id', getCatalogById);
catalogRouter.put('/:id', authMiddleware, updateCatalogById);
catalogRouter.put('/:id/deactivate', authMiddleware, deactivateCatalog);
catalogRouter.delete('/:id', authMiddleware, deleteCatalogById);

export default catalogRouter;
