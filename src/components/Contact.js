import React from 'react';
import './Contact.css';
import { FaCheckCircle, FaLightbulb, FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';

function WhyChoose() {
  return (
    <section id ="contact" className="why-choose">
      <div className="container">
        <h2 className="section-title">🏆 Why Choose <span className="highlight">Digibing</span>?</h2>

        <div className="reasons-grid">
          <div className="reason-card">
            <FaLightbulb className="icon" />
            <h3>Creative-First Approach</h3>
            <p>We don’t just market — we craft your brand story in a way that resonates and converts.</p>
          </div>

          <div className="reason-card">
            <FaUsers className="icon" />
            <h3>In-House Execution Team</h3>
            <p>Everything from strategy to design is executed under one roof, ensuring quality and speed.</p>
          </div>

          <div className="reason-card">
            <FaChartLine className="icon" />
            <h3>Proven Track Record</h3>
            <p>We’ve scaled brands from 0 to 5X revenue and grown follower counts from 5K to 50K and beyond.</p>
          </div>

          <div className="reason-card">
            <FaDollarSign className="icon" />
            <h3>Affordable & Scalable Packages</h3>
            <p>Tailored for startups, SMEs, and enterprises with flexibility and cost-efficiency in mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
