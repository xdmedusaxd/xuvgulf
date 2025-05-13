import React from 'react';

const InspectionSection: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Third Party Inspection, Testing, Calibration and Technical Advisory.
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            We specialize in providing comprehensive third-party inspection, testing,
            calibration, and technical advisory services to ensure the highest quality and
            compliance for your projects. Our experienced team is dedicated to delivering
            accurate and reliable results, meeting your specific needs and industry standards.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;