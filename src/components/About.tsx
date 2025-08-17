import React from 'react';
import { Code, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                  <Code className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:text-emerald-400 transition-colors duration-300">
                    The Developer
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web and mobile technologies. 
                  From crafting responsive <span className="text-emerald-400 hover:text-emerald-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300">React</span> interfaces to building cross-platform apps with 
                  <span className="text-blue-400 hover:text-blue-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> Flutter</span>, 
                  I bring ideas to life through clean, efficient code.
                </p>
              </div>
              
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:text-blue-400 transition-colors duration-300">
                    The Trader
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Beyond coding, I navigate the forex markets with my trading partner. This unique combination 
                  has sharpened my <span className="text-yellow-400 hover:text-yellow-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300">analytical thinking</span>, 
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> risk management</span>, and 
                  <span className="text-pink-400 hover:text-pink-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> strategic decision-making</span> skills 
                  that I apply to every development project.
                </p>
              </div>
              
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-pink-400 group-hover:beat transition-all duration-300" />
                  <span className="group-hover:text-pink-400 transition-colors duration-300">
                    The Philosophy
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing code that's not just functional, but elegant. Every project is an opportunity 
                  to create something meaningful, whether it's a user-friendly app or a profitable trading strategy. 
                  <span className="text-emerald-400 hover:text-emerald-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> Quality</span>, 
                  <span className="text-blue-400 hover:text-blue-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> precision</span>, and 
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer font-semibold hover:scale-110 inline-block transition-all duration-300"> continuous learning</span> 
                  drive everything I do.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="text-6xl animate-bounce">👨‍💻</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Developer
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Trader
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;