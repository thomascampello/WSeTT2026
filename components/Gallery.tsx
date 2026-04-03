import React from 'react';

const Gallery: React.FC = () => {
  // TODO: Substitua pelo link real do seu Google Drive
  const googleDriveLink = "https://drive.google.com/drive/u/0/folders/1l4WtMXvkie2r8yLsn8upk-RRA0gax61l"; 

  // Imagens genéricas usadas apenas para criar o efeito visual de mosaico borrado
  const placeholderImages = [
    '/Imgs/Workshop&Tutorial 2026 - Dia 1 - Foto  (445).jpg',
    '/Imgs/Workshop&Tutorial 2026 - Dia 1 - Foto  (448).jpg',
    '/Imgs/Workshop&Tutorial 2026 - Dia 2 - Foto   (168).jpg',
    '/Imgs/Workshop&Tutorial 2026 - Dia 2 - Foto   (169).jpg',
    '/Imgs/Workshop&Tutorial 2026 - Dia 2 - Foto   (41).jpg',
    '/Imgs/Workshop&Tutorial 2026 - Dia 1 - Foto  (404).jpg',
  ];

  return (
    <section id="fotos" className="py-20 bg-white scroll-mt-24 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cigre-green uppercase bg-green-50 rounded-full border border-green-100">
            Galeria
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Fotos do Evento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Confira os registros fotográficos do nosso Workshop e Tutorial.
          </p>
        </div>

        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
          {/* Mosaico Borrado */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 p-4 bg-gray-100 transition-all duration-500">
            {placeholderImages.map((src, index) => (
              <div key={index} className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
                <img src={src} alt="Mosaico Galeria" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Call to Action Central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300">
             <div className="bg-white/95 p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4 transform transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                  <svg className="w-8 h-8 text-cigre-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Acesse todas as fotos</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  Disponibilizamos um álbum completo no Google Drive para você visualizar e baixar as fotos em alta resolução.
                </p>
                <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-full text-white bg-cigre-green hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                  Acessar Álbum Completo
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;