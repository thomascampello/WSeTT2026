
import React from 'react';
import { SCHEDULE_DAY_1 } from '../constants';
import { ScheduleItem } from '../types';

const Program: React.FC = () => {
  const day1Schedule: ScheduleItem[] = SCHEDULE_DAY_1;

  const renderRow = (item: ScheduleItem, index: number) => {
    let rowClass = "border-b border-gray-100 hover:bg-gray-50 transition-colors";
    let timeClass = "font-mono text-xs font-bold text-cigre-green";
    let activityClass = "font-medium text-xs sm:text-sm text-gray-900";
    let speakerClass = "text-xs text-gray-600";
    
    if (item.type === 'break' || item.type === 'lunch') {
      rowClass = "bg-amber-50/60 border-b border-amber-100";
      timeClass = "font-mono text-xs font-bold text-amber-700";
      activityClass = "font-bold text-xs sm:text-sm text-amber-900";
    }

    return (
      <tr key={index} className={rowClass}>
        <td className="py-3 px-2 sm:px-4 whitespace-nowrap align-top">
           <div className={timeClass}>{item.time}</div>
        </td>
        <td className="py-3 px-2 sm:px-4 align-top">
           <div className={activityClass}>
             {item.activity}
           </div>
        </td>
        <td className="py-3 px-2 sm:px-4 align-top">
           <div className={speakerClass}>
             {item.speaker}
           </div>
        </td>
      </tr>
    );
  };

  return (
    <section id="programacao" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Programação Técnica</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira a grade do evento. A programação está sujeita a alterações.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DAY 1 - Table View */}
            <div className="flex flex-col h-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                <div className="bg-gray-700 text-white p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Terça-feira | 24.03.2026</h3>
                    <p className="text-gray-300 mt-1 font-medium">Tutorial</p>
                </div>
                <div className="overflow-x-auto flex-1">
                     <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-gray-500">
                                <th className="py-3 px-2 sm:px-4 font-bold text-[10px] uppercase tracking-wider w-24">Horário</th>
                                <th className="py-3 px-2 sm:px-4 font-bold text-[10px] uppercase tracking-wider">Atividade</th>
                                <th className="py-3 px-2 sm:px-4 font-bold text-[10px] uppercase tracking-wider w-1/3">Palestrante</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {day1Schedule.map(renderRow)}
                        </tbody>
                    </table>
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400">
                    * Programação sujeita a alterações.
                </div>
            </div>

            {/* DAY 2 - Creative View (No Times) */}
            <div className="flex flex-col h-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                <div className="bg-gray-700 text-white p-6 text-center">
                     <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Quarta-feira | 25.03.2026</h3>
                     <p className="text-gray-300 mt-1 font-medium">Workshop</p>
                </div>
                
                <div className="flex-1 bg-white p-6 lg:p-8 flex flex-col gap-6">
                    
                    {/* Highlighted Lectures */}
                    <div className="space-y-6 mt-4">
                        <div className="border-l-4 border-cigre-green pl-5 py-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Palestras Confirmadas</h4>
                            
                            {/* Lecture 1 */}
                            <div className="mb-8 group">
                                <h5 className="font-bold text-lg text-gray-900 group-hover:text-cigre-green transition-colors leading-tight">
                                    Elos de Transmissão HVDC VSC com linhas aéreas
                                </h5>
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    <span className="text-gray-600 text-sm font-medium">Paulo Fischer de Toledo (Hitachi Energy)</span>
                                </div>
                            </div>

                            {/* Lecture 2 */}
                            <div className="group">
                                <h5 className="font-bold text-lg text-gray-900 group-hover:text-cigre-green transition-colors leading-tight">
                                    STATCOM - Aplicações e tendências mundiais
                                </h5>
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    <span className="text-gray-600 text-sm font-medium">Bruno Gallucci (Hitachi Energy)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100 w-full my-2"></div>

                    {/* GE Section */}
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white shadow-xl p-6 transform transition hover:scale-[1.02] duration-300">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-cigre-green/20 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            
                            <h4 className="font-bold text-lg mb-2 mt-2">Sessões Técnicas</h4>
                            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-sm">
                                Mais palestras a serem confirmadas em breve, inclusive duas apresentações técnicas ministradas por especialistas da GE Vernova.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400">
                    * Temas adicionais serão anunciados em breve.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
