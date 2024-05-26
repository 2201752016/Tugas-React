import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const fetchUsers = (page) => axios.get(`${API_URL}/users`, { params: { page } });
export const loginUser = async (credentials) => {return await axios.post('https://reqres.in/api/login', credentials);};
export const fetchUser = async (id) => {return await axios.get(`https://reqres.in/api/users/${id}`);};