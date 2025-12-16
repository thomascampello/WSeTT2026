
import React, { useState } from 'react';
import Modal from './Modal';
import { SPONSORSHIP_DATA } from '../constants';

// --- Subcomponentes Estáticos (Lista Principal e CTA) permanecem iguais ---

// Subcomponente para a Lista Estática de Logos
export const SponsorsList: React.FC = () => {
    // Reduzido para apenas 1 patrocinador Ouro e comentados os outros conforme solicitado
    const goldSponsors = [1]; 
    // const silverSponsors = [1, 2, 3];
    // const bronzeSponsors = [1, 2];

    return (
        <section id="patrocinio" className="py-24 bg-gray-50 scroll-mt-24 relative overflow-hidden">
             {/* Background Decorativo Suave */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-cigre-green/10 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-cigre-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">Patrocinadores</h2>
                </div>
                
                {/* Categoria OURO */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[2px] w-16 bg-yellow-400"></div>
                        <h3 className="text-2xl font-bold text-yellow-600 uppercase tracking-[0.25em]">
                            Patrocínio Ouro
                        </h3>
                        <div className="h-[2px] w-16 bg-yellow-400"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {goldSponsors.map((id) => (
                            <div key={`gold-${id}`} className="group relative w-full max-w-md">
                                <div className="bg-white rounded-2xl p-10 flex items-center justify-center h-64 w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-yellow-400/20">
                                    <img 
                                        src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                        alt="Hitachi Energy" 
                                        className="h-auto w-auto max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categoria PRATA (Comentada) */}
                {/*
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-gray-400"></div>
                        <h3 className="text-xl font-bold text-gray-500 uppercase tracking-[0.2em]">
                            Patrocínio Prata
                        </h3>
                        <div className="h-[1px] w-12 bg-gray-400"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {silverSponsors.map((id) => (
                            <div key={`silver-${id}`} className="group relative w-full max-w-sm">
                                <div className="bg-white rounded-xl p-8 flex items-center justify-center h-48 w-full shadow hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200">
                                    <img 
                                        src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                        alt="Patrocinador Prata" 
                                        className="h-auto w-auto max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                */}

                {/* Categoria BRONZE (Comentada) */}
                {/*
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-8 bg-orange-300"></div>
                        <h3 className="text-lg font-bold text-orange-700/70 uppercase tracking-[0.15em]">
                            Patrocínio Bronze
                        </h3>
                        <div className="h-[1px] w-8 bg-orange-300"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {bronzeSponsors.map((id) => (
                            <div key={`bronze-${id}`} className="group relative w-full max-w-xs">
                                <div className="bg-white rounded-lg p-6 flex items-center justify-center h-36 w-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    <img 
                                        src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                        alt="Patrocinador Bronze" 
                                        className="h-auto w-auto max-h-14 max-w-full object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                */}

                {/* Categoria ORGANIZAÇÃO */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-gray-200"></div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                            Organização
                        </h3>
                        <div className="h-[1px] w-12 bg-gray-200"></div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="group relative w-full max-w-[200px]">
                            <div className="flex items-center justify-center h-24 w-full transition-all duration-300">
                                <img 
                                    src="/Imgs/cigre_brazil_pos_rgb.png" 
                                    alt="CIGRE Brasil" 
                                    className="h-auto w-auto max-h-16 max-w-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Subcomponente para a CTA de Patrocínio
export const SponsorshipCTA: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="seja-um-patrocinador" className="bg-cigre-green py-8 scroll-mt-24 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                            Sua marca em destaque no setor elétrico
                        </h3>
                        <p className="text-emerald-100 text-sm leading-snug max-w-2xl">
                            Conecte sua empresa aos principais especialistas e decisores.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <button 
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-white text-cigre-green rounded-full font-bold shadow-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wide"
                        >
                            Quero ser um patrocinador
                        </button>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Cotas de Patrocínio">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                            <tr className="bg-cigre-green text-white">
                                {SPONSORSHIP_DATA.columns.map((col, idx) => (
                                    <th key={idx} className="px-4 py-3 text-center font-bold uppercase tracking-wider">
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                            {SPONSORSHIP_DATA.rows.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-3 font-medium bg-gray-50/50 text-center">{row.label}</td>
                                    <td className="px-4 py-3 text-center">{row.gold}</td>
                                    <td className="px-4 py-3 text-center">{row.silver}</td>
                                    <td className="px-4 py-3 text-center">{row.bronze}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
                    <h4 className="text-lg font-bold text-cigre-green mb-4">Interessado? Entre em contato conosco:</h4>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-700 font-medium">
                        <a href="mailto:eventos@cigre.org.br" className="flex items-center justify-center gap-2 hover:text-cigre-green transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            eventos@cigre.org.br
                        </a>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <a href="mailto:thomas.campello@cefet-rj.br" className="flex items-center justify-center gap-2 hover:text-cigre-green transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                            thomas.campello@cefet-rj.br
                        </a>
                    </div>
                </div>
            </Modal>
        </section>
    );
}

// --- BARRA FIXA (MARQUEE) ---

interface SponsorGroup {
    id: string;
    label: string;
    badgeColor: string;
    logos: { id: number; src: string; alt: string }[];
    imgClass: string;
}

const Sponsors: React.FC = () => {
  // Configuração dos Grupos
  const groups: SponsorGroup[] = [
    {
      id: 'gold',
      label: 'Patrocínio Ouro',
      badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      logos: [1].map(id => ({ id, src: '/Imgs/Hitachi_Global_Logo_Black_PANTONE.png', alt: 'Hitachi Energy' })), // Apenas 1 logo
      imgClass: '' // Classe específica removida aqui pois será controlada pelo container
    },
    /*
    {
      id: 'silver',
      label: 'Patrocínio Prata',
      badgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      logos: [1, 2, 3].map(id => ({ id, src: '/Imgs/Hitachi_Global_Logo_Black_PANTONE.png', alt: 'Hitachi Energy' })),
      imgClass: 'opacity-80'
    },
    {
      id: 'bronze',
      label: 'Patrocínio Bronze',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      logos: [1, 2].map(id => ({ id, src: '/Imgs/Hitachi_Global_Logo_Black_PANTONE.png', alt: 'Hitachi Energy' })),
      imgClass: 'opacity-70'
    }
    */
  ];

  // Componente que renderiza a sequência completa (Inline)
  // Utiliza flex-shrink-0 para garantir que o conteúdo não seja comprimido
  // min-w-full garante que o conteúdo ocupe pelo menos a largura da tela para o loop
  const MarqueeContent = () => (
    <div className="flex items-center justify-around min-w-full flex-shrink-0 gap-8 px-8">
      {groups.map((group) => (
        <div key={group.id} className="flex items-center gap-4 md:gap-6 shrink-0">
          {/* Badge do Grupo (viaja junto com os logos) */}
          <span className={`
            px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border whitespace-nowrap shadow-sm
            ${group.badgeColor}
          `}>
            {group.label}
          </span>
          
          {/* Logos do Grupo */}
          <div className="flex items-center gap-4">
            {group.logos.map((logo, idx) => (
               <div 
                 key={`${group.id}-${logo.id}-${idx}`}
                 className="flex items-center justify-center shrink-0 w-24 h-10 md:w-32 md:h-12"
               >
                   <img 
                     src={logo.src}
                     alt={logo.alt}
                     className={`max-w-full max-h-full object-contain ${group.imgClass}`}
                   />
               </div>
            ))}
          </div>
          
          {/* Divisor Visual (opcional, para separar tiers) */}
          <div className="w-px h-8 bg-gray-200 hidden md:block ml-2"></div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 30s linear infinite;
          width: fit-content; /* Ensure container fits the content width naturally */
          min-width: 200%; /* Ensure it's wide enough for the 50% shift */
        }
        /* Pausa a animação ao passar o mouse */
        .group-marquee:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* BARRA FIXA DE PATROCINADORES */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] h-20 sm:h-24 flex items-center group-marquee">
        
        {/* Label Fixa na Esquerda "NOSSOS PATROCINADORES" */}
        <div className="flex items-center bg-white h-full px-4 sm:px-6 border-r border-gray-100 shrink-0 z-50 shadow-[5px_0_15px_-5px_rgba(0,0,0,0.05)] relative">
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Nossos</span>
                <span className="text-xs sm:text-sm font-bold text-cigre-green uppercase tracking-wider whitespace-nowrap">Patrocinadores</span>
            </div>
            {/* Fade right edge of the label box */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-transparent to-white/0"></div>
        </div>
        
        {/* Container do Scroll Infinito */}
        <div 
            className="flex-1 overflow-hidden relative h-full flex items-center"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)'
            }}
        >
            <div className="flex animate-marquee-infinite">
                {/* Renderizamos o conteúdo duas vezes para criar o loop infinito perfeito sem gaps */}
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
