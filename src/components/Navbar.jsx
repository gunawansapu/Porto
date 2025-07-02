import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detect active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);

  const isActive = (path) => {
    if (path === '#home' || path === '#') return activeSection === 'home';
    return activeSection === path.replace('#', '');
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setOpen(false); // Close mobile menu
    
    if (path === '#home' || path === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const targetId = path.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
  };

  const navItems = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <>
      {/* Cyber Grid Background */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-30"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/30'
          : 'bg-black/80 backdrop-blur-lg shadow-xl border-b border-cyan-500/20'
      }`}>
        
        {/* Animated border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent cyber-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent cyber-pulse-reverse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo dengan efek hologram */}
            <div className="flex-shrink-0 group relative">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-2xl font-bold relative block"
              >
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 inline-block font-extrabold tracking-wider">
                  GUNAWAN
                </span>
                
                {/* Hologram effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
                
                {/* Scanning line */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="scan-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"></div>
                </div>
                
                {/* Corner brackets */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            </div>

            {/* Desktop menu dengan efek cyber */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 group cyber-button ${
                      isActive(item.path) 
                        ? 'text-cyan-400 cyber-active' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <span className="relative z-10 tracking-wider">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-purple-500/20 rounded border border-cyan-400/50 cyber-glow"></div>
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 cyber-slide"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 cyber-slide-reverse"></div>
                      </>
                    )}
                    
                    {/* Hover effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/20 to-purple-500/10 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 border border-cyan-400/20 group-hover:border-cyan-400/50"></div>
                    
                    {/* Corner indicators */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Particle effect on hover */}
                    <div className="absolute inset-0 overflow-hidden rounded">
                      <div className="particle particle-1 absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"></div>
                      <div className="particle particle-2 absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"></div>
                      <div className="particle particle-3 absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button dengan efek cyber */}
            <button
              onClick={toggleMenu}
              className={`md:hidden relative p-3 focus:outline-none transition-all duration-300 group cyber-button ${
                open ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative z-10">
                <span className={`bg-current block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
              
              {/* Button frame */}
              <div className={`absolute inset-0 border rounded transition-all duration-300 ${
                open 
                  ? 'border-cyan-400/70 opacity-100' 
                  : 'border-cyan-400/30 opacity-0 group-hover:opacity-100'
              }`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded transition-all duration-300 ${
                open 
                  ? 'opacity-100' 
                  : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </button>
          </div>

          {/* Mobile menu dengan animasi cyber */}
          <div className={`md:hidden transition-all duration-700 ease-in-out ${
            open ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-4 pb-3 space-y-2 bg-black/90 backdrop-blur-lg rounded-lg border border-cyan-400/30 mt-4 relative cyber-panel">
              
              {/* Panel grid effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-lg"></div>
              
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`block px-4 py-3 text-base font-semibold transition-all duration-500 rounded-lg relative group mobile-item ${
                    isActive(item.path) 
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: open ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <span className="flex items-center relative z-10">
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'bg-cyan-400 cyber-dot-active' 
                        : 'bg-gray-600 group-hover:bg-cyan-400'
                    }`}></span>
                    <span className="tracking-wider">{item.name}</span>
                  </span>
                  
                  {/* Mobile active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full cyber-indicator"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Cyber Styles */}
      <style jsx>{`
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .cyber-pulse {
          animation: pulse-line 2s ease-in-out infinite;
        }

        .cyber-pulse-reverse {
          animation: pulse-line-reverse 2s ease-in-out infinite;
        }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.1); }
        }

        @keyframes pulse-line-reverse {
          0%, 100% { opacity: 0.5; transform: scaleX(1); }
          50% { opacity: 0.2; transform: scaleX(0.9); }
        }

        .scan-line {
          animation: scan 2s ease-in-out infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .cyber-active {
          text-shadow: 0 0 10px currentColor;
        }

        .cyber-glow {
          box-shadow: 
            0 0 20px rgba(6, 182, 212, 0.3),
            inset 0 0 20px rgba(6, 182, 212, 0.1);
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
          from { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1); }
          to { box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.2); }
        }

        .cyber-slide {
          animation: slide-right 1.5s ease-in-out infinite;
        }

        .cyber-slide-reverse {
          animation: slide-left 1.5s ease-in-out infinite reverse;
        }

        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slide-left {
          0% { transform: translateX(100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        .particle-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .particle-2 {
          animation: float-2 3s ease-in-out infinite 0.5s;
        }

        .particle-3 {
          animation: float-3 3s ease-in-out infinite 1s;
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -5px); }
          50% { transform: translate(5px, -10px); }
          75% { transform: translate(-5px, -5px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-8px, -8px); }
          50% { transform: translate(-15px, 0px); }
          75% { transform: translate(-5px, 8px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(12px, 5px); }
          50% { transform: translate(-5px, 10px); }
          75% { transform: translate(8px, -3px); }
        }

        .cyber-dot-active {
          box-shadow: 0 0 10px currentColor;
          animation: dot-pulse 1.5s ease-in-out infinite;
        }

        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .cyber-indicator {
          animation: indicator-glow 2s ease-in-out infinite alternate;
        }

        @keyframes indicator-glow {
          from { opacity: 0.7; }
          to { opacity: 1; box-shadow: 0 0 15px currentColor; }
        }

        .mobile-item {
          animation: slide-in-mobile 0.5s ease-out forwards;
          opacity: 0;
          transform: translateX(-20px);
        }

        @keyframes slide-in-mobile {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .cyber-panel {
          position: relative;
          overflow: hidden;
        }

        .cyber-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent);
          animation: sweep 3s ease-in-out infinite;
        }

        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </>
  );
}

export default Navbar;