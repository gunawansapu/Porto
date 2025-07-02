import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, MapPin, Zap, Globe, MessageCircle, ArrowRight, Star, Sparkles, Shield, Code, Cpu, Wifi } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState('CONTACT');
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [typingText, setTypingText] = useState('');
  const canvasRef = useRef(null);

  const fullText = "INITIALIZING QUANTUM CONNECTION PROTOCOL...";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect for main title
  useEffect(() => {
    const glitchChars = ['C', 'O', 'N', 'T', 'A', 'C', 'T', '∞', '◊', '●', '◆', '▲', '▼', '♦', '◊'];
    const originalText = 'CONTACT';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        const glitched = originalText
          .split('')
          .map(char => Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 200);

    return () => clearInterval(glitchInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypingText('');
          i = 0;
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Scanline animation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(scanInterval);
  }, []);

  // Matrix rain effect - responsive canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const drops = [];
    const fontSize = window.innerWidth < 768 ? 10 : 14; // Smaller font on mobile
    const columns = canvas.width / fontSize;

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.random()})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkrzbna", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        console.error("Formspree Error:", data);
        alert("Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'NEURAL MAIL',
      value: 'saputragunawan260@gmail.com',
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      glow: 'shadow-cyan-500/50',
      delay: 0.1
    },
    {
      icon: Phone,
      label: 'QUANTUM LINK',
      value: '+62 813-9145-0791',
      color: 'from-purple-400 via-pink-500 to-red-500',
      glow: 'shadow-purple-500/50',
      delay: 0.2
    },
    {
      icon: MapPin,
      label: 'DATA CENTER',
      value: 'Semarang Cyber District',
      color: 'from-green-400 via-emerald-500 to-teal-500',
      glow: 'shadow-green-500/50',
      delay: 0.3
    },
    {
      icon: Globe,
      label: 'NET PORTAL',
      value: 'gunawan.dev',
      color: 'from-orange-400 via-red-500 to-pink-500',
      glow: 'shadow-orange-500/50',
      delay: 0.4
    }
  ];

  return (
    <div id='contact' className="min-h-screen relative overflow-hidden bg-black">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: 1 }}
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 bg-black">
          {/* Grid lines - responsive size */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(cyan 1px, transparent 1px),
                linear-gradient(90deg, cyan 1px, transparent 1px)
              `,
              backgroundSize: window.innerWidth < 768 ? '30px 30px' : '50px 50px',
            }}
          />
          
          {/* Animated scanlines */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(0deg, transparent ${scanlinePosition}%, rgba(0,255,255,0.3) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`,
            }}
          />
        </div>
        
        {/* Holographic layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-transparent to-green-900/10"></div>
      </div>

      {/* Floating 3D elements - reduced on mobile */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
            }}
          >
            <div className="w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping"></div>
          </div>
        ))}

        {/* Floating geometric shapes - reduced on mobile */}
        {[...Array(window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute border border-cyan-400/30 animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              transform: `rotate3d(1, 1, 1, ${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Mouse trail effect - hidden on mobile */}
      <div 
        className="fixed pointer-events-none w-48 h-48 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl transition-all duration-300 ease-out hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(138, 43, 226, 0.2) 50%, transparent 70%)',
          left: mousePosition.x - (window.innerWidth < 768 ? 96 : 192),
          top: mousePosition.y - (window.innerWidth < 768 ? 96 : 192),
          zIndex: 4,
        }}
      />

      <div className="relative px-4 md:px-6 py-12 md:py-20" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto">
          {/* Futuristic Header - Mobile optimized */}
          <div className="text-center mb-12 md:mb-20">
            {/* Status indicator - smaller on mobile */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-black/60 backdrop-blur-xl border border-cyan-400/30 rounded-full mb-6 md:mb-8 shadow-lg shadow-cyan-400/20">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs md:text-sm text-cyan-300 font-mono tracking-wider">SYSTEM ONLINE</span>
              <Wifi className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            </div>

            {/* Glitch title - responsive sizing */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 relative">
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 leading-tight font-mono tracking-wider"
                style={{
                  textShadow: '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
                  filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))'
                }}
              >
                {glitchText}
              </span>
              <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 opacity-50 animate-pulse"
                   style={{ transform: 'translate(2px, 2px)' }}>
                {glitchText}
              </div>
            </h1>
            
            {/* Typing animation - responsive */}
            <div className="h-6 md:h-8 mb-6 md:mb-8">
              <p className="text-sm md:text-lg text-cyan-300 font-mono tracking-wider px-4">
                {typingText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-base md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Enter the digital realm where innovation meets possibility. 
              <span className="text-cyan-300"> Quantum-encrypted communication </span>
              protocols active.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Holographic Contact Form - Mobile optimized */}
            <div className="relative group order-2 lg:order-1">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative bg-black/80 backdrop-blur-2xl border border-cyan-400/30 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl shadow-cyan-500/20">
                {/* Form header - mobile responsive */}
                <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 blur-md opacity-50 animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-bold text-cyan-300 font-mono tracking-wider">Hubungi Saya</h2>
                    <p className="text-cyan-500/70 text-xs md:text-sm font-mono">Direct brain-to-system interface</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6 md:space-y-8">
                    {/* Enhanced form fields - mobile responsive */}
                    {[
                      { name: 'name', label: 'IDENTITY CODE', placeholder: '>> Masukkan Nama', type: 'text' },
                      { name: 'email', label: 'NEURAL ADDRESS', placeholder: '>> user@gmail.com', type: 'email' },
                    ].map((field) => (
                      <div key={field.name} className="relative group">
                        <label className="block text-xs md:text-sm font-bold text-cyan-300 mb-2 md:mb-3 font-mono tracking-widest">
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name]}
                            onChange={handleChange}
                            onFocus={() => setHoveredField(field.name)}
                            onBlur={() => setHoveredField(null)}
                            required
                            className="w-full px-4 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl bg-black/60 text-cyan-300 placeholder-cyan-500/50 border border-cyan-400/30 focus:outline-none focus:border-cyan-400 focus:bg-black/80 transition-all duration-500 font-mono tracking-wide shadow-inner text-sm md:text-base"
                            placeholder={field.placeholder}
                            style={{
                              boxShadow: hoveredField === field.name 
                                ? 'inset 0 0 20px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.3)' 
                                : 'inset 0 0 10px rgba(0,0,0,0.5)'
                            }}
                          />
                          {hoveredField === field.name && (
                            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Message field - mobile responsive */}
                    <div className="relative group">
                      <label className="block text-xs md:text-sm font-bold text-cyan-300 mb-2 md:mb-3 font-mono tracking-widest">
                        DATA TRANSMISSION
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setHoveredField('message')}
                          onBlur={() => setHoveredField(null)}
                          required
                          rows={window.innerWidth < 768 ? "4" : "6"}
                          className="w-full px-4 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl bg-black/60 text-cyan-300 placeholder-cyan-500/50 border border-cyan-400/30 focus:outline-none focus:border-cyan-400 focus:bg-black/80 transition-all duration-500 font-mono tracking-wide resize-none shadow-inner text-sm md:text-base"
                          placeholder=">> Masukkan Pesan Anda..."
                          style={{
                            boxShadow: hoveredField === 'message' 
                              ? 'inset 0 0 20px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.3)' 
                              : 'inset 0 0 10px rgba(0,0,0,0.5)'
                          }}
                        />
                        {hoveredField === 'message' && (
                          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Cyber submit button - mobile responsive */}
                    <button
                      type="submit"
                      disabled={isLoading || submitted}
                      className="group relative w-full px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl overflow-hidden font-mono font-bold text-sm md:text-lg tracking-wider transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0,255,255,0.8), rgba(138,43,226,0.8))',
                        boxShadow: '0 0 30px rgba(0,255,255,0.5), inset 0 0 30px rgba(255,255,255,0.1)',
                      }}
                    >
                      {/* Button background effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-black/20 group-active:bg-black/40 transition-colors duration-200"></div>
                      
                      <div className="relative flex items-center justify-center gap-2 md:gap-4 text-white">
                        {isLoading ? (
                          <>
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-bounce"></div>
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="hidden sm:inline">TRANSMITTING DATA...</span>
                            <span className="sm:hidden">TRANSMITTING...</span>
                          </>
                        ) : submitted ? (
                          <>
                            <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                            <span className="hidden sm:inline">TRANSMISSION COMPLETE</span>
                            <span className="sm:hidden">COMPLETE</span>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-ping"></div>
                          </>
                        ) : (
                          <>
                            <Zap className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
                            <span className="hidden sm:inline">INITIATE QUANTUM LINK</span>
                            <span className="sm:hidden">QUANTUM LINK</span>
                            <Code className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-180 transition-transform duration-500" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Info - Mobile responsive */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="text-center lg:text-left mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-cyan-300 mb-4 md:mb-6 font-mono tracking-wider">
                  CONNECTION PROTOCOLS
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed px-4 lg:px-0">
                  Multiple secure channels available for digital communication. 
                  <span className="text-purple-400"> Encrypted transmission </span> guaranteed.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`group relative p-4 md:p-8 rounded-xl md:rounded-2xl bg-black/60 backdrop-blur-sm border border-cyan-400/30 hover:bg-black/80 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer transform hover:scale-105 ${method.glow} hover:shadow-2xl`}
                    style={{ 
                      animationDelay: `${method.delay}s`,
                      boxShadow: '0 0 20px rgba(0,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="relative flex-shrink-0">
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg ${method.glow}`}>
                          <method.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${method.color} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-cyan-300 font-bold text-base md:text-lg mb-1 md:mb-2 font-mono tracking-wider">
                          {method.label}
                        </h4>
                        <p className="text-white/60 group-hover:text-cyan-300 transition-colors duration-500 font-mono tracking-wide text-sm md:text-base break-all">
                          {method.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-2 transition-all duration-500 flex-shrink-0" />
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>

              {/* System status - mobile responsive */}
              <div className="mt-8 md:mt-12 p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 border border-green-400/30 shadow-lg shadow-green-400/20">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="relative">
                    <Zap className="w-6 h-6 md:w-7 md:h-7 text-green-400 animate-pulse" />
                    <div className="absolute inset-0 text-green-400 blur-sm opacity-50">
                      <Zap className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                  <h4 className="text-green-300 font-bold text-lg md:text-xl font-mono tracking-wider">
                    RESPONSE PROTOCOL
                  </h4>
                </div>
                <p className="text-white/70 leading-relaxed font-mono text-sm md:text-base">
                  <span className="text-green-400">● ACTIVE</span> - Quantum response time: 
                  <span className="text-cyan-300"> &lt; 24 Earth hours</span><br/>
                  <span className="text-purple-400">● PRIORITY</span> - Direct neural link available for urgent transmissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;