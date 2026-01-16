
import React, { useState } from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from '../constants';
import { ScheduleItem } from '../types';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  const day1Schedule: ScheduleItem[] = SCHEDULE_DAY_1;

  const renderRow = (item: ScheduleItem, index: number) => {
    let rowClass = "border-b border-gray-100 hover:bg-gray-50 transition-colors";
    let timeClass = "font-mono text-xs sm:text-base font-semibold text-cigre-green";
    let activityClass = "font-medium text-sm sm:text-base text-gray-900";
    
    if (item.type === 'break' || item.type === 'lunch') {
      rowClass = "bg-amber-50/60 border-b border-amber-100";
      timeClass = "font-mono text-xs sm:text-base font-bold text-amber-700";
      activityClass = "font-bold text-sm sm:text-base text-amber-900 flex items-center gap-2";
    }

    return (
      <tr key={index} className={rowClass}>
        <td className="py-4 px-3 sm:px-4 whitespace-nowrap">
           <div className={timeClass}>{item.time}</div>
        </td>
        <td className="py-4 px-3 sm:px-4">
           <div className={activityClass}>
             {item.activity}
           </div>
        </td>
        <td className="py-4 px-3 sm:px-4 text-gray-700 text-sm sm:text-base font-medium">
           {item.speaker}
        </td>
      </tr>
    );
  };

  return (
    <section id="programacao" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Programação Técnica</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira a grade do evento. A programação está sujeita a alterações.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-inner">
                <button
                    onClick={() => setActiveTab('day1')}
                    className={`px-4 sm:px-8 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeTab === 'day1' 
                        ? 'bg-white text-cigre-green shadow-md transform scale-105' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Tutorial (24/03)
                </button>
                <button
                    onClick={() => setActiveTab('day2')}
                    className={`px-4 sm:px-8 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeTab === 'day2' 
                        ? 'bg-white text-cigre-green shadow-md transform scale-105' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Workshop (25/03)
                </button>
            </div>
        </div>

        {/* Content Area */}
        {activeTab === 'day1' ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-0">
                        <thead>
                            <tr className="bg-cigre-green text-white">
                                <th className="py-4 px-3 sm:px-4 font-bold text-xs uppercase tracking-wider w-32 sm:w-40">Horário</th>
                                <th className="py-4 px-3 sm:px-4 font-bold text-xs uppercase tracking-wider">Atividade</th>
                                <th className="py-4 px-3 sm:px-4 font-bold text-xs uppercase tracking-wider w-1/4 sm:w-1/3">Palestrante / Responsável</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {day1Schedule.map(renderRow)}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 italic">
                    * Programação preliminar, sujeita a alterações sem aviso prévio. Utilize o scroll lateral se necessário em dispositivos pequenos.
                </div>
            </div>
        ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center animate-fade-in relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cigre-green/5 rounded-full blur-3xl"></div>
                 <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cigre-accent/5 rounded-full blur-3xl"></div>
                 
                 <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center p-4 bg-cigre-green/10 text-cigre-green rounded-full mb-6 ring-4 ring-cigre-green/5">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Workshop
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        O segundo dia será palco de apresentações que conectarão a teoria à prática, trazendo o que há de mais moderno no setor elétrico mundial.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
                        {/* Card Hitachi Energy & GE Vernova */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-700 mt-1 shadow-sm group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">Destaque Hitachi Energy & GE Vernova</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Palestras exclusivas confirmadas de nossas patrocinadoras Ouro, onde especialistas apresentarão inovações críticas e o futuro das tecnologias HVDC e FACTS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card Outros Patrocinadores */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                             <div className="flex items-start gap-4">
                                <div className="bg-cigre-accent/10 p-3 rounded-xl text-cigre-accent mt-1 shadow-sm group-hover:bg-cigre-accent group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">Grandes Players do Setor</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Empresas líderes compartilharão cases reais, desafios superados e as tendências que estão transformando o mercado de energia através da eletrônica de potência.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="inline-block bg-cigre-green/5 border border-cigre-green/20 rounded-full px-8 py-3">
                         <div className="flex items-center gap-2">
                             <span className="relative flex h-3 w-3">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cigre-green opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-3 w-3 bg-cigre-green"></span>
                             </span>
                             <span className="text-cigre-green font-bold text-sm tracking-wide">
                                Mais informações e programação detalhada em breve.
                             </span>
                         </div>
                    </div>
                 </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Program;
