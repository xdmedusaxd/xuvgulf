import React from 'react';

interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}

const ClientsSection: React.FC = () => {
  const clients: ClientLogo[] = [
    {
      id: 1,
      name: 'SABIC',
      logoUrl: 'http://uvgulf.com/web/image/388-0e670d21/sabic_brand.jpeg'
    },
    {
      id: 2,
      name: 'Saudi Aramco',
      logoUrl: 'http://uvgulf.com/web/image/389-9cb22b0f/saudi_aramco_brand.jpeg'
    },
    {
      id: 3,
      name: 'Yasref',
      logoUrl: 'http://uvgulf.com/web/image/390-96203e0c/Yasref.jpeg'
    },
    {
      id: 4,
      name: 'Saudi Electricity Company',
      logoUrl: 'http://uvgulf.com/web/image/391-b0cf130c/saudi_electricity_company_brand.jpeg'
    },
    {
      id: 5,
      name: 'MARAFIQ',
      logoUrl: 'http://uvgulf.com/web/image/392-da53bcc8/marafiq_brand.jpeg'
    },
    {
      id: 6,
      name: 'MA\'ADEN',
      logoUrl: 'http://uvgulf.com/web/image/393-303e2d06/madem_brand.jpeg'
    }
  ];

  return (
    <section id="clients" className="py-16 bg-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Clients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map(client => (
            <div 
              key={client.id} 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-64 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={client.logoUrl} 
                alt={client.name}
                className="max-w-[90%] max-h-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;