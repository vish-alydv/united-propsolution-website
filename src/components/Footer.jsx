import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Inline fallback social SVG icons
const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedIn = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTube = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src={logo} alt="United Prop Solutions Logo" />
            <span>United Prop Solutions</span>
          </div>
          <p className="brand-pitch">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        <div className="footer-links-column">
          <h5>About</h5>
          <Link to="/about">Our Story</Link>
          <Link to="/about#about-vision">Vision & Mission</Link>
          <Link to="/about#about-presence">Our Presence</Link>
        </div>

        <div className="footer-links-column">
          <h5>Support</h5>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="tel:+918512075100">Call Support</a>
        </div>

        <div className="footer-links-column">
          <h5>Explore</h5>
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="footer-links-column">
          <h5>Our Social</h5>
          <a href="https://www.facebook.com/share/1MVS72tuF8/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/unitedpropsolutions_?igsh=ZzNzbDJrcWZ4Ym04" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/united-prop-solutions/" target="_blank" rel="noopener noreferrer" className="social-link">
            <LinkedIn size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="https://youtube.com/@unitedpropsolutions?si=wAeK8jxTzAgaVs1t" target="_blank" rel="noopener noreferrer" className="social-link">
            <YouTube size={18} />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
