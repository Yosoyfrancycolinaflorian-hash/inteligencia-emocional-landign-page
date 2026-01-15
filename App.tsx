
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionInfo from './components/SectionInfo';
import HelpSection from './components/HelpSection';
import ProgramDetails from './components/ProgramDetails';
import Services from './components/Services';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Navbar />
      
      <Hero />
      
      {/* Botón de ayuda rápida post-hero */}
      <HelpSection />

      <SectionInfo />
      
      {/* Transformation Visual Section */}
      <section className="relative h-screen flex flex-col md:flex-row overflow-hidden border-y border-white/5">
        <div className="flex-1 relative group overflow-hidden border-r border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200" 
            alt="Thunder/Storm representing Anger"
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-1000">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-red-500/20 text-red-500 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-4">La Reacción</span>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">El Secuestro de la Amígdala</h3>
              <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">Entendiendo la ira impulsiva desde la neurociencia de Daniel Goleman.</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
            alt="Green peaceful forest/mountains"
            className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-[1.5s]"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-1000">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-4">La Respuesta</span>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">El Gobierno de la Paz</h3>
              <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">Dominio propio cimentado en principios bíblicos y estabilidad emocional.</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramDetails />

      <Services />
      
      {/* Testimonial/Quote Section */}
      <section className="relative h-screen flex items-center justify-center parallax" 
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000')` }}>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl">
            <i className="fas fa-quote-left text-white text-3xl"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 italic leading-tight text-white">
            "Educar la mente sin educar el corazón no es educación en absoluto."
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-emerald-400 font-bold tracking-widest uppercase mb-4">Dra. Janet Ramírez</p>
          <p className="text-slate-400 text-sm tracking-[0.2em] uppercase">Neuropsicóloga · Valledupar</p>
        </div>
      </section>

      <Footer />
      <ChatBot />
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/573117039600" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[110] bg-[#25D366] text-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 hover:-rotate-3 transition-all flex items-center justify-center border-2 border-slate-950"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;
