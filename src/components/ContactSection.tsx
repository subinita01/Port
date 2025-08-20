
import { Mail, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const playClickSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magic-gold">
            Send an Owl Post
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to create some magic together? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Magical Scroll */}
          <div className="parchment rounded-lg p-8 magic-glow">
            <h3 className="font-cinzel text-2xl font-semibold mb-6 text-amber-800">
              The Messaging Scroll 📜
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <Mail className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800">Magical Email</p>
                  <a 
                    href="mailto:subinitaray07@gmail.com"
                    onClick={playClickSound}
                    className="text-amber-600 hover:text-amber-700 magic-cursor"
                  >
                    subinitaray07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <Linkedin className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800">Professional Network</p>
                  <a 
                    href="https://www.linkedin.com/in/subinita-ray-2b26992a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-amber-600 hover:text-amber-700 magic-cursor"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <Instagram className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800">Magical Moments</p>
                  <a 
                    href="https://www.instagram.com/___subinita___/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-amber-600 hover:text-amber-700 magic-cursor"
                  >
                    @___subinita___
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <MapPin className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800">Current Location</p>
                  <p className="text-amber-600">NIT Agartala</p>
                </div>
              </div>

              <div className="text-center pt-4">
                <a
                  href="mailto:subinitaray07@gmail.com"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={playClickSound}
                  className={`
                    inline-flex items-center gap-3 px-8 py-4 rounded-full font-cinzel font-medium 
                    transition-all duration-500 magic-cursor magic-glow
                    ${isHovered 
                      ? 'bg-gradient-to-r from-magic-gold to-magic-bronze text-amber-900' 
                      : 'glass-morphism text-foreground'
                    }
                  `}
                >
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
                  Cast Your Message
                </a>
              </div>
            </div>
          </div>

          {/* Floating Owl Animation */}
          <div className="relative flex items-center justify-center">
            <div className="animate-float">
              <div className="parchment rounded-full p-16 magic-glow text-center">
                <div className="text-6xl mb-4">🦉</div>
                <p className="font-cinzel text-lg text-amber-800 font-medium">
                  Hedwig is ready to deliver your message!
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-magic-gold rounded-full animate-sparkle" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 bg-magic-gold rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 bg-magic-gold rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <div className="parchment rounded-lg p-8 max-w-2xl mx-auto magic-glow">
            <blockquote className="font-cinzel text-lg italic text-amber-800 mb-4">
              "Seeking out imperfections and growing through its phases manifold"
            </blockquote>
            <p className="text-amber-700">
              Let's grow together through the magical world of code! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
