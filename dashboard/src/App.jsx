import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import UsersPage from './components/UsersPage';
import UserDetailPage from './components/UserDetailPage';
import Finder from './components/Finder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/github" element={<Finder />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
      </Routes>
    </Router>
  );
}

export default App;