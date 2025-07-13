import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ClientCarousel from './components/ClientCarousel';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
       <Contact />
      <Testimonials />
       <ClientCarousel />
       <Footer />
            <FloatingWhatsApp />
    </div>
  );
}

export default App;
