import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  ExternalLink, 
  Github, 
  Star, 
  Code, 
  Zap, 
  Layers, 
  Calendar,
  ArrowRight,
  Plus,
  Sparkles,
  Rocket,
  Search,
  Filter,
  TrendingUp,
  Award,
  Eye,
  Heart,
  Play,
  ArrowUpRight,
  Briefcase,
  Timer
} from 'lucide-react';

// Modern ProjectCard component
const ProjectCard = ({ id, title, description, image, technologies, liveUrl, githubUrl, category, date, featured, views, likes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Function to handle link clicks
  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <div  
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur opacity-0 group-hover:opacity-75 transition-all duration-700 ${isHovered ? 'animate-pulse' : ''}`} />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-700 group-hover:border-white/20">
        
        {/* Card Header */}
        <div className="relative h-56 overflow-hidden">
          {/* Image/Placeholder */}
          <div className="relative w-full h-full">
            {image && image !== "/api/placeholder/400/240" ? (
              <img 
                src={image} 
                alt={title}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-cyan-500/30 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Code className="w-10 h-10 text-white/70" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              {featured && (
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}
              <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/20">
                {category}
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-4">
              {views && (
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <Eye className="w-3 h-3" />
                  {views}
                </div>
              )}
              {likes && (
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <Heart className="w-3 h-3" />
                  {likes}
                </div>
              )}
            </div>
            
            {/* Hover Play Icon */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title and Date */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0 ml-2">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies?.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-medium hover:bg-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 4 && (
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300 font-medium">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {liveUrl && (
              <button 
                onClick={() => handleLinkClick(liveUrl)}
                className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </button>
            )}
            {githubUrl && (
              <button 
                onClick={() => handleLinkClick(githubUrl)}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sortBy, setSortBy] = useState('featured');

  // Enhanced sample projects data
  const projects = [
    {
      id: 1,
      title: "Web DashBoard Perhitungan SPK Metode WP",
      description: "Website perhitungan spk melalui metode wp atau weight product dengan hasil akurat dan benar, dan bisa di export ke pdf dan excel, saya membuat ini guna memenuhi Ujian AKhir Semester Mata Kuliah Sistem Pendukung Keputusan",
      image: 'https://raw.githubusercontent.com/gunawansapu/gunawan/main/Screenshot%20(511).png',
      technologies: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "Redis", "Stripe"],
      liveUrl: "https://dashboardspkwpmethod.netlify.app/",
      githubUrl: "https://github.com/gunawansapu/Perhitungan_spk_Dashboard",
      category: "Web App",
      date: "2025",
      featured: true,
      views: "2.1k",
      likes: "156"
    },
    {
      id: 2,
      title: "ResQmeal",
      description: "Website bisnis ResQmeal yang dirancang saat mata kuliah Perencanaan Sumber Daya Perusahaan guna memenuhi syarat lulus mata kuliah dan belajar membangun perusahaan sendiri",
      image: 'https://raw.githubusercontent.com/gunawansapu/avatar/main/Screenshot%20(514).png',
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "Formspree"],
      liveUrl: "https://resqmealhub.netlify.app/",
      githubUrl: "https://github.com/gunawansapu/Resqmealpsdp",
      category: "Landing Page",
      date: "2024",
      featured: true,
      views: "1.8k",
      likes: "203"
    },
    {
      id: 3,
      title: "Redesain RoodFoodie Website",
      description: "Meredesain Website RoodFoodie salah satu UMKM sukses di semarang yang pernah menjadi juara warisan kuliner bango 2018, dan website ini saya buat untuk memenuhi mata kuliah Interaksi Manusia dan Komputer",
      image: 'https://raw.githubusercontent.com/gunawansapu/avatar/main/Screenshot%20(515).png',
      technologies: ["React", "Socket.io", "WebRTC", "SQL", "Tailwind CSS"],
      liveUrl: "https://roodfoodierestaurantwebsite.netlify.app/",
      githubUrl: "https://github.com/gunawansapu/Roodfoodiewebsite",
      category: "Web App",
      date: "2024",
      featured: true,
      views: "1.2k",
      likes: "89"
    },
  ];

  const categories = ['all', 'Web App', 'Landing Page', 'Mobile App', 'Blockchain', 'UI/UX'];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = projects
    .filter(project => {
      const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return b.featured - a.featured;
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'popular') return parseInt(b.views) - parseInt(a.views);
      return 0;
    });

  return (
    <div id='projects' className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
        
        {/* Mouse follower gradient */}
        <div 
          className="absolute w-96 h-96 opacity-20 transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.3) 35%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <section className="relative z-10 px-4 py-20 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-white/80 font-semibold tracking-wide">PORTFOLIO</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300">
              Creative
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed">
            Eksplorasi koleksi proyek inovatif yang menggabungkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">teknologi cutting-edge</span> dengan desain yang memukau
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {projects.length}+
              </div>
              <div className="text-sm text-white/60 font-medium">Projects</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-white/60 font-medium">Featured</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                15k+
              </div>
              <div className="text-sm text-white/60 font-medium">Views</div>
            </div>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Enhanced Controls */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari proyek, teknologi, atau kategori..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                >
                  <option value="featured" className="bg-slate-800">Featured First</option>
                  <option value="newest" className="bg-slate-800">Newest</option>
                  <option value="popular" className="bg-slate-800">Most Popular</option>
                </select>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category === 'all' ? 'Semua' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <div className="text-center py-32">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                    <Search className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">0</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Tidak Ditemukan
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Tidak ada proyek yang sesuai dengan pencarian "<span className="text-white font-semibold">{searchTerm}</span>" 
                    {activeFilter !== 'all' && ` dalam kategori "${activeFilter}"`}
                  </p>
                  <button 
                    onClick={() => {setSearchTerm(''); setActiveFilter('all');}}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl text-white font-bold hover:scale-105 transition-transform duration-300"
                  >
                    <Sparkles className="w-5 h-5" />
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Projects Grid */
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`mt-32 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                <Rocket className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-purple-300 font-semibold">Ready to Collaborate</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Mari Wujudkan 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Proyek Impian Anda
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Dari konsep hingga implementasi, mari berkolaborasi menciptakan solusi digital yang inovatif dan berdampak
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <span>Mulai Proyek Baru</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-2xl text-white font-bold text-lg transition-all duration-300 flex items-center gap-3">
                  <Timer className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;