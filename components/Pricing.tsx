
import React from 'react';
import { PRICING_TIERS, DISCOUNT_DEADLINE, calculateDiscountedPrice, DISCOUNT_PERCENTAGE } from '../constants';

const Pricing: React.FC = () => {
  const isDiscountActive = true; 

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
             <div className="flex items-center gap-3">
                 <h2 className="text-3xl font-bold text-gray-900">Inscrição e Investimento</h2>
                 {/* Badge de Vagas Limitadas */}
                 <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                   Vagas Limitadas
                 </span>
             </div>
          </div>

          {isDiscountActive && (
            <div className="mt-4 bg-cigre-light border border-cigre-green/30 text-cigre-green px-4 py-3 rounded-lg text-sm sm:text-base font-semibold shadow-sm inline-block">
               20% de desconto para inscrições até {DISCOUNT_DEADLINE}
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PRICING_TIERS.map((tier) => {
            const finalPrice = isDiscountActive 
                ? calculateDiscountedPrice(tier.basePrice) 
                : tier.basePrice;
            
            return (
              <div 
                key={tier.id}
                className="relative flex flex-col p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                {/* Ribbon for Savings */}
                {isDiscountActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-10 pointer-events-none">
                     <div className="bg-red-600 text-white text-sm font-bold absolute top-0 right-0 transform translate-x-[30%] translate-y-[40%] rotate-45 w-[140%] py-1 text-center shadow-md">
                        -20%
                     </div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                {/* Student specific limit warning */}
                {tier.id === 'student' && (
                  <span className="inline-block bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold mb-2 w-fit uppercase tracking-wide">
                    Limitado a 10% das vagas
                  </span>
                )}

                <p className="text-gray-500 text-sm mb-6 h-10 leading-snug">{tier.description}</p>
                
                <div className="mb-8 mt-auto">
                  {isDiscountActive && (
                    <span className="block text-gray-400 line-through text-md">
                      {formatCurrency(tier.basePrice)}
                    </span>
                  )}
                  <span className="text-3xl font-extrabold text-gray-900">
                    {formatCurrency(finalPrice)}
                  </span>
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
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                O que está incluso na inscrição?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Kit de Participação (Sacola) */}
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                         <img src="https://img.icons8.com/ios-filled/50/006633/shopping-bag.png" alt="Kit" className="w-6 h-6"/>
                    </div>
                    <span>Kit de Participação</span>
                </div>

                {/* Coffee-breaks (Xícara) */}
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/006633/coffee.png" alt="Coffee" className="w-6 h-6"/>
                    </div>
                    <span>Coffee-breaks</span>
                </div>

                {/* Jantar (Garfo e Faca) */}
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                    <div className="bg-green-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/006633/restaurant.png" alt="Jantar" className="w-6 h-6"/>
                    </div>
                    <span>Jantar de Confraternização</span>
                </div>

                {/* Almoço não incluso */}
                <div className="flex items-center justify-center md:justify-start text-red-600/80 font-medium">
                     <div className="bg-red-50 p-2 rounded-full mr-3">
                        <img src="https://img.icons8.com/ios-filled/50/cc0000/no-entry.png" alt="Não incluso" className="w-6 h-6"/>
                    </div>
                    <span>Almoço não incluso</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
