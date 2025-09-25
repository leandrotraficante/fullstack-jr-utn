import api from './api.service.js';

const authService = {
  async register(email, password) {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },

  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};

export default authService;