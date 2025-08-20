
import { useState } from 'react';
import { WandSparkles, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const houses = {
  About: {
    color: 'text-red-400',
    house: 'Gryffindor'
  },
  Projects: {
    color: 'text-green-400',
    house: 'Slytherin'
  },
  Skills: {
    color: 'text-blue-400',
    house: 'Ravenclaw'
  },
  Contact: {
    color: 'text-yellow-400',
    house: 'Hufflepuff'
  }
};

export const Navigation = ({
  activeSection,
  onSectionChange
}: NavigationProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionChange(section.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-morphism rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <WandSparkles className="w-5 h-5 md:w-6 md:h-6 text-magic-gold animate-glow" />
            <span className="font-cinzel font-semibold text-sm md:text-lg text-magic-gold">MY Magical Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {Object.entries(houses).map(([section, { color, house }]) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`
                  relative px-4 py-2 font-cinzel font-medium transition-all duration-300 magic-cursor
                  ${activeSection === section.toLowerCase() ? color : 'text-foreground/80'}
                  hover:${color} hover:scale-105
                `}
              >
                {section}
                {hoveredSection === section && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                  text-xs opacity-75 whitespace-nowrap">
                    {house}
                  </div>
                )}
                {activeSection === section.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current animate-glow" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-magic-gold magic-cursor"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 glass-morphism rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              {Object.entries(houses).map(([section, { color, house }]) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`
                    relative px-4 py-3 font-cinzel font-medium transition-all duration-300 magic-cursor
                    text-left rounded-lg
                    ${activeSection === section.toLowerCase() ? color : 'text-foreground/80'}
                    hover:${color} hover:bg-white/5
                  `}
                >
                  <div className="flex justify-between items-center">
                    <span>{section}</span>
                    <span className="text-xs opacity-75">{house}</span>
                  </div>
                  {activeSection === section.toLowerCase() && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-current animate-glow" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
