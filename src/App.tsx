import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import InspectionSection from './components/InspectionSection';
import ClientsSection from './components/ClientsSection';
import CertificationBar from './components/CertificationBar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "United Vetting Gulf Company | Inspection & Calibration Services";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InspectionSection />
      <CertificationBar />
      <ClientsSection />
      <Footer />
    </div>
  );
}

export default App;