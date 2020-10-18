import axios from 'axios';

export const api = axios.create({
    baseURL: '/api/organizations/',
    headers: {
        'Content-Type': 'application/json'
    }
});