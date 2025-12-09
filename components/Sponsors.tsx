
import React from 'react';

// Using static paths from public/assets
const hitachiLogo = '/assets/Hitachi_Global_Logo_Black_PANTONE.png';
const cigreLogo = '/assets/cigre_brazil_pos_rgb.png';

const Sponsors: React.FC = () => {
  return (
    <section id="patrocinio" className="py-24 bg-gray-50 scroll-mt-24 relative overflow-hidden">
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-cigre-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-cigre-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">Patrocinadores</h2>
        </div>

        {/* Categoria OURO - Destaque Premium */}
        <div className="mb-16">
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-yellow-400"></div>
                <h3 className="text-xl font-bold text-yellow-600 uppercase tracking-[0.2em]">
                    Patrocínio Ouro
                </h3>
                <div className="h-[1px] w-12 bg-yellow-400"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12">
                 {/* HITACHI Logo Card */}
                 <div className="group relative w-full max-w-sm">
                    {/* Card Limpo */}
                    <div className="bg-white rounded-2xl p-10 flex items-center justify-center h-48 w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 relative">
                        <img 
                            src={hitachiLogo}
                            alt="Hitachi Energy" 
                            className="w-full h-auto max-h-16 group-hover:scale-110 transition-transform duration-500 object-contain"
                            onError={(e) => e.currentTarget.style.opacity = '0.3'}
                        />
                    </div>
                 </div>
            </div>
        </div>

        {/* Categoria APOIO */}
        <div className="mb-24">
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-gray-300"></div>
                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-[0.2em]">
                    Apoio
                </h3>
                <div className="h-[1px] w-12 bg-gray-300"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12">
                 {/* CIGRE Logo Card */}
                 <div className="group relative w-full max-w-sm">
                    <div className="bg-white rounded-2xl p-10 flex items-center justify-center h-40 w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 relative">
                        <img 
                            src={cigreLogo}
                            alt="CIGRE Brasil" 
                            className="w-full h-auto max-h-16 group-hover:scale-110 transition-transform duration-500 object-contain"
                            onError={(e) => e.currentTarget.style.opacity = '0.3'}
                        />
                    </div>
                 </div>
            </div>
        </div>

        {/* CTA - Call to Action Modernizado */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-r from-cigre-green to-emerald-900"></div>
             {/* Pattern Overlay */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="relative z-10 px-8 py-16 md:p-20 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Sua marca em destaque no setor elétrico</h3>
                <p className="text-lg text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Conecte sua empresa aos principais especialistas, decisores e acadêmicos do setor de transmissão de energia. 
                    Junte-se a nós e fortaleça sua presença no mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      type="button"
                      className="px-10 py-4 bg-white text-cigre-green rounded-full font-bold shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                    >
                        Quero ser um patrocinador
                    </button>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
