import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Plus, Minus } from 'lucide-react';

function Faq() {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqList = [
    {
      id: 1,
      question: "WHAT SERVICES DOES UNITED PROPSOLUTIONS OFFER?",
      answer: (
        <>
          We provide <strong>comprehensive real estate solutions</strong>, including residential 
          and commercial property sales, fresh bookings, resale transactions, 
          investment advisory, and property management.
        </>
      )
    },
    {
      id: 2,
      question: "WHAT TYPES OF PROPERTIES CAN I FIND THROUGH UNITED PROPSOLUTIONS?",
      answer: (
        <>
          We handle <strong>residential properties</strong> (apartments, independent floors, 
          villas, plots) and <strong>commercial spaces</strong> (offices, SCOs, retail shops, 
          showrooms).
        </>
      )
    },
    {
      id: 3,
      question: "HOW DOES UNITED PROPSOLUTIONS ASSIST BUYERS DURING THE PROPERTY PURCHASE?",
      answer: (
        <>
          Our team provides <strong>end-to-end guidance</strong>, including property selection, 
          site visits, documentation, negotiations, and possession, ensuring a 
          seamless buying experience.
        </>
      )
    },
    {
      id: 4,
      question: "HOW DO YOU ENSURE TRANSPARENCY IN EVERY TRANSACTION?",
      answer: (
        <>
          Transparency is central to our operations. We provide <strong>verified property 
          listings, legal checks, and clear communication</strong>, minimizing risks for 
          both buyers and sellers.
        </>
      )
    },
    {
      id: 5,
      question: "WHAT DIFFERENTIATES UNITED PROPSOLUTIONS FROM OTHER REAL ESTATE CONSULTANTS?",
      answer: (
        <>
          With <strong>19+ years of credibility, strong developer networks, personalized 
          solutions, and complete client support</strong>, we deliver reliable, result-
          driven real estate services.
        </>
      )
    },
    {
      id: 6,
      question: "HOW LONG HAS UNITED PROPSOLUTIONS BEEN IN THE REAL ESTATE INDUSTRY?",
      answer: (
        <>
          Founded in 2006 and incorporated in 2013, we bring <strong>over 19 years of 
          trusted experience</strong> and market expertise in Gurugram and the NCR 
          region.
        </>
      )
    },
    {
      id: 7,
      question: "DO YOU WORK WITH VERIFIED DEVELOPERS AND PROJECTS?",
      answer: (
        <>
          Yes. We maintain strong relationships with <strong>reputed and RERA-
          registered developers</strong>, ensuring all listings are authentic, legal, and 
          trustworthy.
        </>
      )
    },
    {
      id: 8,
      question: "CAN I SELL OR RESELL MY PROPERTY THROUGH YOUR COMPANY?",
      answer: (
        <>
          Let's find you the place you truly deserve — a home that reflects your 
          lifestyle, aspirations, and comfort. Whether it's a modern apartment, a 
          serene plot, or a luxurious house, we're here to guide you every step of 
          the way. Your dream address is waiting — let's make it yours!
        </>
      )
    },
    {
      id: 9,
      question: "DO YOU ASSIST WITH INVESTMENT ADVISORY IN REAL ESTATE?",
      answer: (
        <>
          Yes, we help clients identify <strong>high-return investment opportunities</strong>, 
          market trends, and strategic property acquisitions aligned with their 
          financial goals.
        </>
      )
    },
    {
      id: 10,
      question: "HOW CAN I GET IN TOUCH WITH UNITED PROPSOLUTIONS?",
      answer: (
        <>
          You can contact us via <strong>phone at +91 85120 75100, email at 
          info@unitedpropsolutions.com</strong>, or visit our office in Gurugram, Haryana 
          for a consultation.
        </>
      )
    }
  ];

  return (
    <div className="faq-page-wrapper">
      {/* FAQ Content Section */}
      <section className="faq-page-section">
        <div className="container">
          <div className="faq-page-header">
            <span className="faq-subtitle-tag">FAQ</span>
            <h1 className="faq-main-title">FREQUENTLY ASKED QUESTIONS</h1>
            <div className="faq-title-divider"></div>
          </div>

          <div className="faq-accordion-container">
            {faqList.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`faq-accordion-card ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="faq-card-header">
                    <h3 className="faq-question">{faq.question}</h3>
                    <div className="faq-toggle-icon">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                  
                  <div className={`faq-card-body ${isOpen ? 'show' : ''}`}>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
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

export default Faq;
