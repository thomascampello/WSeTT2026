
import React from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from '../constants';
import { ScheduleItem } from '../types';

const Program: React.FC = () => {
  const day1Schedule: ScheduleItem[] = SCHEDULE_DAY_1;
  const day2Schedule: ScheduleItem[] = SCHEDULE_DAY_2;

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

            {/* DAY 2 - Table View */}
            <div className="flex flex-col h-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                <div className="bg-gray-700 text-white p-6 text-center">
                     <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Quarta-feira | 25.03.2026</h3>
                     <p className="text-gray-300 mt-1 font-medium">Workshop</p>
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
                            {day2Schedule.map(renderRow)}
                        </tbody>
                    </table>
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400">
                    * Programação sujeita a alterações.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
