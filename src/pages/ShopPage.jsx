import React, { useState, useEffect } from 'react';
import { fetchBooks, fetchAuthors } from '../services/api';

const ShopPage = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const booksData = await fetchBooks();
      const authorsData = await fetchAuthors();
      setBooks(booksData);
      setAuthors(authorsData);
    };
    loadData();
  }, []);

  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? `${author.first_name} ${author.last_name}` : 'Unknown Author';
  };

  const handleSell = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, sold: true } : book
      )
    );
  };

  return (
    <div>
      <h1>Shop</h1>
      {books.map((book) => (
        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h2>{book.name}</h2>
          <p>Author: {getAuthorName(book.author_id)}</p>
          <p>Pages: {book.page_count}</p>
          <button onClick={() => handleSell(book.id)} disabled={book.sold}>
            {book.sold ? 'Sold' : 'Sell'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;