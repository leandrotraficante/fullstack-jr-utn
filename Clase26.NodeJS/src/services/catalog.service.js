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
    const catalogToDelete = await catalogRepository.deleteById(catalogId);
    return catalogToDelete
}

export default {
    getAll,
    getById,
    saveCatalog,
    updateCatalog,
    deleteCatalogById
};
