import catalogService from '../services/catalog.service.js'

const createCatalog = async (req, res) => {
    const catalogData = req.body;
    
    if (!catalogData.name) {
        return res.status(400).json({ error: 'El nombre es requerido' });
    }
    if (!catalogData.code) {
        return res.status(400).json({ error: 'El código es requerido' });
    }
    
    try {
        const catalog = await catalogService.saveCatalog(catalogData);
        res.status(201).json({
            success: true,
            data: catalog,
            message: 'Categoría creada exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const getAllCatalogs = async (req, res) => {
    try {
        const catalogs = await catalogService.getAll();
        res.status(200).json({
            success: true,
            data: catalogs
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const getCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const catalogById = await catalogService.getById(catalogId);
        res.status(200).json({
            success: true,
            data: catalogById
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const updateCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    const catalogData = req.body;
    
    if (Object.keys(catalogData).length === 0) {
        return res.status(400).json({ error: 'Debe enviar al menos un campo para actualizar' });
    }
    
    try {
        const updatedCatalog = await catalogService.updateCatalog(catalogId, catalogData);
        res.status(200).json({
            success: true,
            data: updatedCatalog,
            message: 'Categoría actualizada exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const deleteCatalogById = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const deletedCatalog = await catalogService.deleteCatalogById(catalogId);
        res.status(200).json({
            success: true,
            data: deletedCatalog,
            message: 'Categoría eliminada exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const deactivateCatalog = async (req, res) => {
    const catalogId = req.params.id;
    try {
        const deactivatedCatalog = await catalogService.updateCatalog(catalogId, { isActive: false });
        res.status(200).json({
            success: true,
            data: deactivatedCatalog,
            message: 'Categoría desactivada exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

export {
    createCatalog,
    getAllCatalogs,
    getCatalogById,
    updateCatalogById,
    deleteCatalogById,
    deactivateCatalog
};
