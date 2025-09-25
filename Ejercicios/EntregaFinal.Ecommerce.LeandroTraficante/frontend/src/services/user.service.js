import api from './api.service.js';

const userService = {
    async getAll() {
        const response = await api.get('/api/users');
        return response.data;
    },

    async getById(id) {
        const response = await api.get(`/api/users/${id}`);
        return response.data;
    },

    async update(id, userData) {
        const response = await api.put(`/api/users/${id}`, userData);
        return response.data;
    },

    async delete(id) {
        const response = await api.delete(`/api/users/${id}`);
        return response.data;
    }
};

export default userService;