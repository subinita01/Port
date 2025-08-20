
import { Heart, Coffee, Music, Dumbbell, ChefHat, BookOpen } from 'lucide-react';

export const AboutSection = () => {
  const interests = [
    { icon: Music, label: 'Music', color: 'text-purple-400' },
    { icon: BookOpen, label: 'Poetry', color: 'text-blue-400' },
    { icon: Heart, label: 'Dance', color: 'text-pink-400' },
    { icon: Dumbbell, label: 'Fitness', color: 'text-green-400' },
    { icon: ChefHat, label: 'Cooking', color: 'text-orange-400' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magic-gold">
            The Sorting Hat's Tale
          </h2>
          <p className="text-xl text-muted-foreground">
            How I accidentally discovered my magical coding journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="parchment rounded-lg p-8 magic-glow">
            <h3 className="font-cinzel text-2xl font-semibold mb-6 text-amber-800">
              My Origin Story 📖
            </h3>
            <div className="space-y-4 text-amber-900">
              <p className="leading-relaxed">
                In the halls of <strong>NIT Agartala</strong>, I discovered my magical 
                powers in the realm of UI/UX and frontend development - quite by accident, 
                like finding a hidden passage in Hogwarts!
              </p>
              <p className="leading-relaxed">
                I'm a unique blend of <span className="text-purple-600 font-semibold">logical thinking</span> 
                and <span className="text-pink-600 font-semibold">aesthetic vision</span>, 
                powered entirely by an endless supply of caffeine ☕
              </p>
              <blockquote className="border-l-4 border-amber-600 pl-4 italic">
                "Seeking out imperfections and growing through its phases manifold"
              </blockquote>
            </div>
          </div>

          <div className="parchment rounded-lg p-8 magic-glow">
            <h3 className="font-cinzel text-2xl font-semibold mb-6 text-amber-800">
              My Magical Interests ✨
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map(({ icon: Icon, label, color }) => (
                <div 
                  key={label}
                  className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg 
                           hover:bg-amber-100 transition-colors duration-300 magic-cursor"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="font-medium text-amber-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="parchment rounded-lg p-8 magic-glow">
          <h3 className="font-cinzel text-2xl font-semibold mb-6 text-amber-800 text-center">
            My Spellbook of Skills 🔮
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-cinzel font-semibold text-amber-700 mb-3">Frontend Magic</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['JavaScript', 'React', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-cinzel font-semibold text-amber-700 mb-3">Design Enchantments</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['UI/UX', 'Design Systems', 'Figma'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-cinzel font-semibold text-amber-700 mb-3">Data Sorcery</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Python', 'Machine Learning', 'Data Analysis', 'DSA'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
