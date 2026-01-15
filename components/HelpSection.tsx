
import React from 'react';

const HelpSection: React.FC = () => {
  const helpItems = [
    {
      icon: "fa-globe",
      title: "Tu Propio Dominio",
      desc: "Esta página está lista para usar nombres como familiasquegobiernan.com o drajanetramirez.co"
    },
    {
      icon: "fa-rocket",
      title: "Despliegue Rápido",
      desc: "Configurada para Vercel o Netlify con SSL (candado de seguridad) gratuito incluido."
    },
    {
      icon: "fa-envelope-open-text",
      title: "Correo Corporativo",
      desc: "Podemos configurar info@familiasquegobiernan.com para mayor profesionalismo."
    },
    {
      icon: "fa-shield-halved",
      title: "Protección de Datos",
      desc: "Cumplimos con estándares de seguridad para la información de tus pacientes en Valledupar."
    }
  ];

  return (
    <section id="ayuda-inicio" className="py-24 bg-slate-950 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Centro de Ayuda y Despliegue</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white italic">Impulsa tu <span className="text-emerald-500">Presencia Digital</span></h2>
            <p className="text-slate-400 mt-4">Si estás lista para lanzar esta web con tu propio dominio, aquí tienes los pasos clave.</p>
          </div>
          <button onClick={() => window.open('https://wa.me/573117039600')} className="bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white px-8 py-4 rounded-2xl transition-all border border-emerald-500/30 font-bold flex items-center gap-3">
            <i className="fas fa-hand-pointer"></i> Solicitar Ayuda Técnica
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpItems.map((item, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all group cursor-default">
              <i className={`fas ${item.icon} text-3xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform`}></i>
              <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
