import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MethodologyPage from './pages/MethodologyPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    if (pageId !== 'services') setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={`font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar currentPage={currentPage} navigateTo={navigateTo} />

        <main className="flex-grow">
          {currentPage === 'home' && <HomePage navigateTo={navigateTo} onServiceClick={handleServiceClick} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage selectedService={selectedService} setSelectedService={setSelectedService} />}
          {currentPage === 'methodology' && <MethodologyPage navigateTo={navigateTo} />}
          {currentPage === 'industries' && <IndustriesPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        <Footer navigateTo={navigateTo} />
        <WhatsAppButton />
      </div>
    </>
  );
}