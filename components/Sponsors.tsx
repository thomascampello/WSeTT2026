
import React, { useState } from 'react';
import Modal from './Modal';
import { SPONSORSHIP_DATA } from '../constants';

// --- Subcomponentes Estáticos (Lista Principal e CTA) ---

export const SponsorsList: React.FC = () => {
    const goldSponsors = [
        { id: 1, src: '/Imgs/Hitachi_Global_Logo_Black_PANTONE.png', alt: 'Hitachi Energy' },
        { id: 2, src: '/Imgs/GE_Vernova_Standard_RGB_Evergreen.ai.png', alt: 'GE Vernova' }
    ]; 

    return (
        <section id="patrocinio" className="py-24 bg-gray-50 scroll-mt-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-cigre-green/10 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-cigre-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">Patrocinadores</h2>
                </div>
                
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[2px] w-16 bg-yellow-400"></div>
                        <h3 className="text-2xl font-bold text-yellow-600 uppercase tracking-[0.25em]">
                            Patrocínio Ouro
                        </h3>
                        <div className="h-[2px] w-16 bg-yellow-400"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {goldSponsors.map((sponsor) => (
                            <div key={`gold-${sponsor.id}`} className="group relative w-full max-w-md">
                                <div className="bg-white rounded-2xl p-10 flex items-center justify-center h-64 w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-yellow-400/20">
                                    <img 
                                        src={sponsor.src} 
                                        alt={sponsor.alt} 
                                        className="h-auto w-auto max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

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

const GROUPS: SponsorGroup[] = [
    {
      id: 'gold',
      label: 'Patrocínio Ouro',
      badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      logos: [
        { id: 1, src: '/Imgs/Hitachi_Global_Logo_Black_PANTONE.png', alt: 'Hitachi Energy' },
        { id: 2, src: '/Imgs/GE_Vernova_Standard_RGB_Evergreen.ai.png', alt: 'GE Vernova' }
      ],
      imgClass: '' 
    }
];

const MarqueeContent: React.FC = () => (
    <div className="flex items-center gap-12 px-6">
      {GROUPS.map((group) => (
        <div key={group.id} className="flex items-center gap-6 shrink-0">
          <span className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border whitespace-nowrap shadow-sm ${group.badgeColor}`}>
            {group.label}
          </span>
          <div className="flex items-center gap-8">
            {group.logos.map((logo, idx) => (
               <div key={`${group.id}-${logo.id}-${idx}`} className="flex items-center justify-center shrink-0 w-24 h-10 md:w-32 md:h-12">
                   <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain" />
               </div>
            ))}
          </div>
          <div className="w-px h-8 bg-gray-200 ml-4"></div>
        </div>
      ))}
    </div>
);

const Sponsors: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-infinite {
          display: flex;
          animation: marquee-infinite 25s linear infinite;
          width: max-content;
        }
        .group-marquee:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] h-20 sm:h-24 flex items-center group-marquee overflow-hidden">
        
        <div className="flex items-center bg-white h-full px-4 sm:px-6 border-r border-gray-100 shrink-0 z-[110] shadow-[10px_0_15px_-5px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Nossos</span>
                <span className="text-xs sm:text-sm font-bold text-cigre-green uppercase tracking-wider whitespace-nowrap">Patrocinadores</span>
            </div>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <div className="animate-marquee-infinite">
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
