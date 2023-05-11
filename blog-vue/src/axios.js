import axios from 'axios';

const instance = axios.create({
    // Set your default configurations here
    baseURL: 'http://localhost:1337/api/',
});

export default instance;