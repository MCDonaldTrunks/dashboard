import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/';

export const login = (username, password) => {
    return axios.post(`${API_URL}login/`, { username, password });
};

export const register = (username, password) => {
    return axios.post(`${API_URL}register/`, { username, password });
};
