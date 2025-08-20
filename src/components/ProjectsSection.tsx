
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Tic-Tac-Toe',
      description: 'A magical JavaScript-based game where X\'s and O\'s battle for supremacy',
      tech: ['JavaScript', 'HTML', 'CSS'],
      type: 'Game Development',
      color: 'from-red-400 to-red-600',
      github: 'https://github.com/subinita01/Tic-Tac-Toe'
    },
    {
      title: 'Marketing Campaign Analysis',
      description: 'Unveiling the secrets hidden in marketing data through analytical magic',
      tech: ['Python', 'Data Analysis', 'Visualization'],
      type: 'Data Analytics',
      color: 'from-blue-400 to-blue-600',
      github: 'https://github.com/subinita01/Marketing-campaign-Analysis'
    },
    {
      title: 'Laptop Price Analysis',
      description: 'A Python-powered machine learning potion to predict laptop prices',
      tech: ['Python', 'Machine Learning', 'Pandas'],
      type: 'Machine Learning',
      color: 'from-green-400 to-green-600',
      github: 'https://github.com/subinita01/Laptop-Price-Analysis'
    },
    {
      title: 'Landing Page - Nature',
      description: 'A beautiful frontend design celebrating the magic of nature',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      type: 'Frontend Design',
      color: 'from-purple-400 to-purple-600',
      github: 'https://github.com/subinita01/landing-page-nature'
    }
  ];

  const playClickSound = () => {
    // Create a subtle magical sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magic-gold">
            My Spellbook Collection
          </h2>
          <p className="text-xl text-muted-foreground">
            Magical projects I've crafted with code and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg magic-glow hover:scale-105 
                       transition-all duration-500 magic-cursor"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeIn 0.6s ease-out both'
              }}
            >
              {/* Magical gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
              
              <div className="parchment p-8 h-full relative">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-cinzel text-xl font-semibold text-amber-800 mb-2">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClickSound}
                        className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 
                                 transition-colors duration-300 magic-cursor"
                      >
                        <Github className="w-4 h-4 text-amber-700" />
                      </a>
                      <button
                        onClick={playClickSound}
                        className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 
                                 transition-colors duration-300 magic-cursor"
                      >
                        <ExternalLink className="w-4 h-4 text-amber-700" />
                      </button>
                    </div>
                  </div>

                  <p className="text-amber-900 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Magical sparkles on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300">
                  <div className="animate-sparkle text-magic-gold">✨</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/subinita01"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center gap-3 glass-morphism px-8 py-4 rounded-full 
                     font-cinzel font-medium magic-glow magic-cursor hover:text-magic-gold 
                     transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Explore My Complete Grimoire
          </a>
        </div>
      </div>
    </section>
  );
};
