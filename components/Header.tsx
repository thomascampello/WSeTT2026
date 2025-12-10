
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Updated link structure and order
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Comitê B4', href: '#conheca-comite' },
    { name: 'Programação', href: '#programacao' },
    { name: 'Local', href: '#local' },
    { name: 'Organização', href: '#comite' },
    { name: 'Patrocínio', href: '#patrocinio' },
    { name: 'Inscrever-se', href: '#inscricao' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-cigre-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center group focus:outline-none"
              aria-label="CIGRE Brasil Home"
            >
              {/* Logo CIGRE Brasil - Caminho absoluto para pasta public */}
              <img 
                src="/Imgs/cigre_brazil_pos_rgb.png" 
                alt="Logo CIGRE Brasil" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-cigre-green font-bold text-xl tracking-tighter hidden sm:block">
                Brasil
              </span>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
               if (link.name === 'Inscrever-se') {
                   return (
                       <button
                         key={link.name}
                         onClick={() => scrollToSection(link.href)}
                         className="px-5 py-2 bg-cigre-green text-white font-bold rounded-full hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none"
                       >
                         {link.name}
                       </button>
                   );
               }
               return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-cigre-green hover:font-semibold transition-all duration-300 text-sm uppercase tracking-wider focus:outline-none"
                  >
                    {link.name}
                  </button>
               );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-cigre-green focus:outline-none"
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    link.name === 'Inscrever-se' 
                    ? 'text-cigre-green font-bold bg-green-50' 
                    : 'text-gray-700 hover:text-cigre-green hover:bg-cigre-light'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
