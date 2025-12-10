import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AiDesigner from './components/AiDesigner';
import ImpactStats from './components/ImpactStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple state to simulate active navigation or potential modal states
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20 bg-slate-50">
          <Services />
        </section>

        <section id="ai-designer" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <AiDesigner />
        </section>

        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>

        <section id="stats" className="py-16 bg-slate-50">
          <ImpactStats />
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
