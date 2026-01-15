
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hola, bienvenido a Familias Que Gobiernan. Soy el asistente de la Dra. Janet Ramírez. ¿En qué puedo ayudarte hoy respecto a la Inteligencia Emocional y nuestras bases bíblicas?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: 'Eres el asistente virtual de la Dra. Janet Ramírez, neuropsicóloga en Valledupar. El programa se llama "Familias Que Gobiernan" y trata sobre Inteligencia Emocional con bases bíblicas e inspiración en Daniel Goleman. Tu tono debe ser empático, sabio y profesional. Si detectas crisis remite a WhatsApp +573117039600 o al email familiasquegobiernan@gmail.com.',
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Lo siento, he tenido un inconveniente técnico. ¿Deseas contactar a la Dra. directamente?' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, no puedo procesar tu solicitud ahora. Por favor usa el botón de WhatsApp.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[110]">
      {isOpen ? (
        <div className="bg-slate-950 w-[350px] md:w-[420px] h-[600px] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col border border-emerald-500/20 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="bg-emerald-700 p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-hand-holding-heart text-white"></i>
              </div>
              <div>
                <p className="font-bold text-white tracking-tight">Janet AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-emerald-100 uppercase font-bold tracking-widest">En Línea</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform"><i className="fas fa-times text-xl"></i></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-5 bg-slate-950">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-900 text-slate-300 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 p-4 rounded-2xl border border-white/5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-900/50 border-t border-white/10 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="¿Cómo puedo ayudarte hoy?"
              className="flex-1 bg-slate-950 border border-white/10 rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-white transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all shadow-lg active:scale-90"
            >
              <i className="fas fa-paper-plane text-white text-sm"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white w-20 h-20 rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.5)] flex items-center justify-center hover:scale-110 transition-transform border-4 border-slate-950"
        >
          <i className="fas fa-comment-dots text-3xl"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
