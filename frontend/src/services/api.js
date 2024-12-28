// filepath: /d:/newlab/React Task/bookstore-app/frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  console.log('Books:', response.data); // Log the response
  return response.data;
};

export const fetchAuthors = async () => {
  const response = await axios.get(`${API_BASE_URL}/authors`);
  console.log('Authors:', response.data); // Log the response
  return response.data;
};

export const fetchStores = async () => {
  const response = await axios.get(`${API_BASE_URL}/stores`);
  console.log('Stores:', response.data); // Log the response
  return response.data;
};

export const fetchStoreInventory = async (storeId) => {
  const response = await axios.get(`${API_BASE_URL}/inventory`, {
    params: { storeId }
  });
  console.log(`Inventory for store ${storeId}:`, response.data); // Log the response
  return response.data;
};

export const addBookToInventory = async (storeId, bookId) => {
  // This is a stub for adding a book to the inventory
  // Replace with actual API call if needed
  return { success: true };
};