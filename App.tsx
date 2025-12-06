import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Location from './components/Location';
import CommitteeCarousel from './components/CommitteeCarousel';
import Pricing from './components/Pricing';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Show modal on first load
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Location />
        <CommitteeCarousel />
        <Pricing />
        <Sponsors />
      </main>
      <Footer />

      {/* Welcome Popup */}
      <Modal 
        isOpen={showWelcomeModal} 
        onClose={() => setShowWelcomeModal(false)}
        title="Bem-vindo ao Workshop CIGRE CE B4 2026"
      >
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <svg className="h-8 w-8 text-cigre-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Programação em Breve!</h3>
          <p className="text-gray-500 mb-6">
            A programação completa detalhada será liberada no início de <strong>Janeiro de 2026</strong>.
          </p>
          
          <div className="bg-cigre-accent/10 p-4 rounded-lg border border-cigre-accent/30 mb-6">
            <p className="text-cigre-accent font-bold text-lg">
              Inscreva-se com antecedência!
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Garanta <strong>20% de desconto</strong> realizando sua inscrição até o dia <strong>31 de Janeiro</strong>.
            </p>
          </div>

          <button
            onClick={() => {
              setShowWelcomeModal(false);
              document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-cigre-green text-white py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors"
          >
            Aproveitar Desconto Agora
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;