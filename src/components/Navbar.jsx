import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLinkActive = (hash) => {
    return location.pathname === '/' && location.hash === hash;
  };

  const isHomeActive = () => {
    return location.pathname === '/' && (location.hash === '#home' || !location.hash);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/#home" className="logo" onClick={handleLinkClick}>
          <img src={logo} alt="United Prop Solutions Logo" />
          <span>United Prop Solutions</span>
        </Link>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/#home" className={isHomeActive() ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Services</NavLink>
          <NavLink to="/properties" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Properties</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
