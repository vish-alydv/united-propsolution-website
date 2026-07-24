import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Home as HomeIcon, 
  ChevronDown, 
  Shield, 
  Sparkles, 
  ClipboardCheck, 
  Headphones, 
  BedDouble, 
  Maximize, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Mail 
} from 'lucide-react';

// Import local assets
import heroVilla from '../assets/hero-villa.jpg';
import residenceSf from '../assets/residence-sf.jpg';
import residenceBh from '../assets/residence-bh.jpg';
import residencePa from '../assets/residence-pa.jpg';
import avatarSarah from '../assets/avatar-sarah.jpg';
import avatarMichael from '../assets/avatar-michael.jpg';
import avatarEmily from '../assets/avatar-emily.jpg';
import founder from '../assets/founder.png';

function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  // Testimonials Carousel State
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Nguyen',
      location: 'San Francisco',
      rating: 5.0,
      avatar: avatarSarah,
      text: 'United Prop Solutions truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'San Diego',
      rating: 4.5,
      avatar: avatarMichael,
      text: 'I had a fantastic experience working with United Prop Solutions. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      location: 'Los Angeles',
      rating: 5.0,
      avatar: avatarEmily,
      text: 'United Prop Solutions made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn\'t be happier with my new home!'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // State for newsletter signup
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubsubscribed(true);
      setEmail('');
      setTimeout(() => setSubsubscribed(false), 5000);
    }
  };

  // Handle Search Submission
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for properties in Location: ${searchLocation || 'Any'}, Type: ${searchType || 'Any'}, Price: ${searchPrice || 'Any'}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your <br />
              <span className="serif-italic">Dream Home</span>
            </h1>
            <p className="hero-description">
              Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision.
            </p>
            <Link to="/contact" className="btn-primary hero-btn">Sign up</Link>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroVilla} alt="Luxurious Modern Villa" className="hero-image" />
          </div>
        </div>

        {/* Search Bar Overlay */}
        <div className="search-bar-container">
          <form className="search-bar" onSubmit={handleSearch}>
            <div className="search-field">
              <MapPin className="field-icon" size={20} />
              <div className="field-inputs">
                <label>Location</label>
                <select 
                  value={searchLocation} 
                  onChange={(e) => setSearchLocation(e.target.value)}
                >
                  <option value="">Select location</option>
                  <option value="San Francisco, California">San Francisco, CA</option>
                  <option value="Beverly Hills, California">Beverly Hills, CA</option>
                  <option value="Palo Alto, California">Palo Alto, CA</option>
                </select>
              </div>
            </div>
            
            <div className="search-divider"></div>

            <div className="search-field">
              <HomeIcon className="field-icon" size={20} />
              <div className="field-inputs">
                <label>Type</label>
                <select 
                  value={searchType} 
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="">Select type</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
            </div>

            <div className="search-divider"></div>

            <div className="search-field">
              <ChevronDown className="field-icon" size={20} />
              <div className="field-inputs">
                <label>Price Range</label>
                <select 
                  value={searchPrice} 
                  onChange={(e) => setSearchPrice(e.target.value)}
                >
                  <option value="">Select price range</option>
                  <option value="$500k - $1M">$500k - $1M</option>
                  <option value="$1M - $3M">$1M - $3M</option>
                  <option value="$3M+">$3M+</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary search-submit-btn">
              Sign up
            </button>
          </form>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section container">
        <div className="why-us-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
          </p>
        </div>

        <div className="why-us-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <Shield size={24} />
            </div>
            <h4>Expert Guidance</h4>
            <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <Sparkles size={24} />
            </div>
            <h4>Personalized Service</h4>
            <p>Our services adapt to your unique needs, making your journey stress-free</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <ClipboardCheck size={24} />
            </div>
            <h4>Transparent Process</h4>
            <p>Stay informed with our clear and honest approach to buying your home</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <Headphones size={24} />
            </div>
            <h4>Exceptional Support</h4>
            <p>Providing peace of mind with our responsive and attentive customer service</p>
          </div>
        </div>
      </section>

      {/* Founder Highlight Section */}
      <section className="home-founder-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-founder-showcase">
              <div className="about-founder-bg-circle"></div>
              <img 
                src={founder} 
                alt="Mr. Nitin Saini - Founder of United Prop Solutions" 
                className="about-founder-image"
              />
              <div className="about-founder-badge-name">
                <strong>Mr. Nitin Saini</strong>
                <span>Founder</span>
              </div>
              <div className="about-founder-badge-years">
                19+ Years Experience
              </div>
            </div>
            
            <div className="about-hero-content">
              <span className="about-hero-tag">OUR FOUNDER</span>
              <div className="about-hero-divider"></div>
              
              <h2 className="about-hero-title-main">
                A Message From Our Founder
              </h2>
              
              <p className="about-hero-highlight">
                “United Propsolutions was built with a single vision: to bring honesty, transparency, 
                and absolute integrity to Gurugram's real estate consulting landscape.”
              </p>
              
              <p className="about-hero-desc">
                Founded in 2006 by Mr. Nitin Saini & incorporated in 2013, United Propsolutions Pvt. Ltd. 
                is Gurugram's trusted real estate consulting partner. With over 19 years of expertise, the company 
                has built a strong reputation for transparency, reliability, and delivering value-driven property solutions 
                for every buyer and investor.
              </p>
              
              <Link to="/about" className="about-hero-btn">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Popular Residences Section */}
      <section id="service" className="residences-section container">
        <div className="residences-header">
          <h2 className="section-title">Our Popular Residences</h2>
        </div>

        <div className="residences-grid">
          {/* Card 1 */}
          <div className="residence-card">
            <div className="residence-image-container">
              <img src={residenceSf} alt="San Francisco, California" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>San Francisco, California</span>
              </div>
              <div className="residence-features">
                <div className="res-feat-item">
                  <BedDouble size={16} />
                  <span>4 Rooms</span>
                </div>
                <div className="res-feat-item">
                  <Maximize size={16} />
                  <span>3,500 sq ft</span>
                </div>
              </div>
              <div className="residence-footer">
                <Link to="/contact" className="btn-primary res-card-btn">Sign up</Link>
                <span className="residence-price">$2,500,000</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="residence-card">
            <div className="residence-image-container">
              <img src={residenceBh} alt="Beverly Hills, California" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>Beverly Hills, California</span>
              </div>
              <div className="residence-features">
                <div className="res-feat-item">
                  <BedDouble size={16} />
                  <span>3 Rooms</span>
                </div>
                <div className="res-feat-item">
                  <Maximize size={16} />
                  <span>1,500 sq ft</span>
                </div>
              </div>
              <div className="residence-footer">
                <Link to="/contact" className="btn-primary res-card-btn">Sign up</Link>
                <span className="residence-price">$850,000</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="residence-card">
            <div className="residence-image-container">
              <img src={residencePa} alt="Palo Alto, California" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>Palo Alto, California</span>
              </div>
              <div className="residence-features">
                <div className="res-feat-item">
                  <BedDouble size={16} />
                  <span>6 Rooms</span>
                </div>
                <div className="res-feat-item">
                  <Maximize size={16} />
                  <span>4,000 sq ft</span>
                </div>
              </div>
              <div className="residence-footer">
                <Link to="/contact" className="btn-primary res-card-btn">Sign up</Link>
                <span className="residence-price">$3,700,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title testimonials-title">
            What People Say <br />
            About United Prop Solutions
          </h2>

          <div className="testimonials-carousel-wrapper">
            <div className="testimonials-grid">
              {testimonials.map((t, idx) => {
                let cardClass = "testimonial-card";
                if (idx === activeTestimonial) cardClass += " active";
                
                return (
                  <div key={t.id} className={cardClass}>
                    <div className="testimonial-header">
                      <div className="avatar-info">
                        <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                        <div>
                          <h5>{t.name}</h5>
                          <p>{t.location}</p>
                        </div>
                      </div>
                      <div className="rating-badge">
                        <Star size={16} className="star-icon" />
                        <span>{t.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="testimonial-text">"{t.text}"</p>
                  </div>
                );
              })}
            </div>

            <div className="carousel-controls">
              <button 
                className="carousel-control-btn" 
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                className="carousel-control-btn" 
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="cta-section container">
        <h2 className="cta-title">Do You Have Any Questions?</h2>
        <h2 className="cta-subtitle serif-italic">Get Help From Us</h2>

        <div className="cta-features">
          <div className="cta-feat-item">
            <div className="checkmark-wrapper">
              <Check size={16} />
            </div>
            <span>Chat live with our support team</span>
          </div>
          <div className="cta-feat-item">
            <div className="checkmark-wrapper">
              <Check size={16} />
            </div>
            <span>Browse our FAQ</span>
          </div>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <div className="input-wrapper">
            <Mail className="mail-icon" size={20} />
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary cta-submit-btn">
            Submit
          </button>
        </form>
        {subscribed && (
          <p className="newsletter-success-msg">Thank you! We've received your request and will reach out shortly.</p>
        )}
      </section>
    </>
  );
}

export default Home;
