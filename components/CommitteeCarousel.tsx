
import React, { useState, useEffect, useRef } from 'react';
import { EVENT_COMMITTEE } from '../constants';
import { CommitteeMember } from '../types';
import Modal from './Modal';

// Internal Slider Component with Sliding Animation
export const TeamSlider: React.FC<{ title: string; members: CommitteeMember[]; titleColorClass: string }> = ({ 
  title, 
  members,
  titleColorClass 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);
  
  // State to track failed image loads
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Configuration
  const desktopItems = 3;
  const mobileItems = 1;
  const delay = 3000; // ms

  // Calculate items per page based on window width (simple check)
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return mobileItems;
    }
    return desktopItems;
  };
  
  // State for items visible
  const [itemsPerPage, setItemsPerPage] = useState(desktopItems);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(members.length);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  // Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      next();
    }, delay);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);


  // Calculate translate percentage
  const translateValue = currentIndex * (100 / itemsPerPage);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h3 className={`text-xl font-bold ${titleColorClass}`}>
          {title}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={prev} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            aria-label="Anterior"
          >
            <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png" alt="<" className="w-4 h-4"/>
          </button>
          <button 
            onClick={next} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            aria-label="Próximo"
          >
            <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png" alt=">" className="w-4 h-4"/>
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateValue}%)` }}
        >
           {members.map((member, idx) => (
             <div 
                key={`${member.id}-${idx}`} 
                className="flex-shrink-0 px-3 w-full md:w-1/3"
                style={{ flexBasis: `${100 / itemsPerPage}%` }}
             >
               <div 
                 onClick={() => setSelectedMember(member)}
                 className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 cursor-pointer h-full border border-transparent hover:border-cigre-green/20"
                >
                  <div className="w-24 h-24 mb-4 relative">
                    {imageErrors[member.id] || !member.image ? (
                        <div className="w-full h-full rounded-full border-4 border-white shadow-sm bg-gradient-to-br from-cigre-green to-emerald-600 flex items-center justify-center text-white font-bold text-2xl tracking-wider">
                            {member.initials || member.name.substring(0, 2).toUpperCase()}
                        </div>
                    ) : (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          onError={() => handleImageError(member.id)}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm"
                        />
                    )}
                    
                    <div className="absolute inset-0 rounded-full bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full transition-opacity">+ Info</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base leading-tight min-h-[40px] flex items-center justify-center">{member.name}</h4>
                  <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide font-medium">{member.role}</p>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Bio Modal */}
      <Modal 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)}
        title="Perfil"
      >
        {selectedMember && (
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 flex-shrink-0">
                    {imageErrors[selectedMember.id] || !selectedMember.image ? (
                         <div className="w-full h-full rounded-full border-4 border-cigre-green shadow-md bg-gradient-to-br from-cigre-green to-emerald-600 flex items-center justify-center text-white font-bold text-3xl">
                            {selectedMember.initials || selectedMember.name.substring(0, 2).toUpperCase()}
                        </div>
                    ) : (
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name} 
                          className="w-full h-full object-cover rounded-full border-4 border-cigre-green shadow-md"
                        />
                    )}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedMember.name}</h3>
                    <p className="text-cigre-green font-medium mb-1">{selectedMember.role}</p>
                    {/* Show affiliation from bio if available and not redundant, but here bio contains affiliation mainly */}
                    {selectedMember.bio && (
                        <p className="text-gray-500 font-medium mb-4 text-sm">{selectedMember.bio}</p>
                    )}
                </div>
            </div>
        )}
      </Modal>

    </div>
  );
};

const CommitteeCarousel: React.FC = () => {
  return (
    <section id="comite" className="py-20 bg-cigre-gray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Comitê Organizador
        </h2>

        {/* Carrossel: Comitê Organizador */}
        <TeamSlider 
          title="Membros do Comitê" 
          members={EVENT_COMMITTEE} 
          titleColorClass="text-cigre-green"
        />

      </div>
    </section>
  );
};

export default CommitteeCarousel;
