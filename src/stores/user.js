import { defineStore } from 'pinia';
import { ref } from 'vue';
import api, { getCsrfToken } from '@/api'; // Import the Axios instance and CSRF token function

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    async function fetchCurrentUser() {
        try {
            await getCsrfToken(); // Ensure CSRF token is set
            const token = localStorage.getItem('token'); // Get token from localStorage

            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            const response = await api.get('/api/current-user', {
                headers: {
                    'Authorization': `Bearer ${token}` // Include Bearer Token
                },
            });

            if (response.status !== 200) {
                console.error('Failed to fetch current user:', response.statusText);
                return;
            }

            const userData = response.data;
            console.log('Fetched user data:', userData);
            user.value = userData;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/auth'; // Redirect to login page
            } else {
                console.error('Error fetching current user:', error);
            }
        }
    }

    return {
        user,
        fetchCurrentUser,
    };
});
