import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axiosInstance from './axios.js';



const app= createApp(App)
app.config.globalProperties.$axios = axiosInstance;
app.mount('#app')
