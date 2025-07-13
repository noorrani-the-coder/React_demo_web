import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",          // <-- added phone here
    service: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://web-backend-1o8y.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus({ success: false, message: data.message || "Failed to send email." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Server error. Please try again later." });
      console.error(error);
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-form">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Book a Service</h2>

        {status && <p style={{ color: status.success ? "green" : "red" }}>{status.message}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </label>
          <label>
            Service:
            <select name="service" required value={formData.service} onChange={handleChange}>
              <option value="">Select a service</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="video-production">Video Production</option>
              <option value="website-dev">Website Development</option>
              <option value="performance-marketing">Performance Marketing</option>
              <option value="local-seo">Local SEO</option>
              <option value="graphic-design">Graphic Designing</option>
            </select>
          </label>
          <label>
            Message:
            <textarea name="message" rows="3" value={formData.message} onChange={handleChange} />
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
