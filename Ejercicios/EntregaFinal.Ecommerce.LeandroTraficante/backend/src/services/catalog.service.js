import CatalogRepository from '../repository/catalog.repository.js';

const catalogRepository = new CatalogRepository();

const getAll = async () => {
    const catalogs = await catalogRepository.getAll();
    return catalogs
};

const getById = async (catalogId) => {
    const catalogById = await catalogRepository.getById(catalogId);
    return catalogById
}

const saveCatalog = async (catalogData) => {
    const catalog = await catalogRepository.save(catalogData)
    return catalog;
};

const updateCatalog = async (catalogId, catalogData) => {
    const catalogToUpdate = await catalogRepository.updateById(catalogId, catalogData);
    return catalogToUpdate
};

const deleteCatalogById = async (catalogId) => {
    // Primero eliminar todos los productos de esta categoría
    const productModel = (await import('../models/product.model.js')).default;
    await productModel.deleteMany({ category: catalogId });
    
    // Luego eliminar la categoría
    const catalogToDelete = await catalogRepository.deleteById(catalogId);
    return catalogToDelete
}

const getActiveCatalogs = async () => {
    const activeCatalogs = await catalogRepository.getActiveCatalogs();
    return activeCatalogs;
};

export default {
    getAll,
    getById,
    saveCatalog,
    updateCatalog,
    deleteCatalogById,
    getActiveCatalogs
};
