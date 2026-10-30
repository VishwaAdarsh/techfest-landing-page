import React, { useEffect } from 'react';
import { X, Award, Users, Calendar, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { Competition } from '../../types';
import { sound } from '../../utils/sound';

interface EventDetailModalProps {
  competition: Competition | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (eventTitle: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  competition,
  isOpen,
  onClose,
  onRegister
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !competition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#050B18]/90 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#071326] border border-[#087CFF]/30 rounded-none shadow-[0_20px_60px_rgba(5,11,24,0.9)] overflow-hidden flex flex-col z-10 text-[#F5F8FF] text-left">
        {/* Top Technical Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#087CFF]/20 bg-[#050B18]">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-wider">
            <span className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse shadow-[0_0_6px_#00D9FF]"></span>
            <span className="text-[#00D9FF] font-semibold">{competition.categoryLabel}</span>
            <span className="text-[#087CFF]/40">//</span>
            <span className="text-[#91A5C2]">SPECIFICATION DOCUMENT</span>
          </div>
          <button
            onClick={() => {
              sound.playSignalClick();
              onClose();
            }}
            className="p-1.5 text-[#91A5C2] hover:text-[#F5F8FF] hover:bg-[#0B1D38] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          {/* Header & Image Banner */}
          <div className="space-y-4">
            <div className="relative h-48 sm:h-64 overflow-hidden border border-[#087CFF]/25">
              <img
                src={competition.image}
                alt={competition.title}
                className="w-full h-full object-cover filter contrast-110 brightness-95 cyber-image-grade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-block px-3 py-1 text-xs font-mono font-bold bg-[#087CFF] text-[#F5F8FF] shadow-[0_0_12px_rgba(8,124,255,0.4)]">
                  PRIZE POOL: {competition.prizePool}
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs font-mono bg-[#050B18]/90 border border-[#087CFF]/40 text-[#00D9FF]">
                  <Users className="w-3.5 h-3.5 mr-1.5 text-[#00D9FF]" />
                  {competition.teamSize}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-[#F5F8FF] uppercase">
                {competition.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#00D9FF] font-mono">
                {competition.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00D9FF] border-b border-[#087CFF]/20 pb-1 font-semibold">
              MISSION BRIEFING
            </h3>
            <p className="text-sm sm:text-base text-[#91A5C2] font-body leading-relaxed">
              {competition.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0B1D38]/60 border border-[#087CFF]/20">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#00D9FF] mb-1 font-semibold">
                <Award className="w-4 h-4 text-[#00D9FF]" />
                <span>ELIGIBILITY</span>
              </div>
              <p className="text-sm text-[#F5F8FF] font-body">{competition.eligibility}</p>
            </div>

            <div className="p-4 bg-[#0B1D38]/60 border border-[#087CFF]/20">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#00D9FF] mb-1 font-semibold">
                <Calendar className="w-4 h-4 text-[#00D9FF]" />
                <span>TIMELINE & FORMAT</span>
              </div>
              <p className="text-sm text-[#F5F8FF] font-body">{competition.timeline}</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00D9FF] border-b border-[#087CFF]/20 pb-1 font-semibold">
              CHAMPIONSHIP HIGHLIGHTS
            </h3>
            <ul className="space-y-2 text-sm text-[#91A5C2] font-body">
              {competition.keyHighlights.map((hl, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] mt-0.5 shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rules / Regulations */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00D9FF] border-b border-[#087CFF]/20 pb-1 flex items-center justify-between font-semibold">
              <span>MANDATORY PROTOCOLS</span>
              <ShieldAlert className="w-3.5 h-3.5 text-[#00D9FF]" />
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#91A5C2] font-mono">
              {competition.rules.map((rule, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#00D9FF] font-bold">[{i + 1}]</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 bg-[#050B18] border-t border-[#087CFF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#91A5C2] text-center sm:text-left">
            OFFICIAL RULESET ISSUED BY TECHFEST IIT BOMBAY
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                sound.playSignalClick();
                onClose();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-[#087CFF]/30 text-xs font-mono uppercase tracking-wider text-[#91A5C2] hover:bg-[#0B1D38] transition-colors"
            >
              Back to Arena
            </button>
            <button
              onClick={() => {
                sound.playConfirmation();
                onRegister(competition.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,217,255,0.35)]"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
