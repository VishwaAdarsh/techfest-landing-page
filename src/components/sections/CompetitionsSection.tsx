import React, { useState, useRef } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { COMPETITIONS_DATA } from '../../data/techfestData';
import { Competition, EventCategory } from '../../types';
import { ChevronLeft, ChevronRight, Users, ArrowUpRight, Eye } from 'lucide-react';
import { sound } from '../../utils/sound';

interface CompetitionsSectionProps {
  onSelectCompetition: (comp: Competition) => void;
  onRegisterCompetition: (eventTitle: string) => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  onSelectCompetition,
  onRegisterCompetition
}) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'all', label: 'ALL DIVISIONS' },
    { id: 'robotics', label: 'ROBOTICS COMBAT' },
    { id: 'ai', label: 'AI & SOFTWARE' },
    { id: 'aerospace', label: 'AEROSPACE & DRONES' },
    { id: 'innovation', label: 'SUSTAINABILITY & IOT' }
  ];

  const filteredCompetitions = COMPETITIONS_DATA.filter(comp => {
    if (activeCategory === 'all') return true;
    return comp.category === activeCategory;
  });

  const scroll = (direction: 'left' | 'right') => {
    sound.playSignalClick();
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="competitions" className="relative w-full py-24 sm:py-32 bg-[#050B18] border-t border-[#087CFF]/20 text-[#F5F8FF] overflow-hidden cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="03"
            category="COMPETITIVE DIVISIONS // THE BATTLEGROUND"
            title="CHAMPIONSHIPS OF COGNITION & STEEL"
            highlightWord="STEEL"
            subtitle="Engage in Asia's most rigorous engineering combat. Design heavyweight combat robots, author sovereign agent graphs, or pilot high-speed FPV drones."
            className="mb-0"
          />

          {/* Gallery Arrow Controls */}
          <div className="flex items-center space-x-2 shrink-0 pb-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-[#087CFF]/30 bg-[#0B1D38]/80 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-colors cursor-pointer"
              aria-label="Scroll competitions left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-[#087CFF]/30 bg-[#0B1D38]/80 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-colors cursor-pointer"
              aria-label="Scroll competitions right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playSignalClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'border-[#00D9FF] bg-gradient-to-r from-[#087CFF] to-[#00D9FF] text-[#050B18] font-bold shadow-[0_0_15px_rgba(0,217,255,0.35)]'
                  : 'border-[#087CFF]/25 bg-[#0B1D38]/60 text-[#91A5C2] hover:border-[#087CFF]/60 hover:text-[#F5F8FF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Event Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredCompetitions.map(comp => (
            <div
              key={comp.id}
              className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start border border-[#087CFF]/25 bg-[#0B1D38]/80 group flex flex-col justify-between hover:border-[#00D9FF]/70 transition-all duration-300 shadow-[0_8px_24px_rgba(5,11,24,0.6)] text-left"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden border-b border-[#087CFF]/20">
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="w-full h-full object-cover filter contrast-110 brightness-95 cyber-image-grade group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D38] via-transparent to-transparent"></div>

                  {/* Category Pill in Monospace */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#050B18]/90 border border-[#087CFF]/40 text-[10px] font-mono text-[#00D9FF] uppercase font-semibold">
                    {comp.categoryLabel}
                  </div>

                  {/* Prize Badge in Monospace */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#087CFF] text-[#F5F8FF] text-xs font-mono font-bold tracking-tight shadow-[0_0_12px_rgba(8,124,255,0.5)]">
                    PRIZE: {comp.prizePool}
                  </div>
                </div>

                {/* Content Area with Perfect Typography & Alignment */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F8FF] uppercase tracking-tight group-hover:text-[#00D9FF] transition-colors leading-snug">
                      {comp.title}
                    </h3>
                    <p className="text-xs font-mono text-[#00D9FF]">
                      {comp.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#91A5C2] font-body font-normal line-clamp-3 min-h-[3.75rem] leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#91A5C2] border-t border-[#087CFF]/15">
                    <span className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#00D9FF]" />
                      <span>{comp.teamSize}</span>
                    </span>
                    <span className="text-[10px] text-[#91A5C2]/80 uppercase tracking-wider">IIT BOMBAY ARENA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons on Structured Grid */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-[#087CFF]/15">
                <button
                  onClick={() => {
                    sound.playSignalClick();
                    onSelectCompetition(comp);
                  }}
                  className="w-full py-2.5 border border-[#087CFF]/40 hover:border-[#00D9FF] bg-[#050B18]/60 text-[#91A5C2] hover:text-[#F5F8FF] text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#00D9FF]" />
                  <span>Explore Spec</span>
                </button>

                <button
                  onClick={() => {
                    sound.playConfirmation();
                    onRegisterCompetition(comp.title);
                  }}
                  className="w-full py-2.5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-transform active:scale-95 cursor-pointer shadow-[0_0_12px_rgba(0,217,255,0.3)]"
                >
                  <span>Register</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompetitions.length === 0 && (
          <div className="p-12 text-center border border-dashed border-[#087CFF]/30 text-[#91A5C2] font-mono text-xs">
            NO COMPETITIVE DIVISIONS CURRENTLY ACTIVE UNDER THIS FILTER.
          </div>
        )}
      </div>
    </section>
  );
};
