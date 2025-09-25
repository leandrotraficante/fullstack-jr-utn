import catalogModel from '../models/catalog.model.js'

export default class CatalogRepository {

    getAll = async () => {
        const catalogs = await catalogModel.find().lean();
        return catalogs;
    };

    getById = async (catalogId) => {
        const catalogById = await catalogModel.findById(catalogId);
        return catalogById;
    };

    save = async (catalogData) => {
        const newCatalog = await catalogModel.create(catalogData);
        return newCatalog;
    };

    updateById = async(catalogId, catalogData) => {
        const updatedCatalog = await catalogModel.findByIdAndUpdate(catalogId, catalogData, { new: true });
        if (!updatedCatalog) {
            throw new Error('Catálogo no encontrado');
        }
        return updatedCatalog;
    };

    deleteById = async(catalogId) => {
        const deletedCatalog = await catalogModel.findByIdAndDelete(catalogId);
        if (!deletedCatalog) {
            throw new Error('Catálogo no encontrado');
        }
        return deletedCatalog;
    };

    getActiveCatalogs = async () => {
        const activeCatalogs = await catalogModel.find({ isActive: true }).lean();
        return activeCatalogs;
    };
}

