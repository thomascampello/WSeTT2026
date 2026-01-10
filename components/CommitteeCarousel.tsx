
import React, { useState } from 'react';
import { EVENT_COMMITTEE } from '../constants';
import { CommitteeMember } from '../types';
import Modal from './Modal';

/**
 * TeamSlider component for displaying a list of team members in a compact grid layout.
 * Used for coordination groups like CE-B4.
 */
export const TeamSlider: React.FC<{
  title: string;
  members: CommitteeMember[];
  titleColorClass?: string;
}> = ({ title, members, titleColorClass = "text-gray-900" }) => {
  return (
    <div className="w-full">
      <h3 className={`text-xl font-bold mb-6 ${titleColorClass}`}>{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 font-bold text-sm border border-gray-200">
                    {member.initials || member.name.substring(0, 2).toUpperCase()}
                  </div>
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-gray-900 text-sm truncate">{member.name}</p>
              <p className="text-[10px] text-cigre-green font-bold uppercase tracking-wider truncate">{member.role}</p>
              {member.bio && <p className="text-[10px] text-gray-400 truncate mt-1">{member.bio}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommitteeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="comite" className="py-8 md:py-12 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-start gap-4 md:gap-8">
          <div className="text-left">
            {/* Pílula */}
            <div className="inline-block px-3 py-1 mb-2 text-[10px] font-semibold tracking-wider text-cigre-green uppercase bg-green-50 rounded-full border border-green-100">
                Comitê Organizador
            </div>
            
            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Conheça o Comitê Organizador do Evento
            </h2>
          </div>

          {/* Botão ao lado no desktop */}
          <div className="shrink-0 mt-2 md:mt-6">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center px-5 py-3 overflow-hidden text-white bg-cigre-green rounded-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg focus:outline-none"
            >
                <span className="font-bold text-sm tracking-wide">Ver Membros</span>
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
          </div>
        </div>

        {/* Modal com a lista */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Membros do Comitê Organizador"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVENT_COMMITTEE.map((member) => (
                    <div key={member.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-start gap-1">
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-10 h-10 rounded-full bg-cigre-green text-white flex items-center justify-center font-bold text-xs shrink-0">
                                {member.initials}
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="font-bold text-gray-900 text-sm leading-tight truncate">{member.name}</h4>
                            </div>
                        </div>
                        <div className="mt-2 w-full pt-2 border-t border-gray-200">
                             <p className="text-xs text-gray-600 font-medium mb-1">{member.bio}</p>
                             {member.image && (
                                <a href={`mailto:${member.image}`} className="text-xs text-cigre-accent hover:underline flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    {member.image}
                                </a>
                             )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg text-center text-xs text-cigre-green font-medium">
                Esta equipe trabalha voluntariamente para garantir o sucesso técnico e operacional do evento.
            </div>
        </Modal>
      </div>
    </section>
  );
};

export default CommitteeSection;
