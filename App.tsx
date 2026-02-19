
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { AboutEvent, AboutB4 } from './components/About';
import Program from './components/Program';
import Location from './components/Location';
import CommitteeSection from './components/CommitteeCarousel';
import Pricing from './components/Pricing';
import Sponsors, { SponsorsList, SponsorshipCTA } from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        
        {/* 2. Sobre o evento */}
        <AboutEvent />

        {/* 3. Programação técnica */}
        <Program />
        
        {/* 4. Local do evento (Movido para cá) */}
        <Location />

        {/* 5. Inscrição (Contém O que está incluso) */}
        <Pricing />
        
        {/* 6. Patrocinador (Lista de Logos Estática) */}
        <SponsorsList />
        
        {/* 7. Seja um patrocinador (CTA) */}
        <SponsorshipCTA />
        
        {/* 8. Comitê Organizador */}
        <CommitteeSection />

        {/* 9. Conheça o B4 */}
        <AboutB4 />
        
        {/* Barra Fixa de Patrocinadores (Sempre no final da tela) */}
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
