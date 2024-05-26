// src/components/Layout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout = ({ isAuthenticated, onLogout, children }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h1>Company Check-In</h1>
        </div>
        <div className="header-right">
          {isAuthenticated ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
        </div>
      </header>
      <div className="content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user/1">User Details</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
