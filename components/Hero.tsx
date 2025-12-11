
import React from 'react';
import { EVENT_DATE, EVENT_LOCATION } from '../constants';

const Hero: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('pt-BR');

  return (
    <div id="home" className="relative bg-cigre-green h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
         </svg>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-cigre-green/90 z-10"></div>
      
      {/* Background Image */}
      <img 
        src="https://picsum.photos/1920/1080?grayscale" 
        alt="Background Tecnologia" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />

      {/* Last Updated Tag */}
      <div className="absolute top-24 right-4 md:right-8 z-20">
        <span className="text-[10px] md:text-xs text-white/50 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
            Site atualizado em: {lastUpdated}
        </span>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        
        {/* Aviso de Vagas Limitadas */}
        <div className="mb-8 flex justify-center">
            <div className="animate-pulse bg-red-600 text-white px-6 py-2 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.7)] flex items-center gap-2 border border-red-400/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-bold tracking-wide uppercase text-sm">Vagas Limitadas</span>
            </div>
        </div>

        <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
          <span className="text-white text-sm font-medium tracking-widest uppercase">Workshop e Tutorial</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          HVDC e FACTS como Tecnologias Integradoras de Energias Renováveis
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90 mb-10 text-lg">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-cigre-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>{EVENT_DATE}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 bg-cigre-accent rounded-full"></div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-cigre-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>{EVENT_LOCATION}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#inscricao" 
            className="px-8 py-4 bg-cigre-accent text-white font-bold rounded shadow-lg hover:bg-cyan-600 transition-all transform hover:-translate-y-1"
          >
            Garantir Inscrição
          </a>
          <a 
            href="#sobre" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-cigre-green transition-all"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
