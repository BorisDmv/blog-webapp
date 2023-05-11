import axios from 'axios';

const instance = axios.create({
    // Set your default configurations here
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default instance;