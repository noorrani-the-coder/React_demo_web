import React from 'react';
import './FloatingWhatsApp.css';

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+919786133478"  // Replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>
  );
}

export default FloatingWhatsApp;
