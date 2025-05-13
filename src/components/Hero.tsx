import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Hero background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://uvgulf.com/web/image/13204-bdf67460/heavy_equipment_inspection_2.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-navy-900 bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            United Vetting Gulf Company
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 animate-fade-in-delayed">
            We deliver excellence in third-party inspection, testing, calibration, 
            and technical advisory solutions to ensure the highest quality and compliance for your projects.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg transition-colors shadow-lg animate-fade-in-delayed-more">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;