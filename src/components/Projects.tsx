import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A full-featured shopping app built with Flutter and Firebase, featuring real-time inventory, payment integration, and push notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'Push Notifications'],
      icon: Smartphone,
      color: 'emerald',
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Trading Dashboard',
      description: 'A real-time forex trading dashboard with advanced charting, portfolio tracking, and automated risk management features.',
      technologies: ['React', 'Python', 'WebSocket', 'TradingView', 'FastAPI'],
      icon: Code,
      color: 'blue',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Restaurant Management System',
      description: 'A comprehensive web application for restaurant operations including order management, inventory tracking, and staff scheduling.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      icon: Globe,
      color: 'purple',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-400 to-emerald-600',
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-700 hover:border-gray-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(project.color)} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getColorClasses(project.color)} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${getColorClasses(project.color)} text-white text-xs rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer`}
                      >
                        {tech}
                      </span>
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

export default Projects;