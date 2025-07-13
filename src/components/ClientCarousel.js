import React from "react";
import Slider from "react-slick";
import "./ClientCarousel.css";

const clientLogos = [
  "/logos/logo1.jpg",
  "/logos/logo2.jpg",
  "/logos/logo3.jpg",
  "/logos/logo4.jpg",
  "/logos/logo5.jpg",
  "/logos/logo6.jpg",
  "/logos/logo7.jpg",
  "/logos/logo8.jpg",
  "/logos/logo9.jpg",
  "/logos/logo10.jpg",
  "/logos/logo11.jpg",
  "/logos/logo12.jpg",
  
 
];

function ClientCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="client-carousel-section">
      <h2>Helping Businesses Achieve Growth and Excellence</h2>
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientCarousel;
