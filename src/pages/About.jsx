import React from 'react';
import { 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Eye, 
  Target 
} from 'lucide-react';

import founder from '../assets/founder.png';

function About() {
  const locations = [
    {
      id: 1,
      title: "Corporate Office",
      address: "Ground Floor, Plot no : 772, Mushedpur, DLF Phase 2, Sector 25, Gurugram, Shahpur, Haryana 122002"
    },
    {
      id: 2,
      title: "Sushant Lok Branch",
      address: "Ground Floor, Block D, Plot no : 1355, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009"
    },
    {
      id: 3,
      title: "Sector 56 Branch",
      address: "E-169, Block E, Sector 56, Gurugram, Haryana 122001"
    },
    {
      id: 4,
      title: "Success Tower Branch",
      address: "Suncity Success Tower, 312A, Sector 65, Gurugram, Haryana 122101"
    },
    {
      id: 5,
      title: "DLF Phase 1 Branch",
      address: "The shopping mall, C 312, Arjun Marg, Block E, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002"
    },
    {
      id: 6,
      title: "Manesar Branch",
      address: "Shop B34, Sector 1 Main Rd, Market, Imt Manesar, Gurugram, Haryana 122052"
    },
    {
      id: 7,
      title: "Polo Reserve Point",
      address: "Polo Reserve - Breez Builders, adjecent Central park, Atta, Rewasan, Haryana 122103"
    }
  ];

  const handleReadMoreClick = () => {
    document.getElementById('about-presence')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-page-wrapper">
      {/* Premium Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          {/* Centered Page Header */}
          <div className="about-page-header" style={{ marginBottom: '50px' }}>
            <span className="about-subtitle-tag">ABOUT US</span>
            <h1 className="about-main-title">WHO WE ARE</h1>
            <div className="about-title-divider"></div>
          </div>

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
              <h1 className="about-hero-title-main">
                19+ Years of Credibility & Excellence in Real Estate
              </h1>
              
              <p className="about-hero-highlight">
                Founded in 2006 by Mr. Nitin Saini & incorporated in 2013, United Propsolutions Pvt. Ltd. 
                is Gurugram's trusted real estate consulting partner, built on transparency, reliability, 
                and delivering value-driven property solutions.
              </p>
              
              <p className="about-hero-desc">
                United Propsolutions offers comprehensive services across residential and commercial segments, 
                including fresh bookings, resale properties, and investment opportunities. With a dedicated 
                team, strong developer network, and end-to-end client support, the company ensures seamless 
                experiences and the best property options for every buyer and investor.
              </p>
              
              <button onClick={handleReadMoreClick} className="about-hero-btn">
                Explore Our Presence
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="about-page-section">
        <div className="container">
          
          {/* Section 2: Global Presence & Responsibility columns */}
          <div id="about-details" className="about-intro-grid" style={{ paddingTop: '20px' }}>
            <div className="about-intro-col">
              <div className="about-col-header">
                <Globe size={24} className="col-icon" />
                <h3>GLOBAL PRESENCE</h3>
              </div>
              <p className="about-highlight-text">
                FOUNDED IN 2006 BY MR. NITIN SAINI & INCORPORATED IN 2013, UNITED PROPSOLUTIONS PVT. LTD. IS A TRUSTED REAL ESTATE CONSULTING COMPANY BASED IN GURUGRAM. WITH OVER 19 YEARS OF EXPERTISE, THE COMPANY HAS BUILT A STRONG REPUTATION FOR TRANSPARENCY, RELIABILITY, AND DELIVERING VALUE-DRIVEN REAL ESTATE SOLUTIONS.
              </p>
              <p className="about-normal-text">
                United Propsolutions provides a full spectrum of real estate services across both residential and commercial segments, catering to the diverse needs of buyers, investors, and sellers. Our offerings include fresh property bookings from reputed developers, verified resale properties, and strategic investment opportunities designed to deliver value and growth.
              </p>
              <p className="about-normal-text">
                With a highly dedicated and experienced team, we guide clients through every step of the property journey, from site visits and documentation to final possession. Our strong network of trusted developers and sellers allows us to present the best options tailored to individual requirements, ensuring transparency, reliability, and satisfaction. At United Propsolutions, we are committed to delivering a seamless, hassle-free, and rewarding real estate experience for every client.
              </p>
            </div>

            <div className="about-intro-col">
              <div className="about-col-header">
                <ShieldCheck size={24} className="col-icon" />
                <h3>RESPONSIBILITY</h3>
              </div>
              <p className="about-normal-text">
                At United Propsolutions, we take <strong>responsibility</strong> seriously in every aspect of our operations. From guiding clients through property purchases to ensuring legal compliance and transparent dealings, we are committed to upholding the highest standards of professionalism and integrity.
              </p>
              <p className="about-normal-text">
                We understand that buying or selling real estate is a significant decision, often involving substantial financial and emotional investment. That's why our team meticulously verifies all properties, maintains clear communication, and offers personalized solutions to meet every client's unique needs. Our responsibility extends beyond transactions — we strive to build long-term trust, deliver value, and ensure that every client experiences a seamless, confident, and rewarding real estate journey.
              </p>
              <p className="about-normal-text">
                We take full responsibility for providing <strong>accurate information</strong> about every property, helping clients make informed decisions without confusion or risk. Our team ensures all legal and procedural requirements are handled efficiently, maintaining peace of mind throughout the process.
              </p>
              <p className="about-normal-text">
                Responsibility also means <strong>supporting our clients even after possession</strong>. We remain available to address queries, provide guidance on property management, and ensure a smooth transition into their new home or investment, reinforcing the trust they place in us.
              </p>
            </div>
          </div>

          {/* Section 3: Vision & Mission cards */}
          <div id="about-vision" className="about-vision-grid" style={{ paddingTop: '20px' }}>
            <div className="about-vision-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <Eye size={24} />
                </div>
                <h3>OUR VISION</h3>
              </div>
              <div className="card-body">
                <p>
                  <strong>Our Vision</strong> is to become the most trusted and <strong>client-centric real estate consulting company</strong> in India, setting benchmarks for transparency, reliability, and innovation. We aim to redefine the property experience by offering seamless solutions that empower clients to make informed decisions and achieve their dream of owning the perfect home or investment property.
                </p>
                <p>
                  We envision a future where every real estate transaction is <strong>efficient, transparent, and rewarding</strong>. By leveraging strong developer networks, cutting-edge technology, and a dedicated team of experts, United Propsolutions strives to create lasting relationships, deliver exceptional value, and contribute meaningfully to India's dynamic real estate landscape.
                </p>
              </div>
            </div>

            <div className="about-vision-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <Target size={24} />
                </div>
                <h3>OUR MISSION</h3>
              </div>
              <div className="card-body">
                <p>
                  <strong>Our Mission</strong> is to provide <strong>end-to-end real estate solutions</strong> that are transparent, reliable, and tailored to the unique needs of each client. We aim to simplify the property journey, whether it's for residential or commercial purposes, ensuring a seamless experience from selection to possession.
                </p>
                <p>
                  We are committed to <strong>building trust, delivering value, and fostering long-term relationships</strong> with clients, developers, and investors. By leveraging our expertise, strong market network, and ethical practices, United Propsolutions strives to create opportunities that empower clients to make informed decisions and achieve their real estate goals with confidence and satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Our Presence locations */}
          <div id="about-presence" className="presence-section" style={{ paddingTop: '20px' }}>
            <div className="about-page-header">
              <h2 className="about-main-title">OUR PRESENCE</h2>
              <div className="about-title-divider"></div>
            </div>

            <div className="presence-locations-grid">
              {locations.map((loc) => (
                <div key={loc.id} className="presence-card">
                  <div className="presence-badge-header">
                    <div className="presence-icon-circle">
                      <MapPin size={20} />
                    </div>
                    <span className="presence-index">#{loc.id < 10 ? `0${loc.id}` : loc.id}</span>
                  </div>
                  <h4>{loc.title}</h4>
                  <p>{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
