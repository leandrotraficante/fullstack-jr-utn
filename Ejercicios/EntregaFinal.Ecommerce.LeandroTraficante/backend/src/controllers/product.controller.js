import productsService from '../services/products.service.js'

const createProduct = async (req, res) => {
    const productData = req.body;
    
    if (!productData.name) {
        return res.status(400).json({ error: 'El nombre es requerido' });
    }
    if (!productData.code) {
        return res.status(400).json({ error: 'El código es requerido' });
    }
    if (!productData.price) {
        return res.status(400).json({ error: 'El precio es requerido' });
    }
    if (!productData.categoryName) {
        return res.status(400).json({ error: 'La categoría es requerida' });
    }
    
    if (typeof productData.price !== 'number' || productData.price <= 0) {
        return res.status(400).json({ error: 'El precio debe ser un número mayor a 0' });
    }
    if (productData.stock !== undefined && (typeof productData.stock !== 'number' || productData.stock < 0)) {
        return res.status(400).json({ error: 'El stock debe ser un número mayor o igual a 0' });
    }
    
    try {
        const product = await productsService.saveProduct(productData);
        res.status(201).json({
            success: true,
            data: product,
            message: 'Producto creado exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const getAllProducts = async (req, res) => {
    try {
        const searchTerm = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const categoryId = req.query.category || '';
        const result = await productsService.getAll(searchTerm, page, limit, categoryId);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const productById = await productsService.getById(productId);
        res.status(200).json({
            success: true,
            data: productById
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const updateProductById = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    
    if (Object.keys(productData).length === 0) {
        return res.status(400).json({ error: 'Debe enviar al menos un campo para actualizar' });
    }
    
    if (productData.price !== undefined && (typeof productData.price !== 'number' || productData.price <= 0)) {
        return res.status(400).json({ error: 'El precio debe ser un número mayor a 0' });
    }
    if (productData.stock !== undefined && (typeof productData.stock !== 'number' || productData.stock < 0)) {
        return res.status(400).json({ error: 'El stock debe ser un número mayor o igual a 0' });
    }
    
    try {
        const updatedProduct = await productsService.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            data: updatedProduct,
            message: 'Producto actualizado exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productsService.deleteProductById(productId);
        res.status(200).json({
            success: true,
            data: deletedProduct,
            message: 'Producto eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        })
    }
};

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
};