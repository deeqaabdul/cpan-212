// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="title">Soundscape</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <Link to="/library">Library</Link>
      </div>
    </nav>
  );
}

export default Navbar;
