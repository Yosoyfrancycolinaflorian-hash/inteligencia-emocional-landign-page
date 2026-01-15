
import React from 'react';

const SectionInfo: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
              <img 
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=1200" 
                alt="Happy Family Connection"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border-emerald-500/30">
                <p className="text-lg italic text-slate-100">"El autoconocimiento, la autorregulación y la empatía son los pilares que permiten a una familia gobernar su destino."</p>
                <p className="text-xs mt-4 font-bold text-emerald-400 tracking-widest uppercase">— Basado en Daniel Goleman</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">La Neuropsicología del <span className="text-emerald-500 italic">Gobierno Familiar</span></h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed">
                No se trata solo de controlar emociones, sino de entender el diseño divino de nuestro cerebro para vivir en armonía. La <span className="text-white font-semibold">Dra. Janet Ramírez</span> integra la ciencia más actual con principios bíblicos inamovibles.
              </p>
            </div>
            
            <div className="grid gap-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-500/10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-brain text-emerald-500 text-2xl group-hover:text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">Conciencia Emocional</h4>
                  <p className="text-slate-400 leading-relaxed">Identificamos los disparadores neuronales de la ira y el miedo para transformarlos en sabiduría y dominio propio.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-500/10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-shield-heart text-emerald-500 text-2xl group-hover:text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">Estabilidad en la Crisis</h4>
                  <p className="text-slate-400 leading-relaxed">Metodologías para mantener la calma bajo presión, activando la corteza prefrontal a través de la fe y la ciencia.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-500/10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors">
                  <i className="fas fa-house-chimney-window text-emerald-500 text-2xl group-hover:text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">Legado Generacional</h4>
                  <p className="text-slate-400 leading-relaxed">Construyendo hogares saludables en Valledupar que reflejen el orden y el amor de Dios en cada interacción.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
