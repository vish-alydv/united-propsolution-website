import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin,
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
  // Testimonials Carousel State
  const testimonials = [
    {
      id: 1,
      name: 'Pooja Sharma',
      location: 'Gurugram',
      rating: 5.0,
      avatar: avatarSarah,
      text: 'United Prop Solutions made buying our home in Sector 65 a seamless experience. They understood our requirement for a premium residential space and guided us to the perfect Godrej property. Their team handled all verification details flawlessly.'
    },
    {
      id: 2,
      name: 'Amit Verma',
      location: 'New Delhi',
      rating: 4.5,
      avatar: avatarMichael,
      text: 'I wanted to invest in a luxury apartment in Gurugram, and United Prop Solutions provided outstanding consulting. Their market insight, transparent dealings, and strong builder networks helped me secure a high-growth property in Golf Course Road Extension.'
    },
    {
      id: 3,
      name: 'Rajesh Malhotra',
      location: 'Noida',
      rating: 5.0,
      avatar: avatarEmily,
      text: 'Finding a trusted consulting partner in the NCR region is tough, but United Prop Solutions exceeded my expectations. They helped me find a verified plot in Antalya Hills with absolute transparency. Highly recommended for any homebuyer!'
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
          </div>
          <div className="hero-image-wrapper">
            <img src={heroVilla} alt="Luxurious Modern Villa" className="hero-image" />
            <div className="hero-floating-badge">
              <span className="badge-title">Gurugram's Top Consultant</span>
              <span className="badge-subtitle">100% Verified Listings</span>
            </div>
          </div>
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
          {/* Card 1 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <Shield size={24} />
            </div>
            <h4>Trusted Guidance</h4>
            <p>19+ years of professional real estate consultation and advisory expertise in NCR.</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <Sparkles size={24} />
            </div>
            <h4>Premium Projects</h4>
            <p>Direct bookings and verified selections from market-leading developers like M3M and Godrej.</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <ClipboardCheck size={24} />
            </div>
            <h4>Verified Resales</h4>
            <p>Thorough legal background checks and validation on all resale holdings.</p>
          </div>

          {/* Card 4 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <Headphones size={24} />
            </div>
            <h4>End-to-End Support</h4>
            <p>Seamless support from initial site visits and documentation to final possession handover.</p>
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
              
              <div className="founder-quote-wrapper">
                <span className="founder-quote-graphic">“</span>
                <p className="about-hero-highlight">
                  United Propsolutions was built with a single vision: to bring honesty, transparency, 
                  and absolute integrity to Gurugram's real estate consulting landscape.
                </p>
              </div>
              
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
              <div className="residence-badge">GURUGRAM SPECIAL</div>
              <img src={residenceSf} alt="M3M Altitude, Sector 65" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>Sector 65, Gurugram, India</span>
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
                <Link to="/contact" className="btn-primary res-card-btn">Enquiry</Link>
                <span className="residence-price">8.3 Cr Onwards</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="residence-card">
            <div className="residence-image-container">
              <div className="residence-badge">PREMIUM APARTMENT</div>
              <img src={residenceBh} alt="Godrej Sora, Sector 53" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>Sector 53, Gurugram, India</span>
              </div>
              <div className="residence-features">
                <div className="res-feat-item">
                  <BedDouble size={16} />
                  <span>3 Rooms</span>
                </div>
                <div className="res-feat-item">
                  <Maximize size={16} />
                  <span>1,800 sq ft</span>
                </div>
              </div>
              <div className="residence-footer">
                <Link to="/contact" className="btn-primary res-card-btn">Enquiry</Link>
                <span className="residence-price">3.95 Cr Onwards</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="residence-card">
            <div className="residence-image-container">
              <div className="residence-badge">LUXURY PROJECT</div>
              <img src={residencePa} alt="M3M Antalya Hills, Sector 79" />
            </div>
            <div className="residence-details">
              <div className="residence-location">
                <MapPin size={18} className="loc-icon" />
                <span>Sector 79, Gurugram, India</span>
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
                <Link to="/contact" className="btn-primary res-card-btn">Enquiry</Link>
                <span className="residence-price">1.9 Cr Onwards</span>
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
