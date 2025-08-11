import catalogService from '../services/catalog.service.js'

const createCatalog = async (req, res) => {
    const catalogData = req.body;
    try {
        const catalog = await catalogService.saveCatalog(catalogData);
        res.status(201).send(catalog)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getAllCatalogs = async (req, res) => {
    try {
        const catalogs = await catalogService.getAll();
        console.log(catalogs)
        res.status(200).send(catalogs)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const getCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const catalogById = await catalogService.getById(catalogId);
        res.status(200).send(catalogById)
    } catch (error) {
        res.status(500).send({ error: error.message })

    }
};

const updateCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    const catalogData = req.body;
    try {
        const updatedCatalog = await catalogService.updateCatalog(catalogId, catalogData);
        console.log(updatedCatalog)
        res.status(200).send(updatedCatalog)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

const deleteCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const deletedCatalog = await catalogService.deleteCatalogById(catalogId);
        console.log(deletedCatalog)
        res.status(200).send(deletedCatalog)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

export {
    createCatalog,
    getAllCatalogs,
    getCatalogById,
    updateCatalogById,
    deleteCatalogById
};
