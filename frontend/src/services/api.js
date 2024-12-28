import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

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

export const fetchStoreInventory = async (storeId) => {
  const response = await axios.get(`${API_BASE_URL}/inventory`);
  const inventory = response.data.find(inv => inv.storeId === parseInt(storeId));
  return inventory ? inventory.books : [];
};

export const addBookToInventory = async (storeId, bookId) => {
  // This is a stub for adding a book to the inventory
  // Replace with actual API call if needed
  return { success: true };
};