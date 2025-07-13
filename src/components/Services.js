import React, { useState } from "react";
import Slider from "react-slick";
import "./Services.css";
import {
  FaBullhorn,
  FaVideo,
  FaGlobe,
  FaChartLine,
  FaMapMarkerAlt,
  FaPaintBrush,
} from "react-icons/fa";
import BookingForm from "./BookingForm";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Social Media Marketing",
    description:
      "Engage, influence, and convert with our tailor-made social media strategies.",
    points: [
      "Platform-specific Strategies",
      "Instagram, Facebook, LinkedIn & YouTube Experts",
      "Creative Reel & Post Content",
      "Influencer & Trend Campaigns",
    ],
    footer: "Boost engagement by 3x in just 30 days!",
  },
  {
    icon: <FaVideo />,
    title: "Video Production",
    description:
      "We turn concepts into cinematic experiences under one creative roof.",
    points: [
      "🎬 Brand Films | 📱 Reels & Shorts | 🧠 Explainer Videos",
      "📍 Full In-house Studio Setup",
    ],
    footer: "Real stories. Real emotions. Real impact.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    description:
      "Your website is your digital storefront. We build sites that convert.",
    points: [
      "🌐 WordPress & Shopify Sites",
      "⚙ Speed Optimized & Mobile-Responsive",
      "📊 Integrated Analytics & Lead Forms",
    ],
    footer: "Get found. Get leads. Grow faster.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Marketing",
    description:
      "ROI-focused ad campaigns that deliver results across Google, Meta and more.",
    points: [
      "🧠 Google Ads (Search, Display, Video)",
      "📌 Meta (FB & IG) Ads",
      "📈 Real-Time Reporting Dashboard",
      "🎯 Cost-Per-Lead Optimization",
    ],
    footer: "Pay for performance, not promises.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Local SEO",
    description:
      "Dominate local search and get discovered by customers near you.",
    points: [
      "📍 Google Maps Ranking",
      "⭐ Local Reviews Management",
      "🔍 Hyperlocal Keyword Optimization",
    ],
    footer: "Turn searches into store visits.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    description:
      "Scroll-stopping creatives, brand kits, brochures, and digital posters.",
    points: [
      "🎨 Branding & Logo Design",
      "🖼 Social Media Creatives",
      "📄 Posters, Banners & Flyers",
    ],
    footer: "Designed to be remembered.",
  },
];

function Services() {
   const [showBooking, setShowBooking] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id ="services" className="services">
      <h2>Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div className="service-slide" key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="desc">{service.description}</p>
              <ul className="points">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="footer">{service.footer}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="book-now-container">
        <button className="book-now" onClick={() => setShowBooking(true)}>
          Book Now
        </button>
      </div>

      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
    </section>
  );
}

export default Services;
