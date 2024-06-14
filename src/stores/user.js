import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    async function fetchCurrentUser() {
        try {
            console.log('Fetching current user...');
            const token = localStorage.getItem('token'); // Get token from localStorage
            const response = await fetch('/api/current-user', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}` // Include Bearer Token
                },
                credentials: 'include',
            });

            if (!response.ok) {
                console.error('Failed to fetch current user:', response.statusText);
                return;
            }

            const userData = await response.json();
            console.log('Fetched user data:', userData);
            user.value = userData;
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    }

    return {
        user,
        fetchCurrentUser,
    };
});
