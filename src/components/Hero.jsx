import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from 'lucide-react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Web Developer",
    "UI/UX Designer", 
    "Data Analyst",
    "Digital Architect"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(textInterval);
    };
  }, []);

  const handleCTAClick = (action) => {
    console.log(`${action} clicked`);
    // Handle navigation here
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      
      {/* Floating Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full floating-particle opacity-60 hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        {/* Mobile particles - fewer and smaller */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`mobile-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full floating-particle opacity-40 block sm:hidden"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Light Beam - Reduced on mobile */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left order-2 lg:order-1 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Greeting with Glitch Effect */}
            <div className="mb-4 sm:mb-6">
              <span className="text-cyan-400 text-sm sm:text-lg font-mono tracking-wider glitch-text">
                &gt; Initializing...
              </span>
            </div>

            {/* Main Title - More responsive sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white mb-1 sm:mb-2">
                Halo, saya
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cyber-title relative">
                GUNAWAN
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl sm:blur-2xl opacity-50 animate-pulse"></div>
              </span>
            </h1>

            {/* Animated Role Text - Better mobile sizing */}
            <div className="mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 font-mono">
                  {texts[currentText]}
                </span>
                <span className="ml-1 text-cyan-400 animate-pulse text-xl sm:text-2xl">|</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-lg blur-lg"></div>
              </div>
            </div>

            {/* Description - Better mobile text size */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed font-light px-2 sm:px-0">
              Membangun website modern dengan{' '}
              <span className="text-cyan-400 font-semibold">teknologi terdepan</span>,
              <br className="hidden sm:block" />
              fokus pada{' '}
              <span className="text-blue-400 font-semibold">performa</span> dan{' '}
              <span className="text-purple-400 font-semibold">user experience</span>
            </p>

            {/* CTA Buttons - Better mobile layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button
                onClick={() => handleCTAClick('projects')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base"
              >
                <span
                  className="relative z-10 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const target = document.getElementById("projects");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="mr-2">Lihat Proyek</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-cyan-400/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => handleCTAClick('contact')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-105 text-sm sm:text-base"
              >
                <span
                  className="relative z-10 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const target = document.getElementById("contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="mr-2">Hubungi Saya</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Social Links - Better mobile spacing */}
            <div className="mt-8 sm:mt-12 flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
              <span className="text-gray-500 text-xs sm:text-sm font-mono">CONNECT_</span>
              {[
                { name: 'GitHub', icon: Github, url: 'https://github.com/gunawansapu' },
                { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gunawan-cholis-saputra-53a923295/' },
                { name: 'Twitter', icon: Twitter, url: 'https://x.com/GunawanCho52830?t=kAnxE3F360Tlr7ehz6Enjg&s=09' }
              ].map(({ name, icon: Icon, url }, index) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  title={name}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Visual - Better mobile sizing */}
          <div className={`relative order-1 lg:order-2 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Main 3D Container - Responsive sizing */}
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto h-64 sm:h-80 md:h-96 lg:h-[500px]">
              
              {/* Rotating Ring - Responsive */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full rotating-ring"></div>
              <div className="absolute inset-2 sm:inset-4 border border-blue-400/20 rounded-full rotating-ring-reverse"></div>
              
              {/* Central Orb - Responsive sizing */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full cyber-orb">
                <div className="absolute inset-1 sm:inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80"></div>
                <div className="absolute inset-2 sm:inset-4 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-60 pulse-orb"></div>
                
                {/* Inner Details - Responsive */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/80 rounded-full pulse-core"></div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements - Responsive count */}
              {[...Array(window.innerWidth < 640 ? 4 : 8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full orbiting-dot"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}

              {/* Energy Lines - Fewer on mobile */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(window.innerWidth < 640 ? 3 : 6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent energy-line"
                    style={{
                      left: `${20 + i * (window.innerWidth < 640 ? 20 : 15)}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Hologram Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-blue-500/10 rounded-full hologram-effect"></div>
            </div>

            {/* Tech Stack Indicators - Better mobile layout */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
              {['React', 'Node.js', 'TypeScript', '3D Web'].map((tech, index) => (
                <div
                  key={tech}
                  className="px-2 sm:px-3 py-1 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-mono bg-black/50 backdrop-blur-sm hover:border-cyan-400/70 transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center hidden sm:block">
        <div className="text-gray-500 text-xs sm:text-sm font-mono mb-2">SCROLL_DOWN</div>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full mx-auto relative">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-cyan-400 rounded-full mx-auto mt-1 sm:mt-2 scroll-indicator"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .cyber-grid-bg {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @media (min-width: 640px) {
          .cyber-grid-bg {
            background-size: 100px 100px;
          }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @media (min-width: 640px) {
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100px, 100px); }
          }
        }

        .floating-particle {
          animation: float-up linear infinite;
        }

        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .glitch-text {
          animation: glitch 2s ease-in-out infinite alternate;
        }

        @keyframes glitch {
          0%, 100% { text-shadow: 0 0 5px rgba(6, 182, 212, 0.5); }
          25% { text-shadow: -2px 0 3px rgba(6, 182, 212, 0.7), 2px 2px 3px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 2px -1px 3px rgba(6, 182, 212, 0.7), -2px 1px 3px rgba(147, 51, 234, 0.5); }
          75% { text-shadow: 1px 1px 3px rgba(6, 182, 212, 0.7), -1px -1px 3px rgba(59, 130, 246, 0.5); }
        }

        .cyber-title {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          animation: title-glow 3s ease-in-out infinite alternate;
        }

        @keyframes title-glow {
          from { text-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(6, 182, 212, 0.3); }
          to { text-shadow: 0 0 30px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5); }
        }

        .rotating-ring {
          animation: rotate 10s linear infinite;
        }

        .rotating-ring-reverse {
          animation: rotate-reverse 15s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .cyber-orb {
          box-shadow: 
            0 0 30px rgba(6, 182, 212, 0.5),
            0 0 60px rgba(6, 182, 212, 0.3),
            inset 0 0 30px rgba(59, 130, 246, 0.2);
          animation: orb-pulse 4s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .cyber-orb {
            box-shadow: 
              0 0 50px rgba(6, 182, 212, 0.5),
              0 0 100px rgba(6, 182, 212, 0.3),
              inset 0 0 50px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes orb-pulse {
          0%, 100% { 
            filter: brightness(1);
          }
          50% { 
            filter: brightness(1.3);
          }
        }

        .pulse-orb {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }

        .pulse-core {
          animation: core-pulse 1.5s ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .orbiting-dot {
          animation: orbit 4s linear infinite;
          transform-origin: 50% 50%;
        }

        @keyframes orbit {
          from { 
            transform: rotate(0deg) translateX(120px) rotate(0deg); 
          }
          to { 
            transform: rotate(360deg) translateX(120px) rotate(-360deg); 
          }
        }

        @media (min-width: 640px) {
          @keyframes orbit {
            from { 
              transform: rotate(0deg) translateX(160px) rotate(0deg); 
            }
            to { 
              transform: rotate(360deg) translateX(160px) rotate(-360deg); 
            }
          }
        }

        @media (min-width: 1024px) {
          @keyframes orbit {
            from { 
              transform: rotate(0deg) translateX(200px) rotate(0deg); 
            }
            to { 
              transform: rotate(360deg) translateX(200px) rotate(-360deg); 
            }
          }
        }

        .energy-line {
          animation: energy-flow 3s ease-in-out infinite;
        }

        @keyframes energy-flow {
          0%, 100% { opacity: 0.2; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }

        .hologram-effect {
          animation: hologram 4s ease-in-out infinite;
        }

        @keyframes hologram {
          0%, 100% { opacity: 0.3; }
          25% { opacity: 0.1; }
          50% { opacity: 0.5; }
          75% { opacity: 0.2; }
        }

        .scroll-indicator {
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        @media (min-width: 640px) {
          @keyframes scroll-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(12px); }
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;