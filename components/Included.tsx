
import React from 'react';

const Included: React.FC = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-gray-200 rounded-2xl py-8 px-4 md:px-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-8 text-center">
                        O que está incluso na inscrição?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                        
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
            </div>
        </section>
    );
};

export default Included;
