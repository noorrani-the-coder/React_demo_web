import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Who We Are</h2>
        <p className="about-subtitle">
          We’re not just marketers — we’re your digital growth partners.
        </p>
        <p className="about-text">
          At <strong>Digibing Marketing Agency</strong>, we craft ROI-driven digital strategies 
          that help brands connect, grow, and scale. From performance marketing and web development 
          to branding and video production — we do it all under one creative roof.
        </p>

        <div className="about-image">
          <img src="/work2.png" alt="Our Team" />
        </div>
        <a href="tel:+919876543210">
        <button className="consult-btn">Get Free Consultation</button>
        </a>
      </div>
    </section>
  );
}

export default About;
