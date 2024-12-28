import React, { useState, useEffect } from 'react';
import { fetchAuthors } from '../services/api';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newAuthorName, setNewAuthorName] = useState('');

  useEffect(() => {
    const loadAuthors = async () => {
      const data = await fetchAuthors();
      setAuthors(data);
    };
    loadAuthors();
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, newName) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author) =>
        author.id === id ? { ...author, first_name: newName } : author
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== id));
  };

  const handleAddAuthor = () => {
    const newAuthor = {
      id: authors.length + 1,
      first_name: newAuthorName,
      last_name: '',
    };
    setAuthors([...authors, newAuthor]);
    setNewAuthorName('');
  };

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {editingId === author.id ? (
              <input
                type="text"
                value={author.first_name}
                onChange={(e) =>
                  setAuthors((prevAuthors) =>
                    prevAuthors.map((a) =>
                      a.id === author.id ? { ...a, first_name: e.target.value } : a
                    )
                  )
                }
              />
            ) : (
              `${author.first_name} ${author.last_name}`
            )}
            {editingId === author.id ? (
              <button onClick={() => handleSave(author.id, author.first_name)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(author.id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Author Name"
          value={newAuthorName}
          onChange={(e) => setNewAuthorName(e.target.value)}
        />
        <button onClick={handleAddAuthor}>Add Author</button>
      </div>
    </div>
  );
};

export default AuthorsPage;