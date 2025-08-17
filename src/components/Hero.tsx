import React, { useEffect, useRef } from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import photo from "../images/shamEdward.jpg";
const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2})`;
        ctx.fill();
        
        // Draw connections
        particlesRef.current.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                <img
                  src={photo}
                  alt="J. Sham Edward"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center border-2 border-gray-900 group-hover:scale-125 transition-transform duration-300">
                <span className="text-white text-sm">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
            J. Sham Edward
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
            <div className="hover:text-emerald-400 transition-colors duration-300 cursor-default hover:scale-105 transform">
              💻 Full-Stack Developer
            </div>
            <div className="hover:text-blue-400 transition-colors duration-300 cursor-default hover:scale-105 transform">
              📱 Mobile App Developer
            </div>
            <div className="hover:text-yellow-400 transition-colors duration-300 cursor-default hover:scale-105 transform">
              📈 Forex Trader
            </div>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital solutions with precision and trading markets with strategy. 
            Where code meets commerce, innovation thrives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:shamedward2@gmail.com"
              className="group flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get In Touch</span>
            </a>
            
            <a
              href="tel:+918270395411"
              className="group flex items-center space-x-2 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:bounce transition-transform duration-300" />
              <span>+91 8270395411</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;