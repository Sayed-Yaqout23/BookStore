import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Adjust if using json-server

export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

export const fetchAuthors = async () => {
  const response = await axios.get(`${API_BASE_URL}/authors`);
  return response.data;
};

export const fetchStores = async () => {
  const response = await axios.get(`${API_BASE_URL}/stores`);
  return response.data;
};