
import React from 'react';
import { PRICING_TIERS, DISCOUNT_DEADLINE, calculateDiscountedPrice, CANCELLATION_POLICY } from '../constants';

const Pricing: React.FC = () => {
  const isDiscountActive = true; 

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
             <div className="flex items-center justify-center gap-3 mb-2">
                 <h2 className="text-3xl font-bold text-gray-900">Inscrição e Investimento</h2>
                 <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                   Vagas Limitadas
                 </span>
             </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_TIERS.map((tier) => {
            const finalPrice = isDiscountActive 
                ? calculateDiscountedPrice(tier.basePrice) 
                : tier.basePrice;
            
            return (
              <div 
                key={tier.id}
                className="flex flex-col p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group relative"
              >
                {/* Ribbon -20% */}
                {isDiscountActive && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm z-10">
                        -20% OFF
                    </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                {/* Removed Student Limit Badge as requested */}

                <p className="text-gray-500 text-sm mb-6 h-12 leading-snug">{tier.description}</p>
                
                {/* Unified Price Box */}
                <div className="mb-4 mt-auto border-2 border-cigre-green/20 rounded-lg p-4 bg-gray-50/50 text-center relative">
                    {isDiscountActive && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cigre-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                            Até {DISCOUNT_DEADLINE}
                        </div>
                    )}
                    
                    <div className="mt-2 flex flex-col items-center justify-center">
                        {/* Valor Cheio Grande e Riscado */}
                        {isDiscountActive && (
                            <span className="block text-2xl lg:text-3xl font-extrabold text-gray-600 line-through opacity-80">
                                {formatCurrency(tier.basePrice)}
                            </span>
                        )}
                        
                        {/* Valor Promocional Menor e Preto */}
                        <span className="block text-lg lg:text-xl font-bold text-gray-900 mt-1">
                            {formatCurrency(finalPrice)}
                        </span>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão Único Centralizado */}
        <div className="flex justify-center mb-16">
            <button 
                type="button"
                onClick={() => alert(`As inscrições abrem em Janeiro!`)}
                className="px-12 py-4 rounded-full font-bold text-lg bg-cigre-green text-white hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 transform hover:-translate-y-1"
            >
                Inscreva-se Agora
            </button>
        </div>

        {/* Common Benefits Section - Reduced size */}
        <div className="bg-white border border-gray-200 rounded-2xl py-6 px-4 md:px-8 shadow-sm mb-12 max-w-6xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                O que está incluso na inscrição?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3 shrink-0">
                         <img src="https://img.icons8.com/ios-filled/50/006633/certificate.png" alt="Certificado" className="w-5 h-5"/>
                    </div>
                    <span>Kit de Participação e Certificado</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3 shrink-0">
                        <img src="https://img.icons8.com/ios-filled/50/006633/coffee.png" alt="Coffee" className="w-5 h-5"/>
                    </div>
                    <span>Coffee-breaks</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3 shrink-0">
                        <img src="https://img.icons8.com/ios-filled/50/006633/restaurant.png" alt="Jantar" className="w-5 h-5"/>
                    </div>
                    <span>Jantar de Confraternização</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-red-600/80 font-medium">
                     <div className="bg-red-50 p-2 rounded-full mr-3 shrink-0">
                        <img src="https://img.icons8.com/ios-filled/50/cc0000/no-entry.png" alt="Não incluso" className="w-5 h-5"/>
                    </div>
                    <span>Almoço não incluso</span>
                </div>
            </div>
        </div>

        {/* Cancellation Policy and Warnings */}
        <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl text-sm text-gray-600 border border-gray-100">
            {/* Warning Box Moved Above Title */}
            <div className="mb-6 p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-xs sm:text-sm space-y-2">
                <p><strong>Atenção:</strong> As vagas para Estudantes e Sócios Estudante são limitadas a 10% das vagas totais.</p>
                <p><strong>Observação importante:</strong> Os valores promocionais indicados acima (-20%) só serão válidos para inscrições efetivadas e pagas dentro da data estipulada da promoção ({DISCOUNT_DEADLINE}).</p>
            </div>

            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Política de Cancelamento e Alteração
            </h4>

            <div className="space-y-1 ml-2 pl-4 border-l border-gray-200">
                {CANCELLATION_POLICY.split('\n').map((line, idx) => (
                    line.trim() && <p key={idx}>{line}</p>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
