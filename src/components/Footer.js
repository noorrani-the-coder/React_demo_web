import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPinterestP, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src="/logo-white.webp" alt="Digibing Logo" />
            
          <p>Empowering businesses with innovative, results-driven strategies for impactful online growth.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhone /> +918939538064</p>
          <p><FaPhone /> +919566520789</p>
          <p><FaEnvelope /> service@digibing.in</p>
          <p><FaMapMarkerAlt /> Karur</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
         <div className="icons">
  <a href="https://www.instagram.com/digibing.in/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.facebook.com/people/Digibing/61552657914986/" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>
  <a href="https://in.pinterest.com/digibing71/_created/" target="_blank" rel="noopener noreferrer">
    <FaPinterestP />
  </a>
  <a href="https://www.linkedin.com/company/digibingdigitalmarketingagency" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
</div>

           <p className="copyright">Copyrights © 2025 All rights are reserved by Digibing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
