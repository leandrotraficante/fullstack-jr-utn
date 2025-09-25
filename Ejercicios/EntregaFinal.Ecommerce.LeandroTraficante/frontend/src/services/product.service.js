import api from './api.service.js';

const productService = {
    async getAll(searchTerm = '', page = 1, limit = 10, categoryId = '') {
        let url = `/api/products?search=${searchTerm}&page=${page}&limit=${limit}`;
        if (categoryId) {
            url += `&category=${categoryId}`;
        }
        const response = await api.get(url);
        return response.data;
    },

    async getById(id) {
        const response = await api.get(`/api/products/${id}`);
        return response.data;
    },

    async create(productData) {
        const response = await api.post('/api/products', productData);
        return response.data;
    },

    async update(id, productData) {
        const response = await api.put(`/api/products/${id}`, productData);
        return response.data;
    },

    async delete(id) {
        const response = await api.delete(`/api/products/${id}`);
        return response.data;
    }
};

export default productService;