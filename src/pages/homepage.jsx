import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code, Cpu, Layers, Layout, Terminal } from 'lucide-react';

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 1. Progress Logic with Sprint at the end
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        const increment = prev > 85 ? 12 : Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const isImpactPhase = progress >= 90;

  // Projects Data
  const projectsList = [
    {
      id: '01',
      title: 'E-Commerce Core Engine',
      category: 'Fullstack / Web App',
      year: '2025',
      stack: ['React', 'Vite', 'Tailwind', 'Node.js'],
      description: 'Ultra-fast headless commerce platform with real-time inventory management.'
    },
    {
      id: '02',
      title: 'Neural Dashboard UI',
      category: 'UI/UX Design & Frontend',
      year: '2024',
      stack: ['React', 'Framer Motion', 'Radix UI'],
      description: 'Analytics suite for data visualization with customizable widget layouts.'
    },
    {
      id: '03',
      title: 'SaaS Protocol Platform',
      category: 'Design Engineering',
      year: '2024',
      stack: ['React 19', 'Zod', 'React Hook Form'],
      description: 'High-conversion landing system built for venture-backed AI startup.'
    },
    {
      id: '04',
      title: 'Creative Studio Archive',
      category: 'Editorial Website',
      year: '2023',
      stack: ['React', 'Lenis', 'Tailwind CSS'],
      description: 'Minimalist image-heavy portfolio built for an architectural firm.'
    }
  ];

  // Tech Stack Data
  const techCategories = [
    {
      category: 'Frontend Core',
      icon: <Layout className="w-5 h-5 text-[#7F1D1D]" />,
      skills: ['React 19', 'Vite', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'TypeScript']
    },
    {
      category: 'UI & Animation',
      icon: <Layers className="w-5 h-5 text-[#7F1D1D]" />,
      skills: ['Tailwind CSS', 'Framer Motion', 'Radix UI / Headless', 'Lenis Scroll', 'Lucide']
    },
    {
      category: 'Backend & Data',
      icon: <Cpu className="w-5 h-5 text-[#7F1D1D]" />,
      skills: ['Node.js', 'REST APIs', 'Zod Validation', 'TanStack Table']
    },
    {
      category: 'Tools & Workflow',
      icon: <Terminal className="w-5 h-5 text-[#7F1D1D]" />,
      skills: ['Git / GitHub', 'VS Code', 'npm / npx', 'PostCSS', 'ESLint']
    }
  ];

  return (
    <>
      {/* --- 1. LOADING SCREEN (ZOOM IN) --- */}
      <div 
        style={{ 
          backgroundColor: '#111111', 
          zIndex: 100,
          visibility: loading ? 'visible' : 'hidden',
          opacity: loading ? 1 : 0
        }}
        className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-300"
      >
        <div 
          style={{ 
            transform: isImpactPhase ? 'scale(15)' : 'scale(1)',
            transition: 'transform 0.4s ease-in',
            opacity: isImpactPhase ? 0.3 : 1
          }}
          className="flex flex-col items-center"
        >
          <h1 style={{ color: '#F3EEE3' }} className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Ctrl + <span style={{ color: '#7F1D1D' }}>6</span>
          </h1>
          <div className="mt-8 w-48 h-[2px] bg-[#F3EEE3]/20 relative overflow-hidden">
            <div 
              className="h-full transition-all duration-100"
              style={{ width: `${progress}%`, backgroundColor: '#7F1D1D' }}
            />
          </div>
          <p style={{ color: '#F3EEE3' }} className="mt-4 font-mono text-[10px] opacity-40 tracking-[0.5em]">
            {progress}%
          </p>
        </div>
      </div>

      {/* --- 2. HOMEPAGE CONTENT --- */}
      <div 
        style={{ backgroundColor: '#F3EEE3', color: '#111111' }} 
        className="min-h-screen w-full overflow-x-hidden antialiased"
      >
        
        {/* NAV: ZOOM OUTWARD */}
        <header 
          style={{ 
            transform: loading ? 'scale(3)' : 'scale(1)',
            opacity: loading ? 0 : 1
          }}
          className="w-full px-6 sm:px-12 md:px-16 pt-16 pb-24 flex justify-between items-start transition-all duration-[800ms] ease-out delay-75"
        >
          <p className="text-xs sm:text-sm max-w-[320px] leading-relaxed font-bold uppercase tracking-widest opacity-70">
            Design Engineering // Ctrl + 6
          </p>
          <nav className="flex gap-8 sm:gap-12 text-sm font-black uppercase tracking-widest">
            <a href="#projects" className="hover:text-[#7F1D1D] transition-colors">Projects</a>
            <a href="#stack" className="hover:text-[#7F1D1D] transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-[#7F1D1D] transition-colors">Contact</a>
          </nav>
        </header>

        <main className="w-full px-6 sm:px-12 md:px-16 pb-32">
          
          {/* MAIN TITLE: ZOOM OUTWARD */}
          <div 
            style={{ 
              transform: loading ? 'scale(5)' : 'scale(1)',
              opacity: loading ? 0 : 1
            }}
            className="mb-24 md:mb-36 transition-all duration-[1000ms] ease-out"
          >
            <h1 className="text-[15vw] font-black tracking-tighter uppercase leading-[0.75] select-none">
              Ctrl + <span style={{ color: '#7F1D1D' }}>6</span>
            </h1>
          </div>

          {/* FEATURED 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
            
            {/* Card 01 - Tallest */}
            <div 
              style={{ 
                backgroundColor: '#111111', 
                color: '#F3EEE3',
                transform: loading ? 'scale(0)' : 'scale(1)',
                opacity: loading ? 0 : 1
              }} 
              className="group relative h-[650px] flex flex-col justify-between p-10 cursor-pointer transition-all duration-[800ms] ease-out delay-[150ms]"
            >
              <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">Block_01</span>
              <div className="flex justify-between items-end">
                <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">System<br/>Engine</h2>
                <div style={{ backgroundColor: '#7F1D1D' }} className="w-14 h-14 flex items-center justify-center">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Card 02 - Medium */}
            <div 
              style={{ 
                backgroundColor: '#111111', 
                color: '#F3EEE3',
                transform: loading ? 'scale(0)' : 'scale(1)',
                opacity: loading ? 0 : 1
              }} 
              className="group relative h-[520px] flex flex-col justify-between p-10 cursor-pointer transition-all duration-[800ms] ease-out delay-[300ms]"
            >
              <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">Block_02</span>
              <div className="flex justify-between items-end">
                <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">Neural<br/>Interface</h2>
                <div style={{ backgroundColor: '#7F1D1D' }} className="w-14 h-14 flex items-center justify-center">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Card 03 - Shortest */}
            <div 
              style={{ 
                backgroundColor: '#111111', 
                color: '#F3EEE3',
                transform: loading ? 'scale(0)' : 'scale(1)',
                opacity: loading ? 0 : 1
              }} 
              className="group relative h-[380px] flex flex-col justify-between p-10 cursor-pointer transition-all duration-[800ms] ease-out delay-[450ms]"
            >
              <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">Block_03</span>
              <div className="flex justify-between items-end">
                <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">Cyber<br/>Protocol</h2>
                <div style={{ backgroundColor: '#7F1D1D' }} className="w-14 h-14 flex items-center justify-center">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* NEW SECTION 1: DETAILED PROJECTS INDEX                         */}
          {/* ============================================================== */}
          <section id="projects" className="mt-48 pt-20 border-t-2 border-[#111111]/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase opacity-40">Section // 01</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-2">
                  Project <span style={{ color: '#7F1D1D' }}>Index</span>
                </h2>
              </div>
              <p className="max-w-md text-sm opacity-70 leading-relaxed uppercase font-mono">
                [ Selected engineering & design works engineered for durability and performance ]
              </p>
            </div>

            {/* Project List */}
            <div className="divide-y divide-[#111111]/10">
              {projectsList.map((project) => (
                <div 
                  key={project.id}
                  className="group py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer hover:px-4 transition-all duration-300 rounded-sm"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-[#7F1D1D] font-bold mt-1">({project.id})</span>
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-[#7F1D1D] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-70 mt-1 max-w-xl">
                        {project.description}
                      </p>
                      
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.stack.map((item) => (
                          <span 
                            key={item} 
                            style={{ backgroundColor: '#111111', color: '#F3EEE3' }}
                            className="text-[10px] font-mono px-3 py-1 uppercase tracking-wider rounded-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 self-end md:self-auto">
                    <div className="text-right hidden sm:block">
                      <span className="text-xs font-mono opacity-40 uppercase block">{project.category}</span>
                      <span className="text-xs font-mono font-bold block">{project.year}</span>
                    </div>
                    <div 
                      style={{ backgroundColor: '#111111', color: '#F3EEE3' }}
                      className="w-12 h-12 flex items-center justify-center group-hover:bg-[#7F1D1D] transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================== */}
          {/* NEW SECTION 2: TECH STACK CATEGORIES                          */}
          {/* ============================================================== */}
          <section id="stack" className="mt-48 pt-20 border-t-2 border-[#111111]/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase opacity-40">Section // 02</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-2">
                  Tech <span style={{ color: '#7F1D1D' }}>Stack</span>
                </h2>
              </div>
              <p className="max-w-md text-sm opacity-70 leading-relaxed uppercase font-mono">
                [ Modern libraries, frameworks, and architecture tools utilized in production ]
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((cat, idx) => (
                <div 
                  key={cat.category}
                  style={{ backgroundColor: '#111111', color: '#F3EEE3' }}
                  className="p-8 flex flex-col justify-between rounded-sm h-[360px] group hover:border-l-4 hover:border-[#7F1D1D] transition-all"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      {cat.icon}
                      <span className="text-[10px] font-mono opacity-30">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-6">
                      {cat.category}
                    </h3>
                    <ul className="space-y-3">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="text-sm opacity-80 flex items-center gap-2 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D]" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest pt-6 border-t border-[#F3EEE3]/10">
                    Verified Production Ready
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================== */}
          {/* CTA & CONTACT SECTION                                         */}
          {/* ============================================================== */}
          <section 
            id="contact"
            style={{ 
              transform: loading ? 'scale(3)' : 'scale(1)',
              opacity: loading ? 0 : 1
            }}
            className="mt-56 border-t-[12px] border-[#111111] pt-24 transition-all duration-[900ms] ease-out delay-[600ms]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase opacity-40">Section // 03</span>
                <h3 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.7] mt-2">
                  Connect<br/>Sequence
                </h3>
              </div>
              <button 
                style={{ backgroundColor: '#7F1D1D', color: '#F3EEE3' }} 
                className="px-20 py-10 text-2xl font-black uppercase tracking-widest hover:brightness-125 transition-all cursor-pointer shadow-2xl"
              >
                Inquire
              </button>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="w-full px-6 sm:px-12 md:px-16 py-12 border-t border-[#111111]/10 flex flex-col sm:flex-row justify-between items-center text-xs opacity-60 font-mono">
          <p>© {new Date().getFullYear()} — CTRL + 6 / ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 sm:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-[#7F1D1D] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#7F1D1D] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#7F1D1D] transition-colors">Email</a>
          </div>
        </footer>

      </div>
    </>
  );
}