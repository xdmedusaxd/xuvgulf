import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Rss, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Connect with us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:info@uvgulf.org" className="hover:text-teal-400 transition-colors">
                info@uvgulf.org
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <a href="tel:+966138312077" className="hover:text-teal-400 transition-colors">
                +966 1383-12077
              </a>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <a href="#" className="bg-white text-navy-800 p-2 rounded-full hover:bg-teal-400 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-white text-navy-800 p-2 rounded-full hover:bg-teal-400 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-white text-navy-800 p-2 rounded-full hover:bg-teal-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-white text-navy-800 p-2 rounded-full hover:bg-teal-400 transition-colors">
              <Youtube size={18} />
            </a>
            <a href="#" className="bg-white text-navy-800 p-2 rounded-full hover:bg-teal-400 transition-colors">
              <Rss size={18} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Vision & Mission</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Approvals & Certifications</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Chairman's Message</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">BUSINESS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Inspection</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Calibration</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Non-Destructive Testing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Trainings</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Technical Advisory</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Policies</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">CSR</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Clients</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">Copyright © UVGULF</p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">Designed by Raham Solutions Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;