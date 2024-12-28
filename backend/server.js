// filepath: /d:/newlab/React Task/bookstore-app/backend/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS
app.use(express.json());

const readJSONFile = (filePath) => {
  const data = fs.readFileSync(path.join(__dirname, 'data', filePath), 'utf-8');
  return JSON.parse(data);
};

app.get('/authors', (req, res) => {
  const authors = readJSONFile('authors.json');
  res.json(authors);
});

app.get('/books', (req, res) => {
  const books = readJSONFile('books.json');
  res.json(books);
});

app.get('/stores', (req, res) => {
  const stores = readJSONFile('stores.json');
  res.json(stores);
});

app.get('/inventory', (req, res) => {
  try {
    const { storeId } = req.query;
    const inventory = readJSONFile('inventory.json');
    if (storeId) {
      const storeInventory = inventory.find(inv => inv.storeId === parseInt(storeId));
      return res.json(storeInventory ? storeInventory.books : []);
    }
    res.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});