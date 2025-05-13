import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-navy-800 hover:text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-navy-800 hover:text-blue-600 font-medium">About Us</a>
          <a href="#services" className="text-navy-800 hover:text-blue-600 font-medium">Services</a>
          <a href="#clients" className="text-navy-800 hover:text-blue-600 font-medium">Clients</a>
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-6 rounded-md transition-colors">
            Contact Us
          </button>
        </div>
        
        <button 
          className="md:hidden text-navy-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-navy-800 hover:text-blue-600 font-medium py-2">Home</a>
            <a href="#about" className="text-navy-800 hover:text-blue-600 font-medium py-2">About Us</a>
            <a href="#services" className="text-navy-800 hover:text-blue-600 font-medium py-2">Services</a>
            <a href="#clients" className="text-navy-800 hover:text-blue-600 font-medium py-2">Clients</a>
            <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-6 rounded-md w-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;