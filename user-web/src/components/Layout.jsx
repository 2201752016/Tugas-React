import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ isAuthenticated, onLogout, children }) => {
  return (
    <div>
      <header className="header">
        <div className="logo">Company Check-In</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button><i className="fas fa-search"></i></button>
          </div>
          {isAuthenticated && <Link to="/user/1">User Details</Link>}
          {isAuthenticated ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>
      <div className="main-container">
        <main className="container">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;



