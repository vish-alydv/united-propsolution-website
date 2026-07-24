import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home as HomeIcon, 
  Layers,
  Smartphone
} from 'lucide-react';

function Services() {
  const categories = [
    {
      id: 1,
      title: "APARTMENTS",
      icon: <Building2 size={24} />,
      description: "Modern apartments designed for comfort and style. Prime location, premium amenities, and excellent connectivity – your dream home awaits. Book your visit today!"
    },
    {
      id: 2,
      title: "HOUSES",
      icon: <HomeIcon size={24} />,
      description: "Beautiful houses crafted for modern living. Spacious designs, prime locations, and premium amenities – where comfort meets elegance. Your dream home awaits!"
    },
    {
      id: 3,
      title: "PLOTS",
      icon: <Layers size={24} />,
      description: "Premium residential plots in prime locations. Build your dream home your way with excellent connectivity and great investment potential. Secure your space today!"
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* Section 1: What Are You Looking For Categories */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-header">
            <span className="services-subtitle-tag">WE'RE HERE TO HELP YOU</span>
            <h1 className="services-main-title">WHAT ARE YOU LOOKING FOR?</h1>
            <div className="services-title-divider"></div>
          </div>

          <div className="services-category-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="services-cat-card">
                <div className="cat-icon-circle">
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
                <div className="cat-divider-line"></div>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Contact CTA Block */}
      <section className="services-cta-section">
        <div className="container services-cta-container">
          
          <div className="services-cta-phone">
            <Smartphone size={40} className="cta-phone-icon" />
            <span>+91 85120 75100</span>
          </div>

          <h2 className="services-cta-title">
            LET'S FIND YOU TOGETHER THE PLACE YOU DESERVE
          </h2>

          <div className="services-cta-divider"></div>

          <p className="services-cta-desc">
            Let’s find you the place you truly deserve — a home that reflects your lifestyle, 
            aspirations, and comfort. Whether it’s a modern apartment, a serene plot, or a 
            luxurious house, we’re here to guide you every step of the way. Your dream 
            address is waiting — let’s make it yours!
          </p>

          <Link to="/contact" className="services-cta-btn">
            Contact Us
          </Link>

        </div>
      </section>
    </div>
  );
}

export default Services;
