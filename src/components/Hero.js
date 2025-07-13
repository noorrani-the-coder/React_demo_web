import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Fuel Your Brand with Digibing</h1>
        <p>
          At Digibing, we help brands grow digitally with bold strategies, powerful visuals, and
          result-driven marketing. Whether you’re a startup or an established business, we deliver
          the spark your brand needs to outshine the competition.
        </p>
        <p><strong>Your Growth. Our Mission.</strong></p>
        <a href="tel:+919876543210">
         <button className="cta-btn">Book Appointment</button>
         </a>
      </div>

      <div className="hero-right">
        <img src="/page1.png" alt="Businessman at laptop" className="main-image" />
      </div>
    </section>
    

  );
}

export default Hero;




