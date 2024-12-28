// filepath: /d:/newlab/React Task/bookstore-app/src/pages/StoreInventoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStoreInventory, fetchBooks, fetchAuthors, addBookToInventory } from '../services/api';
import '../styles/StoreInventoryPage.css';

const StoreInventoryPage = () => {
  const { storeId } = useParams();
  const [inventory, setInventory] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeTab, setActiveTab] = useState('books');

  useEffect(() => {
    const loadInventory = async () => {
      const data = await fetchStoreInventory(storeId);
      setInventory(data);
    };
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    const loadAuthors = async () => {
      const data = await fetchAuthors();
      setAuthors(data);
    };
    loadInventory();
    loadBooks();
    loadAuthors();
  }, [storeId]);

  const handleAddBook = async () => {
    if (selectedBook) {
      await addBookToInventory(storeId, selectedBook);
      const updatedInventory = await fetchStoreInventory(storeId);
      setInventory(updatedInventory);
    }
  };

  return (
    <div className="store-inventory-page">
      <h1>Store Inventory</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('books')} className={activeTab === 'books' ? 'active' : ''}>Books</button>
        <button onClick={() => setActiveTab('authors')} className={activeTab === 'authors' ? 'active' : ''}>Authors</button>
      </div>
      {activeTab === 'books' && (
        <div className="inventory-list">
          {inventory.map((item) => (
            <div key={item.id} className="inventory-item">
              {item.title} by {item.author}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'authors' && (
        <div className="authors-list">
          {authors.map((author) => (
            <div key={author.id} className="author-item">
              <h3>{author.name}</h3>
              <ul>
                {books.filter(book => book.authorId === author.id).map(book => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div className="add-book">
        <select onChange={(e) => setSelectedBook(e.target.value)} value={selectedBook}>
          <option value="">Select a book</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title} by {book.author}
            </option>
          ))}
        </select>
        <button onClick={handleAddBook}>Add to Inventory</button>
      </div>
    </div>
  );
};

export default StoreInventoryPage;