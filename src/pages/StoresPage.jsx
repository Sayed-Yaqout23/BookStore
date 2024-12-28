import React, { useState, useEffect } from 'react';
import { fetchStores } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './StoresPage.css';
const StoresPage = () => {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadStores = async () => {
      const data = await fetchStores();
      setStores(data);
    };
    loadStores();
  }, []);

  const handleStoreClick = (storeId) => {
    navigate(`/stores/${storeId}/inventory`);
  };

  return (
    <div className="stores-page">
      <h1>Stores</h1>
      <ul className="stores-list">
        {stores.map((store) => (
          <li key={store.id} className="store-item" onClick={() => handleStoreClick(store.id)}>
            {store.name} - {store.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoresPage;