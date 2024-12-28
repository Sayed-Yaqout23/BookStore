// filepath: /d:/newlab/React Task/bookstore-app/frontend/src/pages/ShopPage.jsx
import React, { useState, useEffect } from 'react';
import { fetchBooks, fetchAuthors, fetchStores, fetchStoreInventory } from '../services/api';
import '../styles/ShopPage.css';

const ShopPage = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [stores, setStores] = useState([]);
  const [inventory, setInventory] = useState({}); // Object to map book IDs to arrays of stores

  useEffect(() => {
    const loadBooksAndAuthorsAndStores = async () => {
      const booksData = await fetchBooks();
      const authorsData = await fetchAuthors();
      const storesData = await fetchStores();
      setBooks(booksData);
      setAuthors(authorsData);
      setStores(storesData);

      const inventoryData = {};
      for (const store of storesData) {
        const storeInventory = await fetchStoreInventory(store.id);
        console.log(`Store ${store.id} inventory:`, storeInventory); // Log the store inventory
        storeInventory.forEach((book) => {
          if (!inventoryData[book.id]) {
            inventoryData[book.id] = [];
          }
          inventoryData[book.id].push(store);
        });
      }
      console.log('Inventory Data:', inventoryData); // Log the inventory data
      setInventory(inventoryData);
    };
    loadBooksAndAuthorsAndStores();
  }, []);

  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? `${author.first_name} ${author.last_name}` : 'Unknown Author';
  };

  const handleSell = (bookId, storeId) => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      [bookId]: prevInventory[bookId].map((store) =>
        store.id === storeId ? { ...store, sold: true } : store
      ),
    }));
  };

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ul className="cards-container">
        {books.map((book) => (
          <li key={book.id} className="card">
            <div className="card-image">
            <h2 className="card-title">{book.name}</h2>
            </div>
            <div className="card-content">
            <h2 className="card-title">{book.name}</h2>
            <p className="card-author">Author: {getAuthorName(book.author_id)}</p>
            <p>Pages: {book.page_count}</p>
            <div className="stores-container">
              {inventory[book.id] && inventory[book.id].map((store) => (
                <div key={store.id} className="store-card">
                  <h3>{store.name}</h3>
                  <p>Price: ${book.price}</p>
                  <button
                    className="sell-button"
                    onClick={() => handleSell(book.id, store.id)}
                    disabled={store.sold}
                  >
                    {store.sold ? 'Sold' : 'Sell'}
                  </button>
                </div>
              ))}
            </div>
              </div> 

          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;