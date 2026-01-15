
import React from 'react';

const services = [
  {
    title: "Neuro-Formación",
    desc: "Talleres profundos sobre el funcionamiento del cerebro y las emociones bajo la lupa bíblica.",
    icon: "fa-graduation-cap"
  },
  {
    title: "Gobierno Emocional",
    desc: "Acompañamiento especializado para padres y parejas en la gestión del conflicto.",
    icon: "fa-crown"
  },
  {
    title: "Escuela de Padres",
    desc: "Basado en los principios de Goleman aplicados a la crianza con propósito eterno.",
    icon: "fa-users-line"
  }
];

const Services: React.FC = () => {
  return (
    <section id="programa" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nuestros Pilares</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Áreas de <span className="text-emerald-500 italic">Transformación</span></h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-950 p-12 rounded-[2rem] hover:-translate-y-3 transition-all duration-500 border border-white/5 hover:border-emerald-500/30 group shadow-2xl">
              <div className="w-20 h-20 bg-emerald-600/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-all duration-500">
                <i className={`fas ${s.icon} text-4xl text-emerald-500 group-hover:text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">{s.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-light">{s.desc}</p>
              <div className="h-0.5 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 mb-6"></div>
              <a href="#" className="text-emerald-400 font-bold hover:text-white transition-colors flex items-center gap-3 text-sm tracking-widest uppercase">
                Ver Detalles <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
