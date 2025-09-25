import api from './api.service.js';

const catalogService = {
    async getAll() {
        const response = await api.get('/api/catalog');
        return response.data;
    },

    async create(catalogData) {
        const response = await api.post('/api/catalog', catalogData);
        return response.data;
    },

    async update(catalogId, catalogData) {
        const response = await api.put(`/api/catalog/${catalogId}`, catalogData);
        return response.data;
    },

    async delete(catalogId) {
        const response = await api.delete(`/api/catalog/${catalogId}`);
        return response.data;
    }
};

export default catalogService;
