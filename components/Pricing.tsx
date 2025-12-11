
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_TIERS.map((tier) => {
            const finalPrice = isDiscountActive 
                ? calculateDiscountedPrice(tier.basePrice) 
                : tier.basePrice;
            
            return (
              <div 
                key={tier.id}
                className="flex flex-col p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                {tier.id === 'student' && (
                  <span className="inline-block bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold mb-2 w-fit uppercase tracking-wide">
                    Limitado a 10% das vagas
                  </span>
                )}

                <p className="text-gray-500 text-sm mb-6 h-10 leading-snug">{tier.description}</p>
                
                {/* Unified Price Box */}
                <div className="mb-8 mt-auto border-2 border-cigre-green/20 rounded-lg p-4 bg-gray-50/50 text-center relative">
                    {isDiscountActive && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cigre-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                            Até {DISCOUNT_DEADLINE}
                        </div>
                    )}
                    
                    <div className="mt-2">
                        <span className="block text-3xl font-extrabold text-gray-900">
                            {formatCurrency(finalPrice)}
                        </span>
                        {isDiscountActive && (
                            <span className="block text-gray-400 line-through text-sm mt-1">
                                De {formatCurrency(tier.basePrice)}
                            </span>
                        )}
                    </div>
                </div>

                <button 
                  type="button"
                  onClick={() => alert(`As inscrições abrem em Janeiro!\nValor promocional: ${formatCurrency(finalPrice)}`)}
                  className="w-full py-3 rounded-lg font-bold bg-cigre-green text-white hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/10"
                >
                  Inscrever-se
                </button>
              </div>
            );
          })}
        </div>

        {/* Common Benefits Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                O que está incluso na inscrição?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                         <img src="https://img.icons8.com/ios-filled/50/006633/certificate.png" alt="Certificado" className="w-6 h-6"/>
                    </div>
                    <span>Kit de Participação e Certificado</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/006633/coffee.png" alt="Coffee" className="w-6 h-6"/>
                    </div>
                    <span>Coffee-breaks</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/006633/restaurant.png" alt="Jantar" className="w-6 h-6"/>
                    </div>
                    <span>Jantar de Confraternização</span>
                </div>

                <div className="flex items-center justify-center md:justify-start text-red-600/80 font-medium">
                     <div className="bg-red-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/cc0000/no-entry.png" alt="Não incluso" className="w-6 h-6"/>
                    </div>
                    <span>Almoço não incluso</span>
                </div>
            </div>
        </div>

        {/* Cancellation Policy */}
        <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl text-sm text-gray-600 border border-gray-100">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Política de Cancelamento e Alteração
            </h4>
            <div className="space-y-1 ml-7">
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
