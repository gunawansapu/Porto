import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Globe, Users, Clock, MessageCircle, Eye, Zap, ChevronRight, Sparkles, Terminal, Cpu, Database, Network } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeHolo, setActiveHolo] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technicalSkills = [
    { 
      name: 'HTML, CSS, JavaScript (ES6+)', 
      icon: Code, 
      level: 90, 
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      glow: 'shadow-cyan-500/50',
      particles: 'cyan'
    },
    { 
      name: 'React JS, Tailwind CSS', 
      icon: Palette, 
      level: 85, 
      color: 'from-purple-400 via-pink-500 to-red-500',
      glow: 'shadow-purple-500/50',
      particles: 'purple'
    },
    { 
      name: 'Git & GitHub', 
      icon: Globe, 
      level: 80, 
      color: 'from-green-400 via-emerald-500 to-teal-600',
      glow: 'shadow-green-500/50',
      particles: 'green'
    },
    { 
      name: 'REST API & JSON', 
      icon: Zap, 
      level: 75, 
      color: 'from-yellow-400 via-orange-500 to-red-600',
      glow: 'shadow-yellow-500/50',
      particles: 'yellow'
    }
  ];

  const softSkills = [
    { 
      name: 'Teliti & Detail', 
      icon: Eye, 
      description: 'Perhatian tinggi terhadap detail dalam setiap project',
      color: 'from-cyan-400 to-blue-600'
    },
    { 
      name: 'Komunikasi Tertulis', 
      icon: MessageCircle, 
      description: 'Kemampuan komunikasi yang jelas dan efektif',
      color: 'from-purple-400 to-pink-600'
    },
    { 
      name: 'Kolaborasi Tim', 
      icon: Users, 
      description: 'Bekerja efektif baik mandiri maupun dalam tim',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      name: 'Manajemen Deadline', 
      icon: Clock, 
      description: 'Konsisten menyelesaikan tugas tepat waktu',
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  const FloatingParticle = ({ color, delay = 0 }) => (
    <div
      className={`absolute w-1 h-1 bg-${color}-400 rounded-full opacity-60 animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`
      }}
    />
  );

  const HolographicCard = ({ children, className = "", glowColor = "cyan" }) => (
    <div className={`group relative ${className}`}>
      {/* Holographic glow effect */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse ${
        glowColor === 'cyan' ? 'bg-gradient-to-r from-cyan-600 to-purple-600' :
        glowColor === 'purple' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
        glowColor === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
        glowColor === 'yellow' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
        'bg-gradient-to-r from-cyan-600 to-purple-600'
      }`} />
      
      {/* Glass morphism card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
               style={{ animation: 'scan 3s infinite linear' }} />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
             style={{
               backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }} />
        
        {children}
      </div>
    </div>
  );

  return (
    <div 
      id='about'
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #000000 100%)'
      }}
    >
      {/* Cyber grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100% 100%'
        }}
      />

      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} color="cyan" delay={i * 0.1} />
        ))}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={`purple-${i}`} color="purple" delay={i * 0.15} />
        ))}
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Futuristic Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full border border-cyan-500/50 shadow-lg shadow-cyan-500/25">
            <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 font-mono tracking-wider">PORTFOLIO.EXE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              TENTANG
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SAYA
            </span>
            {/* Glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-pulse"
                 style={{ animation: 'glitch 4s infinite' }}>
              TENTANG<br />SAYA
            </div>
          </h1>
          
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-8 bg-gradient-to-t from-cyan-500/20 to-cyan-500/80 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  height: `${Math.random() * 40 + 10}px`
                }}
              />
            ))}
          </div>
        </div>

       {/* Holographic Profile Section */}
<div className={`mb-12 sm:mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <HolographicCard className="p-4 sm:p-8 md:p-12" glowColor="cyan">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        {/* 3D Avatar - Tempat untuk foto profil */}
        <div className="relative group">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 relative">
            {/* Rotating rings */}
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 sm:inset-12 md:inset-16 border border-pink-400/30 rounded-full animate-spin" style={{ animationDuration: '6s' }} />
            
            {/* Photo Container */}
            <div className="absolute inset-6 sm:inset-8 md:inset-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 border-2 border-white/20">
              {/* Foto Profil - Ganti src dengan URL foto Anda */}
              <img 
                src="https://raw.githubusercontent.com/gunawansapu/avatar/main/WhatsApp%20Image%202025-05-24%20at%2007.58.09_2fac3eeb.jpg"
                alt="Gunawan Saputra"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback jika gambar tidak bisa dimuat
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback Avatar jika foto tidak bisa dimuat */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center" style={{ display: 'none' }}>
                <Cpu className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white animate-pulse" />
              </div>
                
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
              <div className="absolute top-1/2 -right-2 sm:-right-3 md:-right-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50" />
              <div className="absolute top-1/2 -left-2 sm:-left-3 md:-left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 backdrop-blur-sm rounded-full border border-cyan-500/30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-cyan-300 font-mono text-xs sm:text-sm">ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 font-mono text-xs sm:text-sm">STATUS: ONLINE</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              GUNAWAN CHOLIS SAPUTRA
            </span>
          </h2>
          
          <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 sm:space-y-4 font-light">
            <p>
              <span className="text-cyan-400 font-mono">&gt;</span> Halo! Saya mahasiswa{' '}
              <span className="text-cyan-400 font-semibold animate-pulse">Sistem Infromasi</span> yang memiliki 
              minat besar dalam pengembangan{' '}
              <span className="text-purple-400 font-semibold">frontend</span>,{' '}
              <span className="text-pink-400 font-semibold">UI/UX design</span>, dan teknologi web futuristik.
            </p>
            <p>
              <span className="text-cyan-400 font-mono">&gt;</span> Saya suka membangun antarmuka yang bersih, responsif, dan efisien dengan teknologi{' '}
              <span className="text-cyan-400 font-semibold">React</span> dan{' '}
              <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4 md:mt-6">
            {['React', 'TypeScript', 'CSS3', 'Node.js'].map((tech, i) => (
              <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 border border-cyan-500/30 rounded-full text-cyan-300 text-xs sm:text-sm font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </HolographicCard>
  </div>
</div>

        {/* 3D Technical Skills */}
        <div className={`mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TECHNICAL
              </span>{' '}
              <span className="text-white">SKILLS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                const isActive = activeSkill === index;
                
                return (
                  <div
                    key={index}
                    className="cursor-pointer transform hover:scale-105 transition-all duration-500"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                  >
                    <HolographicCard glowColor={skill.particles}>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center ${skill.glow} shadow-2xl transform ${isActive ? 'rotate-12 scale-110' : ''} transition-all duration-500`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <span className="text-white font-bold text-lg block">{skill.name}</span>
                            <span className="text-gray-400 font-mono text-sm">LEVEL_{skill.level}</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                      </div>
                      
                      {/* 3D Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-4 bg-black/60 rounded-full border border-gray-700 overflow-hidden shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative shadow-lg`}
                            style={{ width: isActive ? `${skill.level}%` : '20%' }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                            <div className="absolute right-0 top-0 w-2 h-full bg-white/50 animate-pulse rounded-r-full" />
                            <div className="absolute inset-0 shadow-lg rounded-full" style={{ 
                              boxShadow: `0 0 20px ${skill.particles === 'cyan' ? '#06b6d4' : skill.particles === 'purple' ? '#a855f7' : skill.particles === 'green' ? '#10b981' : '#f59e0b'}` 
                            }} />
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-gray-500 text-xs font-mono">00%</span>
                          <span className={`text-xs font-mono font-bold transition-all duration-500 ${
                            skill.particles === 'cyan' ? 'text-cyan-400' :
                            skill.particles === 'purple' ? 'text-purple-400' :
                            skill.particles === 'green' ? 'text-green-400' :
                            'text-yellow-400'
                          }`}>
                            {isActive ? `${skill.level}%` : '20%'}
                          </span>
                        </div>
                      </div>
                    </div>
                    </HolographicCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Soft Skills Matrix */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">SOFT</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                const isHovered = activeHolo === index;
                
                return (
                  <div
                    key={index}
                    className="cursor-pointer group h-full"
                    onMouseEnter={() => setActiveHolo(index)}
                    onMouseLeave={() => setActiveHolo(null)}
                    onClick={() => setActiveHolo(activeHolo === index ? null : index)}
                  >
                    <HolographicCard>
                    <div className="p-6 h-full flex flex-col items-center text-center relative">
                      {/* Holographic projection effect */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${skill.color} opacity-0 ${isHovered ? 'opacity-10' : ''} transition-opacity duration-500 rounded-2xl`} />
                      
                      <div className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 transform ${isHovered ? 'scale-110 rotate-6' : ''} transition-all duration-500 shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                        
                        {/* Orbiting ring */}
                        <div className={`absolute inset-0 border-2 border-white/20 rounded-2xl ${isHovered ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
                      </div>
                      
                      <h4 className="text-white font-bold mb-4 text-lg">{skill.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{skill.description}</p>
                      
                      {/* Status indicator */}
                      <div className="flex items-center gap-2 mt-4">
                        <div className={`w-2 h-2 bg-green-400 rounded-full ${isHovered ? 'animate-pulse' : ''}`} />
                        <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                      </div>
                    </div>
                    </HolographicCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Futuristic CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="inline-block cursor-pointer group"
            onClick={() => window.open('mailto:saputragunawan260@gmail.com', '_blank')}
          >
            <HolographicCard className="">
              <div className="px-12 py-6 flex items-center gap-4 group-hover:bg-white/5 transition-all duration-300">
                <Network className="w-8 h-8 text-cyan-400 group-hover:animate-spin transition-all duration-300" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  INITIALIZE CONNECTION
                </span>
                <ChevronRight className="w-8 h-8 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </HolographicCard>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glitch {
          0%, 90%, 100% { opacity: 0; }
          95% { opacity: 0.8; transform: translate(-2px, 1px); }
          96% { opacity: 0.6; transform: translate(2px, -1px); }
          97% { opacity: 0.9; transform: translate(-1px, 2px); }
          98% { opacity: 0.7; transform: translate(1px, -2px); }
          99% { opacity: 0.8; transform: translate(-2px, -1px); }
        }
      `}</style>
    </div>
  );
}

export default About;