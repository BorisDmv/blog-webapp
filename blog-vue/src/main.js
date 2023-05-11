import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axiosInstance from './axios.js';
import router from "./router";



const app = createApp(App).use(router)
app.config.globalProperties.$axios = axiosInstance;
app.mount('#app')
