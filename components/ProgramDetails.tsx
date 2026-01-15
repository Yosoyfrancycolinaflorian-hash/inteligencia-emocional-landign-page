
import React from 'react';

const ProgramDetails: React.FC = () => {
  const modules = [
    { num: "01", title: "El Cerebro Emocional", topics: ["Amígdala vs Prefrontal", "Neurobiología del pecado y la virtud"] },
    { num: "02", title: "Dominio Propio", topics: ["Técnicas de Daniel Goleman", "Fruto del Espíritu en la crisis"] },
    { num: "03", title: "Empatía y Conexión", topics: ["Neuronas espejo", "El amor como vínculo perfecto"] },
    { num: "04", title: "Gobierno del Hogar", topics: ["Liderazgo familiar", "Comunicación asertiva en Valledupar"] }
  ];

  return (
    <section id="detalle-programa" className="py-24 bg-emerald-950/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Contenido del <span className="text-emerald-500">Programa</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Un recorrido científico y espiritual diseñado para transformar tu interior y tu entorno familiar.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {modules.map((mod, i) => (
            <div key={i} className="flex gap-8 p-10 bg-slate-900/50 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/20 transition-all group">
              <span className="text-6xl font-bold text-emerald-900 group-hover:text-emerald-500 transition-colors duration-500">{mod.num}</span>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{mod.title}</h3>
                <ul className="space-y-2">
                  {mod.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400">
                      <i className="fas fa-check-circle text-emerald-500 text-xs"></i> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-12 rounded-[3rem] text-center border-emerald-500/20">
          <h3 className="text-3xl font-bold mb-6">¿Listo para gobernar tus emociones?</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Únete a cientos de familias que ya han transformado su hogar en Valledupar bajo la dirección de la Dra. Janet Ramírez.</p>
          <button onClick={() => window.open('https://wa.me/573117039600')} className="bg-emerald-600 hover:bg-emerald-500 text-white px-16 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-500/20">
            Iniciar Inscripción
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
