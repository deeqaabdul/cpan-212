import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Soundscape</h1>
      <nav className="nav">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
        <Link to="/search" className="nav-button">Search</Link>
        <Link to="/profile" className="nav-button">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
