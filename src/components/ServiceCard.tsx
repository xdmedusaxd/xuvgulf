import React from 'react';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-navy-800 font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;