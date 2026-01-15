
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000" 
          alt="Family Unity and Connection"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_12s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-emerald-900/10"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl fade-in">
        <span className="text-emerald-400 font-bold tracking-[0.5em] uppercase mb-6 block text-sm">Formación Integral Familias Que Gobiernan</span>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1]">
          Inteligencia <span className="text-emerald-500 italic">Emocional</span><br />
          <span className="text-slate-100 font-light">con Bases Bíblicas</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Inspirado en los pilares de <span className="text-white font-semibold">Daniel Goleman</span> y cimentado en la Palabra. 
          Liderado por la <span className="text-emerald-400 font-semibold">Dra. Janet Ramírez</span>, neuropsicóloga.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => window.open('https://wa.me/573117039600')} className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3">
            <i className="fas fa-calendar-check"></i> Apartar Mi Cupo
          </button>
          <button onClick={() => scrollTo('detalle-programa')} className="glass px-12 py-5 rounded-full text-lg font-bold transition-all hover:bg-white/10 border border-white/20">
            Ver Plan de Estudios
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <i className="fas fa-mouse text-3xl text-emerald-500"></i>
      </div>
    </section>
  );
};

export default Hero;
