import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './App.css'; // Create a separate CSS file for header styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="path/to/my-page-logo.png" alt="My Page Logo" className="logo" />
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="./About.js">About</Link>

      </nav>
      <div className="header-right">s
        <img src="path/to/login-logo.png" alt="Login Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
