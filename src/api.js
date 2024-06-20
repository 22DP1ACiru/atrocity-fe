import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/', // Ensure this is the correct URL for your Laravel backend
    withCredentials: true, // Important to include credentials
});

const getCsrfToken = async () => {
    await api.get('/sanctum/csrf-cookie');
};

// Add a request interceptor to include the Bearer token in requests
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export { getCsrfToken };
export default api;
