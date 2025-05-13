import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="border-l-4 border-teal-600 pl-4 mb-4">
            <h2 className="text-navy-800 text-3xl font-bold">KNOW ABOUT US</h2>
          </div>
          <h3 className="text-4xl font-bold text-navy-900 mb-8">Who We are?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The United Vetting Gulf Co. Ltd. is a Training & Certification provider to Government, Semi
            Government, Private Sector & Individual seeking Quality and Quality Assurance compliance
            with National & International standards in several fields of Oil and Gas, Construction,
            Energy, Engineering Services, Chemical Industries, Production sector, Environmental
            Occupational Health and Safety etc.
          </p>
          <button className="bg-navy-800 hover:bg-navy-900 text-white py-2 px-6 rounded-md transition-colors mb-8">
            Learn more
          </button>
          <div className="mt-8">
            <img 
              src="http://uvgulf.com/web/image/404-6d76e552/crane_inspection_2.png" 
              alt="Crane Inspection"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;