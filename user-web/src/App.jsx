// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/user/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <UserDetailPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;




