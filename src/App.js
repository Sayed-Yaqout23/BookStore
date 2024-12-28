import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage.js';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';
import StoresPage from './pages/StoresPage';
import StoreInventoryPage from './pages/StoreInventoryPage';

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