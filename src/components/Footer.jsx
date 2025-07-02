import { useState, useEffect } from "react";

function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [heartAnimation, setHeartAnimation] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(null);

  // Mouse tracking for cyber effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Periodic glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleHeartClick = () => {
    setHeartAnimation(true);
    setTimeout(() => setHeartAnimation(false), 600);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: 'https://github.com/gunawansapu', color: 'hover:text-cyan-400 hover:shadow-cyan-400/50' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://www.linkedin.com/in/gunawan-cholis-saputra-53a923295/', color: 'hover:text-blue-400 hover:shadow-blue-400/50' },
    { name: 'Twitter', icon: '📡', url: '#', color: 'hover:text-purple-400 hover:shadow-purple-400/50' },
    { name: 'Discord', icon: '🎮', url: '#', color: 'hover:text-indigo-400 hover:shadow-indigo-400/50' },
    { name: 'Instagram', icon: '📬', url: 'https://www.instagram.com/gunawan_cs10?igsh=MXdzdDJ1ZTNwZW11eA==', color: 'hover:text-green-400 hover:shadow-green-400/50' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#hero', icon: '🧠' },
    { name: 'About', url: '#about', icon: '💾' },
    { name: 'Projects', url: '#projects', icon: '🚀' },
    { name: 'Contact', url: '#contact', icon: '💻' },
  ];

  const techStack = [
    { name: 'React.js', glow: 'cyan' },
    { name: 'Next.js', glow: 'blue' },
    { name: 'TypeScript', glow: 'purple' },
    { name: 'Node.js', glow: 'green' },
    { name: 'GraphQL', glow: 'pink' },
    { name: 'Docker', glow: 'indigo' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.1) 0%, transparent 50%)`
        }}
      ></div>

      {/* Animated border */}
      <div className="relative">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-60 animate-ping"></div>
      </div>

      {/* Floating cyber particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_4px_#00ffff]"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          
          {/* Brand section - Mobile: full width, Desktop: 6 cols */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <h3 className={`text-2xl lg:text-3xl font-bold mb-2 transition-all duration-300 ${
                glitchEffect ? 'animate-pulse' : ''
              }`}>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
                  GUNAWAN.SAPUTRA
                  {glitchEffect && (
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent animate-ping">
                      GUNAWAN.SAPUTRA
                    </span>
                  )}
                </span>
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#00ff00]"></div>
                <span className="text-green-400 text-sm font-mono">SYSTEM_ONLINE</span>
              </div>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed font-mono">
                &gt; Crafting digital experiences with React, Vue and Angular.
                <br />
                &gt; Specializing in Web FrontEnd Developer.
              </p>
            </div>
            
            {/* Social links - Mobile: Grid 3 cols, Desktop: Flex */}
            <div className="grid grid-cols-3 lg:flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`group relative p-3 lg:p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:shadow-lg ${social.color} flex items-center justify-center`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveSection(social.name)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <span className="text-lg lg:text-xl relative z-10">{social.icon}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-lg border border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-400 text-xs px-2 py-1 rounded font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 border border-cyan-500/30 whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links - Mobile: full width, Desktop: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-cyan-400 mb-4 font-mono flex items-center">
              <span className="mr-2">{'>'}</span>
              QUICK_ACCESS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm lg:text-base flex items-center group font-mono"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System info - Mobile: full width, Desktop: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-cyan-400 mb-4 font-mono flex items-center">
              <span className="mr-2">{'>'}</span>
              SYSTEM_INFO
            </h4>
            <div className="space-y-3 text-sm lg:text-base text-gray-300 font-mono">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">📍</span>
                <span>Semarang, Indonesia</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">📧</span>
                <a href="mailto:hello@gunawan.dev" className="hover:text-cyan-400 transition-colors duration-300">
                  saputragunawan260@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">🌐</span>
                <a href="#hero" className="hover:text-cyan-400 transition-colors duration-300">
                  gunawan.dev
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">⚡</span>
                <span className="text-green-400">Status: Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack - Mobile: 2 cols, Desktop: flex */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-cyan-400 mb-4 font-mono flex items-center">
            <span className="mr-2">{'>'}</span>
            TECH_STACK
          </h4>
          <div className="grid grid-cols-2 lg:flex flex-wrap gap-2 lg:gap-3">
            {techStack.map((tech, index) => (
              <span
                key={tech.name}
                className={`px-3 py-2 text-xs lg:text-sm bg-gray-900/50 backdrop-blur-sm text-gray-300 rounded border border-gray-700/50 font-mono transition-all duration-300 hover:scale-105 cursor-default flex items-center justify-center lg:justify-start
                  ${tech.glow === 'cyan' ? 'hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : ''}
                  ${tech.glow === 'blue' ? 'hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]' : ''}
                  ${tech.glow === 'purple' ? 'hover:border-purple-400/50 hover:text-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]' : ''}
                  ${tech.glow === 'green' ? 'hover:border-green-400/50 hover:text-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]' : ''}
                  ${tech.glow === 'pink' ? 'hover:border-pink-400/50 hover:text-pink-400 hover:shadow-[0_0_10px_rgba(244,114,182,0.3)]' : ''}
                  ${tech.glow === 'indigo' ? 'hover:border-indigo-400/50 hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-400 font-mono">
                © {currentYear} GUNAWAN.SAPUTRA // ALL_RIGHTS_RESERVED
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center justify-center lg:justify-start font-mono">
                Crafted_with{' '}
                <button
                  onClick={handleHeartClick}
                  className={`mx-1 text-red-500 hover:text-red-400 transition-all duration-300 focus:outline-none ${
                    heartAnimation ? 'animate-pulse scale-125' : ''
                  }`}
                  aria-label="Made with love"
                >
                  ❤️
                </button>
                {' '}using React & Tailwind CSS
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom cyber effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-xl"></div>
    </footer>
  );
}

export default Footer;