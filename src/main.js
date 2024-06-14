// TailwindCSS import
import "./assets/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from './api' // Import the Axios instance

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$api = api; // Attach the Axios instance to the global properties

app.use(pinia)
app.use(router)

app.mount('#app')
