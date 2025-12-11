
import React, { useState } from 'react';
import Modal from './Modal';
import { MOTIVATION_TEXT, COMMITTEE_TEXT, CEB4_COORDINATION } from '../constants';
import { TeamSlider } from './CommitteeCarousel';

const TextModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; content: React.ReactNode }> = ({ isOpen, onClose, title, content }) => (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
        {content}
    </Modal>
);

export const AboutEvent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalBody = (
    <div className="prose prose-lg text-gray-700 space-y-4 text-justify leading-relaxed">
        {MOTIVATION_TEXT.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </div>
  );

  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cigre-green uppercase bg-green-50 rounded-full">
                    Contexto
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Sobre o Evento
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-3">
                    O desenvolvimento de aplicações de transmissão de energia elétrica em HVDC em níveis de tensão a partir de ±600 kV foi realizado no Brasil com base em extensivos estudos de planejamento e de viabilidade técnica e econômica.
                </p>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-cigre-green rounded-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                >
                    <span className="font-bold tracking-wide">Saiba Mais</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
            <div className="order-2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cigre-green to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                     <img 
                        src="https://picsum.photos/800/600?transmission" 
                        alt="Torre de Transmissão HVDC" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
      </div>
      <TextModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Sobre o Evento" content={modalBody} />
    </section>
  );
};

export const AboutB4: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalBody = (
        <div>
            <div className="prose prose-lg text-gray-700 space-y-4 text-justify leading-relaxed mb-8">
                {COMMITTEE_TEXT.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="mt-8 border-t pt-8">
                <TeamSlider 
                    title="Membros do CE-B4" 
                    members={CEB4_COORDINATION} 
                    titleColorClass="text-cigre-accent" 
                />
            </div>
        </div>
    );

    return (
        <section id="conheca-comite" className="py-24 bg-white scroll-mt-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative group flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-cigre-accent to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500 transform scale-75"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-[280px] lg:max-w-[320px]">
                            <img 
                                src="/Imgs/b4_capa.jpg"
                                alt="Capa Brochure CIGRE B4" 
                                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cigre-accent uppercase bg-cyan-50 rounded-full">
                            Organização
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Conheça o Comitê de Estudos B4
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-3">
                            O CIGRE-Brasil é uma sociedade civil sem fins lucrativos que promove o desenvolvimento técnico no Brasil. O CE B4 é responsável por tratar de assuntos ligados a HVDC e Eletrônica de Potência.
                        </p>
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-cigre-accent rounded-lg transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                        >
                            <span className="font-bold tracking-wide">Saiba Mais</span>
                            <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <TextModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Coordenação CE-B4" content={modalBody} />
        </section>
    );
};
