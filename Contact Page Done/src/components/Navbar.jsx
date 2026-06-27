import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const isLinkActive = (hash) => {
    return location.pathname === '/' && location.hash === hash;
  };

  const isHomeActive = () => {
    return location.pathname === '/' && (location.hash === '#home' || !location.hash);
  };

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/#home" className="logo">
          <span>Dwello</span>
        </Link>
        <nav className="nav-links">
          <Link to="/#home" className={isHomeActive() ? 'active' : ''}>Home</Link>
          <Link to="/#service" className={isLinkActive('#service') ? 'active' : ''}>Service</Link>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search"><Search size={20} /></button>
          <button className="nav-icon-btn" aria-label="Profile"><User size={20} /></button>
          <Link to="/contact" className="btn-primary sign-up-btn">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
