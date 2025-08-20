
import { useState, useEffect } from 'react';
import { MagicalBackground } from '@/components/MagicalBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        let element;
        if (section === 'home') {
          element = document.getElementById('hero');
        } else if (section === 'skills') {
          element = document.getElementById('skills');
        } else {
          element = document.getElementById(section);
        }
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    let elementId;
    if (section === 'home') {
      elementId = 'hero';
    } else if (section === 'skills') {
      elementId = 'skills';
    } else {
      elementId = section;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <div className="relative">
      <MagicalBackground />
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-magic-gold/20">
        <div className="parchment rounded-lg p-6 max-w-md mx-auto magic-glow">
          <p className="font-cinzel text-amber-800">
            Made with ✨ magical code and lots of ☕
          </p>
          <p className="text-sm text-amber-600 mt-2">
            © 2025 Subinita Ray - All spells reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
