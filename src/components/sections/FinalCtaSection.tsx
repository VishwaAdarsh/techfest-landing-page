import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { WaveformVisualizer } from '../ui/WaveformVisualizer';
import { sound } from '../../utils/sound';

interface FinalCtaSectionProps {
  onOpenRegister: () => void;
  onExplore: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenRegister, onExplore }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#050B18] border-t border-[#087CFF]/20 text-[#F5F8FF] overflow-hidden cyber-grid text-center">
      {/* Subtle Blue Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-t from-[#087CFF]/15 via-[#00D9FF]/10 to-transparent rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Active Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B1D38] border border-[#087CFF]/30 text-xs font-mono text-[#91A5C2]">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping shadow-[0_0_6px_#00D9FF]"></span>
          <span className="text-[#00D9FF] font-semibold">CYBER BLUE CONVERGENCE</span>
          <span className="text-[#087CFF]/40">//</span>
          <span className="text-[#F5F8FF]">IIT BOMBAY</span>
        </div>

        {/* Monumental Headline */}
        <h2 className="headline-hero font-monument font-black uppercase text-[#F5F8FF] tracking-tight select-none text-balance">
          <span className="block">THE NEXT REVOLUTION</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#087CFF] to-[#765BFF]">
            STARTS WITH YOU.
          </span>
        </h2>

        {/* Supporting text in Sora & Body in Plus Jakarta Sans */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-heading font-semibold text-[#00D9FF] tracking-wider uppercase">
            Discover. Compete. Create. Innovate.
          </p>

          <p className="text-base sm:text-lg text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
            Join over 175,000 delegates from 75+ nations at the Indian Institute of Technology Bombay. Registration is open for competitors, masterclasses, and all-access general passes.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              sound.playConfirmation();
              onOpenRegister();
            }}
            data-cursor-text="JOIN"
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-base uppercase tracking-wider transition-all transform active:scale-95 shadow-[0_0_35px_rgba(0,217,255,0.4)] flex items-center justify-center space-x-3 cursor-pointer group"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              sound.playSignalClick();
              onExplore();
            }}
            data-cursor-text="EVENTS"
            className="w-full sm:w-auto px-8 py-5 border border-[#087CFF]/40 bg-[#0B1D38]/80 hover:bg-[#0B1D38] hover:border-[#00D9FF] text-[#F5F8FF] font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Explore Events</span>
            <ArrowDown className="w-4 h-4 text-[#00D9FF]" />
          </button>
        </div>

        {/* Animated Cyan Signal Waveform */}
        <div className="pt-10 max-w-2xl mx-auto opacity-80">
          <WaveformVisualizer height={50} interactive={false} color="#087CFF" accentColor="#00D9FF" />
        </div>
      </div>
    </section>
  );
};
