
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2 space-y-8 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
              <i className="fas fa-hand-holding-heart text-white text-xl"></i>
            </div>
            <div>
               <span className="text-xl font-bold uppercase tracking-tight block">Janet <span className="text-emerald-500">Ramírez</span></span>
               <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase">Familias Que Gobiernan</span>
            </div>
          </div>
          <p className="text-slate-400 max-w-md text-lg font-light leading-relaxed">
            Página optimizada para <strong>familiasquegobiernan.com</strong>. Unificando neuropsicología y fe desde Valledupar para el mundo.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all border border-white/10"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all border border-white/10"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all border border-white/10"><i className="fab fa-whatsapp text-xl"></i></a>
          </div>
        </div>
        
        <div className="text-left">
          <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-emerald-500">Sitio Web</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><a href="#ayuda-inicio" className="hover:text-emerald-400 transition-colors">Ayuda de Dominio</a></li>
            <li><a href="#programa" className="hover:text-emerald-400 transition-colors">Contenido del Programa</a></li>
            <li><a href="#metodologia" className="hover:text-emerald-400 transition-colors">Metodología Bíblica</a></li>
            <li><a href="https://wa.me/573117039600" className="hover:text-emerald-400 transition-colors">Soporte Técnico</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-emerald-500">Contacto Directo</h4>
          <ul className="space-y-6 text-slate-400 text-sm">
            <li className="flex gap-4">
              <i className="fas fa-phone text-emerald-500 mt-1"></i> 
              <span className="leading-tight">+57 311 703 9600</span>
            </li>
            <li className="flex gap-4">
              <i className="fas fa-envelope text-emerald-500 mt-1"></i> 
              <span className="leading-tight break-all">familiasquegobiernan@gmail.com</span>
            </li>
            <li className="flex gap-4">
              <i className="fas fa-location-dot text-emerald-500 mt-1"></i> 
              <span className="leading-tight">Valledupar, Cesar, Colombia</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] tracking-[0.2em] uppercase font-bold">
        <p>© 2024 JANET RAMÍREZ · GOBIERNO EMOCIONAL</p>
        <div className="flex gap-8">
          <p className="text-emerald-500/50 italic">Listo para despliegue en dominio propio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
