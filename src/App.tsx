import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PrizesSection from './sections/PrizesSection';
import JudgesSection from './sections/JudgesSection';
import SponsorsSection from './sections/SponsorsSection';
import RegisterSection from './sections/RegisterSection';
import FooterSection from './sections/FooterSection';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hashval = target.getAttribute('href');
        if (hashval) {
          const targetElement = document.querySelector(hashval);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
            
            // Update URL without causing page reload
            history.pushState(null, '', hashval);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-black text-stellar-white overflow-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <JudgesSection />
      <SponsorsSection />
      <RegisterSection />
      <FooterSection />
    </div>
  );
}

export default App;
