// src/axiosConfig.js

import axios from 'axios';

// Set the base URL for your Django backend
axios.defaults.baseURL = 'https://gorah-backend.onrender.com';  // Adjust if different

// Ensure cookies (including CSRF token) are sent with requests
axios.defaults.withCredentials = true;

export default axios;