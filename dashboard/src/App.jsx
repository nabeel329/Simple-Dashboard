import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MainPage from "./components/MainPage";
import ProductsPage from "./components/ProductsPage";
import ProductDetailPage from "./components/ProductDetailPage"; // Updated component name
import UsersPage from "./components/UsersPage";
import UserDetailPage from "./components/UserDetailPage";
import Finder from "./components/Finder";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />  {/* Updated route */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="/github" element={<Finder />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
