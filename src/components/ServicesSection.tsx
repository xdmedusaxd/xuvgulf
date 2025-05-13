import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Inspection',
      imageUrl: 'http://uvgulf.com/web/image/401-af3f0ab9/crane_inspection.png'
    },
    {
      id: 2,
      title: 'Training',
      imageUrl: 'http://uvgulf.com/web/image/399-6a5c39be/training.png'
    },
    {
      id: 3,
      title: 'Calibration',
      imageUrl: 'http://uvgulf.com/web/image/400-8fd2a2a1/calibration.png'
    },
    {
      id: 4,
      title: 'NDT',
      imageUrl: 'http://uvgulf.com/web/image/398-6c4c1b16/ndt.png'
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">What We Do?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The United Vetting Gulf Company Limited is a Leading and Fastest growing accredited
            multi-discipline Quality service provider for Third Party Inspection, Testing, Calibration
            and Technical Advisory.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              imageUrl={service.imageUrl}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;