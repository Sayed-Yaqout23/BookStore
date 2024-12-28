import React, { useState, useEffect } from 'react';
import { fetchBooks, fetchAuthors } from '../services/api';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingId, setEditingId] = useState(null);

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

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newTitle) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, name: newTitle } : book
      )
    );
    setEditingId(null);
  };

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          {editingId === book.id ? (
            <input
              type="text"
              value={book.name}
              onChange={(e) =>
                setBooks((prevBooks) =>
                  prevBooks.map((b) =>
                    b.id === book.id ? { ...b, name: e.target.value } : b
                  )
                )
              }
            />
          ) : (
            <h2>{book.name}</h2>
          )}
          <p>Author: {getAuthorName(book.author_id)}</p>
          <p>Pages: {book.page_count}</p>
          {editingId === book.id ? (
            <button onClick={() => handleSave(book.id, book.name)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(book.id)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BooksPage;