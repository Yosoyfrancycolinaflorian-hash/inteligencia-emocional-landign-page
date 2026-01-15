
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-emerald-950/90 py-2 backdrop-blur-lg shadow-xl border-b border-emerald-500/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <i className="fas fa-hand-holding-heart text-white text-xl"></i>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase">Familias Que Gobiernan</span>
            <span className="text-xl font-bold tracking-tighter uppercase">Janet <span className="text-emerald-500">Ramírez</span></span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase items-center">
          <a href="#" className="hover:text-emerald-400 transition-colors">Inicio</a>
          <a href="#programa" className="hover:text-emerald-400 transition-colors">El Programa</a>
          <a href="#metodologia" className="hover:text-emerald-400 transition-colors">Metodología</a>
          <a href="https://wa.me/573117039600" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30">Inscribirme Ahora</a>
        </div>

        <div className="md:hidden">
          <i className="fas fa-bars-staggered text-2xl text-emerald-400"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
