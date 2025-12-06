
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="local" className="py-12 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6 flex-1">
                <div className="bg-green-50 p-4 rounded-2xl shadow-sm text-cigre-accent shrink-0">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Local do Evento</h3>
                    <p className="text-xl text-cigre-green font-bold">Edifício Argentina</p>
                    <p className="text-gray-600 mt-1">Praia de Botafogo, 228 - Botafogo, Rio de Janeiro - RJ</p>
                </div>
            </div>
            
            <div className="shrink-0">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Edifício+Argentina+Praia+de+Botafogo+228" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-cigre-green text-base font-medium rounded-full text-cigre-green bg-white hover:bg-green-50 transition-colors shadow-sm"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver no Google Maps
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;