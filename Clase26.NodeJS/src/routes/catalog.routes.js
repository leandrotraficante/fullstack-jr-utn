import express from 'express';
import { createCatalog, getAllCatalogs, getCatalogById, updateCatalogById, deleteCatalogById } from '../controllers/catalog.controller.js'

const catalogRouter = express.Router();

catalogRouter.post('/', createCatalog);
catalogRouter.get('/', getAllCatalogs);
catalogRouter.get('/:id', getCatalogById);
catalogRouter.put('/:id', updateCatalogById);
catalogRouter.delete('/:id', deleteCatalogById);

export default catalogRouter;
