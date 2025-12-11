
import React from 'react';

const Sponsors: React.FC = () => {
  // Dados simulados para os patrocinadores usando a logo da Hitachi conforme solicitado
  const goldSponsors = [1, 2, 3];
  const silverSponsors = [1, 2, 3];
  const bronzeSponsors = [1, 2];

  return (
    <>
      <section id="patrocinio" className="py-24 bg-gray-50 scroll-mt-24 relative overflow-hidden mb-20">
        {/* Background Decorativo Suave */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
          <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-cigre-green/10 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-cigre-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">Patrocinadores</h2>
          </div>

          {/* Categoria OURO - Maior Destaque */}
          <div className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-[2px] w-16 bg-yellow-400"></div>
                  <h3 className="text-2xl font-bold text-yellow-600 uppercase tracking-[0.25em]">
                      Patrocínio Ouro
                  </h3>
                  <div className="h-[2px] w-16 bg-yellow-400"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                   {goldSponsors.map((id) => (
                     <div key={`gold-${id}`} className="group relative w-full max-w-md">
                        <div className="bg-white rounded-2xl p-10 flex items-center justify-center h-64 w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-yellow-400/20">
                            {/* Logo GRANDE (max-h-32) */}
                            <img 
                                src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                alt="Hitachi Energy" 
                                className="h-auto w-auto max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                     </div>
                   ))}
              </div>
          </div>

          {/* Categoria PRATA - Destaque Médio */}
          <div className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-[1px] w-12 bg-gray-400"></div>
                  <h3 className="text-xl font-bold text-gray-500 uppercase tracking-[0.2em]">
                      Patrocínio Prata
                  </h3>
                  <div className="h-[1px] w-12 bg-gray-400"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8">
                   {silverSponsors.map((id) => (
                     <div key={`silver-${id}`} className="group relative w-full max-w-sm">
                        <div className="bg-white rounded-xl p-8 flex items-center justify-center h-48 w-full shadow hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200">
                            {/* Logo MÉDIA (max-h-20) - Menor que Ouro */}
                            <img 
                                src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                alt="Patrocinador Prata" 
                                className="h-auto w-auto max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                            />
                        </div>
                     </div>
                   ))}
              </div>
          </div>

          {/* Categoria BRONZE - Destaque Menor */}
          <div className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-orange-300"></div>
                  <h3 className="text-lg font-bold text-orange-700/70 uppercase tracking-[0.15em]">
                      Patrocínio Bronze
                  </h3>
                  <div className="h-[1px] w-8 bg-orange-300"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                   {bronzeSponsors.map((id) => (
                     <div key={`bronze-${id}`} className="group relative w-full max-w-xs">
                        <div className="bg-white rounded-lg p-6 flex items-center justify-center h-36 w-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                            {/* Logo PEQUENA (max-h-14) - Menor que Prata */}
                            <img 
                                src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                                alt="Patrocinador Bronze" 
                                className="h-auto w-auto max-h-14 max-w-full object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                     </div>
                   ))}
              </div>
          </div>

          {/* Categoria REALIZAÇÃO - Menor de todos */}
          <div className="mb-24">
              <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gray-200"></div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Realização
                  </h3>
                  <div className="h-[1px] w-12 bg-gray-200"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12">
                   <div className="group relative w-full max-w-[200px]">
                      <div className="flex items-center justify-center h-24 w-full transition-all duration-300">
                          {/* Logo REALIZAÇÃO (max-h-12) - O menor */}
                          <img 
                              src="/Imgs/cigre_brazil_pos_rgb.png" 
                              alt="CIGRE Brasil" 
                              className="h-auto w-auto max-h-12 max-w-full object-contain"
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

      {/* BARRA FIXA DE PATROCINADORES (Ticker / Marquee) */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] h-16 sm:h-20 flex items-center overflow-hidden">
        <div className="flex items-center absolute left-0 bg-white/95 z-10 h-full px-4 shadow-[5px_0_10px_rgba(255,255,255,1)]">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Apoio:</span>
        </div>
        
        {/* Container da animação */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {/* Repetir logos para efeito de loop infinito */}
                {[...goldSponsors, ...silverSponsors, ...goldSponsors, ...silverSponsors].map((id, idx) => (
                    <li key={idx}>
                        <img 
                            src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                            alt="Sponsor" 
                            className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-pointer" 
                        />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {[...goldSponsors, ...silverSponsors, ...goldSponsors, ...silverSponsors].map((id, idx) => (
                    <li key={`duplicate-${idx}`}>
                        <img 
                            src="/Imgs/Hitachi_Global_Logo_Black_PANTONE.png" 
                            alt="Sponsor" 
                            className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-pointer" 
                        />
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Style tag para animação do marquee */}
        <style>{`
            @keyframes infinite-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
            }
        `}</style>
      </div>
    </>
  );
};

export default Sponsors;
