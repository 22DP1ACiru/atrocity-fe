import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/', // Laravel backend URL
    withCredentials: true, // Important to include credentials
});

const getCsrfToken = async () => {
    await api.get('/sanctum/csrf-cookie');
};

export { getCsrfToken };
export default api;
