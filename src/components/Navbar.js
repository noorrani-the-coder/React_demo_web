import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo-white.webp" alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#services">Service</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><a href="#testimonials">Testimonials</a></li>


        {/* ✅ New Button */}
        <li onClick={closeMenu}>
          <a href="tel:+919876543210">
  <button className="nav-btn">Make Appointment</button>
</a>

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;    