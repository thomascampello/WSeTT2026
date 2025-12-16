
import React, { useState } from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from '../constants';
import { ScheduleItem } from '../types';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  const day1Schedule: ScheduleItem[] = SCHEDULE_DAY_1;
  const day2Schedule: ScheduleItem[] = SCHEDULE_DAY_2;

  const renderRow = (item: ScheduleItem, index: number) => {
    let rowClass = "border-b border-gray-100 hover:bg-gray-50 transition-colors";
    // Increased text size for time to text-base to match others
    let timeClass = "font-mono text-base font-semibold text-cigre-green";
    let activityClass = "font-medium text-base text-gray-900";
    
    // Estilos especiais para intervalos
    if (item.type === 'break' || item.type === 'lunch') {
      rowClass = "bg-amber-50/60 border-b border-amber-100";
      timeClass = "font-mono text-base font-bold text-amber-700";
      activityClass = "font-bold text-base text-amber-900 flex items-center gap-2";
    }

    return (
      <tr key={index} className={rowClass}>
        <td className="py-4 px-4 whitespace-nowrap">
           <div className={timeClass}>{item.time}</div>
        </td>
        <td className="py-4 px-4">
           <div className={activityClass}>
             {item.activity}
           </div>
        </td>
        <td className="py-4 px-4 text-gray-700 text-base font-medium hidden sm:table-cell">
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
            Confira a grade preliminar do evento. A programação está sujeita a alterações.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-inner">
                <button
                    onClick={() => setActiveTab('day1')}
                    className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                        activeTab === 'day1' 
                        ? 'bg-white text-cigre-green shadow-md transform scale-105' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Tutorial (17/03)
                </button>
                <button
                    onClick={() => setActiveTab('day2')}
                    className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                        activeTab === 'day2' 
                        ? 'bg-white text-cigre-green shadow-md transform scale-105' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Workshop (18/03)
                </button>
            </div>
        </div>

        {/* Schedule Table Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-cigre-green text-white">
                            <th className="py-4 px-4 font-bold text-sm uppercase tracking-wider w-40">Horário</th>
                            <th className="py-4 px-4 font-bold text-sm uppercase tracking-wider">Atividade</th>
                            <th className="py-4 px-4 font-bold text-sm uppercase tracking-wider hidden sm:table-cell w-1/3">Palestrante / Responsável</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {activeTab === 'day1' 
                            ? day1Schedule.map(renderRow) 
                            : day2Schedule.map(renderRow)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 italic">
            * Programação preliminar, sujeita a alterações sem aviso prévio.
        </div>
      </div>
    </section>
  );
};

export default Program;
