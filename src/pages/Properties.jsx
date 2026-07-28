import React from 'react';
import { Building2, Home as HomeIcon } from 'lucide-react';

function Properties() {
  const m3mListings = [
    {
      id: 'm1',
      title: "M3M GIC GURGAON INTEGRATED CITY",
      image: "/properties/m3m-city.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "PRICE ON REQUEST",
      location: ""
    },
    {
      id: 'm2',
      title: "M3M ALTITUDE",
      image: "/properties/m3m-altitude.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "$ 151,000",
      location: "SECTOR 65, GURGAON"
    },
    {
      id: 'm3',
      title: "M3M MANSION",
      image: "/properties/m3m-mansion.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "$ 1600/MO",
      location: "SECTOR 79, M3M GOLF HILLS GURGAON"
    },
    {
      id: 'm4',
      title: "M3M ANTALYA HILLS",
      image: "/properties/m3m-antalya.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "$ 89,500",
      location: "SECTOR 79, GURGAON"
    },
    {
      id: 'm5',
      title: "M3M SOULITUDE",
      image: "/properties/m3m-soulitude.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "$ 1300/MO",
      location: "SECTOR 89, GURUGRAM"
    },
    {
      id: 'm6',
      title: "M3M ANDREWS",
      image: "/properties/m3m-andrews.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "$ 5235/MO",
      location: "DWARKA EXPRESSWAY, SECTOR 113, GURGAON"
    }
  ];

  const godrejListings = [
    {
      id: 'g1',
      title: "GODREJ SORA",
      image: "/properties/godrej-sora.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "8.3 CR ONWARDS",
      location: "SECTOR 53 GURUGRAM"
    },
    {
      id: 'g2',
      title: "GODREJ VRIKSHYA",
      image: "/properties/godrej-vrikshya.jpg",
      tagText: "FOR SALE",
      tagColor: "purple",
      subLabel: "Residential",
      subIcon: <HomeIcon size={16} />,
      price: "3.95 CR ONWARDS",
      location: "SECTOR 103 GURUGRAM"
    },
    {
      id: 'g3',
      title: "GODREJ NATURE PLUS",
      image: "/properties/godrej-nature.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <Building2 size={16} />,
      price: "1.9 CR ONWARDS",
      location: "SECTOR 33 GURUGRAM"
    },
    {
      id: 'g4',
      title: "GODREJ ALIRA",
      image: "/properties/godrej-alira.jpg",
      tagText: "FOR SALE",
      tagColor: "purple",
      subLabel: "Residential",
      subIcon: <HomeIcon size={16} />,
      price: "6.28 CR ONWARDS",
      location: "SECTOR 39 GURUGRAM"
    },
    {
      id: 'g5',
      title: "GODREJ ASTRA",
      image: "/properties/godrej-astra.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <HomeIcon size={16} />,
      price: "10.34 CR ONWARDS",
      location: "SECTOR 54 GURUGRAM"
    },
    {
      id: 'g6',
      title: "GODREJ MIRAYA",
      image: "/properties/godrej-miraya.jpg",
      tagText: "FOR SALE",
      tagColor: "peach",
      subLabel: "Residential",
      subIcon: <HomeIcon size={16} />,
      price: "14.80 CR ONWARDS",
      location: "SECTOR 43 GURUGRAM"
    }
  ];

  const renderGridSection = (id, title, subtitle, listings) => (
    <div id={id} className="properties-dev-section" style={{ paddingTop: '20px' }}>
      <div className="properties-page-header">
        {subtitle && <span className="properties-subtitle-tag">{subtitle}</span>}
        <h2 className="properties-main-title">{title}</h2>
        <div className="properties-title-divider"></div>
      </div>

      <div className="residences-grid properties-grid-offset">
        {listings.map((item) => (
          <div key={item.id} className="developer-property-card">
            <div className="dev-property-image-container">
              <img src={item.image} alt={item.title} />
              <div className={`dev-property-badge ${item.tagColor}`}>
                {item.tagText}
              </div>
            </div>
            
            <div className="dev-property-details">
              <div className="dev-property-subtag">
                {item.subIcon}
                <span>{item.subLabel}</span>
              </div>
              
              <h3 className="dev-property-name">{item.title}</h3>
              
              <div className="dev-property-price">
                {item.price}
              </div>
              
              {item.location && (
                <div className="dev-property-location">
                  {item.location}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="properties-page-section">
      <div className="container">
        {/* Section 1: M3M */}
        {renderGridSection("m3m-projects", "M3M", "", m3mListings)}

        {/* Section Divider */}
        <div className="properties-section-spacer"></div>

        {/* Section 2: GODREJ */}
        {renderGridSection("godrej-projects", "GODREJ", "FIND YOUR PERFECT HOME", godrejListings)}
      </div>
    </section>
  );
}

export default Properties;
