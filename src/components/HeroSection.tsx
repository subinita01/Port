
import { useEffect, useState } from 'react';
import { Github, Mail, MapPin } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 md:pt-24">
      <div className={`
        text-center max-w-4xl mx-auto space-y-8 
        transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        {/* Profile Picture */}
        <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magic-gold to-magic-bronze animate-glow"></div>
          <img
  src="/uploads/907e3050-9097-4615-9666-ebb6952ceebf.png"
  alt="Subinita Ray"
  className="relative w-full h-full rounded-full object-cover border-4 border-magic-gold magic-glow"
/>

        </div>

        <div className="space-y-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-magic-gold animate-glow">Hi, I'm Subinita Ray</h1>
          <p className="font-cinzel text-lg md:text-xl lg:text-2xl text-magic-silver opacity-90">
            Also known as <span className="text-magic-purple">Beanie</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Github className="w-4 h-4" />
            <span className="text-sm md:text-base">@subinita01</span>
          </div>
        </div>

        <div className="parchment rounded-lg p-6 md:p-8 max-w-2xl mx-auto magic-glow">
          <h2 className="font-cinzel text-xl md:text-2xl font-semibold mb-4 text-amber-800">
            The Developer's Scroll
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-amber-900">
            UI/UX & Frontend Developer from <strong>NIT Agartala</strong><br />
            Half logic, half aesthetic, fully caffeine-fueled ☕<br />
            <em className="italic">"Seeking out imperfections and growing through its phases manifold"</em>
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-amber-700">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">Pronouns: she/her</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('about')}
            className="glass-morphism px-6 py-3 rounded-full font-cinzel font-medium 
                     magic-glow magic-cursor hover:text-magic-gold transition-all duration-300
                     text-sm md:text-base"
          >
            Discover My Magic ✨
          </button>
          <a
            href="mailto:subinitaray07@gmail.com"
            className="glass-morphism px-6 py-3 rounded-full font-cinzel font-medium 
                     magic-glow magic-cursor hover:text-magic-purple transition-all duration-300
                     flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Mail className="w-4 h-4" />
            Send Owl Post
          </a>
        </div>
      </div>
    </section>
  );
};
