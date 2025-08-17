import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  TrendingUp 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: Globe,
      color: 'emerald',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Node.js']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'blue',
      skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Swift UI', 'Java']
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'purple',
      skills: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'Dart']
    },
    {
      title: 'Trading & Analysis',
      icon: TrendingUp,
      color: 'yellow',
      skills: ['Forex Trading', 'Market Analysis', 'Risk Management', 'Strategy Development']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500',
      blue: 'from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500',
      purple: 'from-purple-400 to-purple-600 hover:from-purple-300 hover:to-purple-500',
      yellow: 'from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-gray-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(category.color)} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(category.color)} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="text-gray-300 group-hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;