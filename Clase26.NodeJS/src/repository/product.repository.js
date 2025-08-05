import productsModel from '../models/product.model.js'

export default class ProductsRepository {

    getAll = async () => {
        const products = await productsModel.find().lean();//metodo para transforamr de BSON a POJO
        return products;
    };

    save = async (product) => {
        const result = await productsModel.create(product);
        return result;
    };

    // update = async (id, product) => {
    //     const result = await productsModel.updateOne({ _id: id }, product);
    //     return result;
    // };

    delete = async (id) => {
        const result = await productsModel.deleteOne({ _id: id });
        return result;
    };

    // getById = async (id) => {
    //     const result = await productsModel.findById(id).lean();
    //     return result;
    // };
}
