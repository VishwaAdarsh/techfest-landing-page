import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXPERIENCES_DATA } from '../../data/techfestData';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ExperiencesSectionProps {
  onOpenRegister: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenRegister }) => {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES_DATA[0].id);

  return (
    <section id="experiences" className="relative w-full py-24 sm:py-32 bg-[#050B18] border-t border-[#087CFF]/20 text-[#F5F8FF] overflow-hidden cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          category="THE SPECTACLE // SENSORY & INTELLECTUAL CONVERGENCE"
          title="NIGHTFALL TRANSCENDENCE & GLOBAL VISION"
          highlightWord="TRANSCENDENCE"
          subtitle="Beyond competitions lies the pulse of human imagination. Synchronized aerial drone swarms, international humanoid robotics, and Nobel Laureate dialogues."
        />

        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
          {EXPERIENCES_DATA.map(exp => {
            const isSelected = activeExpId === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  sound.playSignalClick();
                  setActiveExpId(exp.id);
                }}
                className={`p-5 text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#00D9FF] bg-[#0B1D38] shadow-[0_0_20px_rgba(0,217,255,0.2)]'
                    : 'border-[#087CFF]/25 bg-[#0B1D38]/50 hover:border-[#087CFF]/60'
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest text-[#00D9FF] mb-1.5 uppercase font-semibold">
                  {exp.tag}
                </div>
                <div className="text-lg sm:text-xl font-heading font-bold text-[#F5F8FF] uppercase tracking-tight">
                  {exp.title}
                </div>
                <div className="text-xs font-body text-[#91A5C2] mt-1">
                  {exp.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Showcase Display */}
        {EXPERIENCES_DATA.filter(exp => exp.id === activeExpId).map(exp => (
          <div
            key={exp.id}
            className="border border-[#087CFF]/30 bg-[#0B1D38]/70 p-6 sm:p-10 transition-all duration-300 animate-in fade-in duration-300 shadow-[0_12px_40px_rgba(5,11,24,0.7)] text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-widest block font-medium">
                    // OFFICIAL SEGMENT SHOWCASE
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display font-black text-[#F5F8FF] uppercase tracking-tight leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-heading font-medium text-[#00D9FF]">
                    {exp.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
                  {exp.description}
                </p>

                {/* Audience / Scale stat */}
                <div className="p-3 bg-[#050B18]/80 border border-[#087CFF]/25 text-xs font-mono text-[#F5F8FF] flex items-center space-x-2.5">
                  <Sparkles className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>{exp.stats}</span>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#00D9FF] mb-2 font-medium">
                    HIGHLIGHT ATTRACTIONS:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#91A5C2] font-body">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-[#00D9FF] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct CTA */}
                <div className="pt-3">
                  <button
                    onClick={() => {
                      sound.playConfirmation();
                      onOpenRegister();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-transform active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                  >
                    <span>Reserve Spectacle Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Hero Image */}
              <div className="lg:col-span-6">
                <div className="relative border border-[#087CFF]/30 overflow-hidden shadow-2xl group">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-80 sm:h-[450px] object-cover filter contrast-110 brightness-95 cyber-image-grade group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent"></div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#050B18]/90 border border-[#087CFF]/40 text-xs font-mono text-[#00D9FF]">
                    IIT BOMBAY MAIN ARENA
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#F5F8FF]">
                    <span className="text-[#00D9FF] font-bold">ALL-ACCESS DELEGATE ADMISSION INCLUDED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
