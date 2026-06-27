import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

// Inline fallback social SVG icons
const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Threads = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.4c0 .88-.72 1.6-1.6 1.6s-1.6-.72-1.6-1.6V12c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.66 0 3.16-.68 4.24-1.76C13.36 17.38 14.88 18 16.4 18c2.42 0 4.4-1.98 4.4-4.4V12c0-5.52-4.48-10-10-10zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
  </svg>
);

const LinkedIn = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTube = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNum: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section className="contact-page-section">
      <div className="container">
        {/* Page Heading */}
        <div className="contact-page-header">
          <h1 className="contact-main-title">GET IN TOUCH</h1>
          <div className="contact-title-divider"></div>
        </div>

        <div className="contact-page-grid">
          {/* Left Column: Form */}
          <div className="contact-form-container">
            <h3 className="contact-section-title">SEND US A MESSAGE</h3>
            
            {isSubmitted ? (
              <div className="contact-success-box">
                <h4>Form Submitted Successfully!</h4>
                <p>Thank you for reaching out, {formData.firstName || 'there'}. We have received your query and will contact you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row-two-col">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email <span className="required-star">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNum">Contact Us <span className="required-star">*</span></label>
                  <input 
                    type="text" 
                    id="contactNum" 
                    name="contactNum" 
                    placeholder="e.g. +91 85120 75100" 
                    required 
                    value={formData.contactNum}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message <span className="required-star">*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    placeholder="Your Message" 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Submit Form
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & Socials */}
          <div className="contact-sidebar-container">
            <div className="contact-info-block">
              <h3 className="contact-section-title">CONTACT INFO</h3>
              <p className="contact-info-welcome">
                Welcome to United Propsolutions — your trusted partner in premium real estate. Experience modern living spaces crafted for comfort, class, and convenience.
              </p>

              <div className="contact-detail-items">
                <div className="contact-detail-item">
                  <div className="detail-icon-circle">
                    <Phone size={18} />
                  </div>
                  <span className="detail-text-highlight">+91 85120 75100</span>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-circle">
                    <MapPin size={18} />
                  </div>
                  <span className="detail-text-normal">
                    Unit no. 312 A 3rd floor Suncity Success Tower Gurgaon Haryana, 122101
                  </span>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-circle">
                    <Mail size={18} />
                  </div>
                  <span className="detail-text-normal">social.unitedpropsolutions@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-socials-block">
              <h3 className="contact-section-title">SOCIAL MEDIA</h3>
              <div className="contact-social-icons">
                <a href="https://www.facebook.com/share/1MVS72tuF8/" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/unitedpropsolutions_?igsh=ZzNzbDJrcWZ4Ym04" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#threads" className="social-badge" aria-label="Threads">
                  <Threads size={18} />
                </a>
                <a href="https://www.linkedin.com/company/united-prop-solutions/" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="LinkedIn">
                  <LinkedIn size={18} />
                </a>
                <a href="https://youtube.com/@unitedpropsolutions?si=wAeK8jxTzAgaVs1t" target="_blank" rel="noopener noreferrer" className="social-badge" aria-label="YouTube">
                  <YouTube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-container">
          <iframe 
            title="Success Tower Location Map"
            src="https://maps.google.com/maps?q=success%20tower&t=m&z=15&output=embed&iwloc=near" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
