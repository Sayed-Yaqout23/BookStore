// filepath: /d:/newlab/React Task/bookstore-app/frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage.jsx'; // Add the .jsx extension
import AuthorsPage from './pages/Authors.jsx'; // Add the .jsx extension
import BooksPage from './pages/Books.jsx'; // Add the .jsx extension
import StoresPage from './pages/StoresPage.jsx'; // Add the .jsx extension
import StoreInventoryPage from './pages/StoreInventoryPage.jsx'; // Add the .jsx extension

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/:storeId/inventory" element={<StoreInventoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;