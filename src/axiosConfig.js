// src/axiosConfig.js

import axios from 'axios';

// Set the base URL for your Django backend
axios.defaults.baseURL = 'http://localhost:8000';  // Adjust if different

// Ensure cookies (including CSRF token) are sent with requests
axios.defaults.withCredentials = true;

export default axios;