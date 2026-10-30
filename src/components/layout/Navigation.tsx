import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { FESTIVAL_METADATA } from '../../data/techfestData';
import { sound } from '../../utils/sound';

interface NavigationProps {
  onOpenRegister: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'competitions', 'workshops', 'experiences', 'timeline'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) {
      sound.playSignalClick();
    }
  };

  const navLinks = [
    { id: 'about', label: 'THE MOVEMENT' },
    { id: 'competitions', label: 'BATTLEGROUND' },
    { id: 'workshops', label: 'KNOWLEDGE LAB' },
    { id: 'experiences', label: 'EXPERIENCES' },
    { id: 'timeline', label: 'SCHEDULE' }
  ];

  const handleNavClick = (id: string) => {
    sound.playSignalClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-[#087CFF]/20 py-3 shadow-[0_8px_30px_rgba(5,11,24,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center space-x-3 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 bg-[#0B1D38] border border-[#087CFF]/40 group-hover:border-[#00D9FF] flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(8,124,255,0.2)]">
              <span className="font-monument font-black text-sm text-[#00D9FF] group-hover:scale-105 transition-transform">TF</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-monument font-black tracking-wide text-[#F5F8FF] uppercase">
                  TECHFEST
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#087CFF]/20 text-[#00D9FF] border border-[#00D9FF]/40 font-bold tracking-wider">
                  STAR
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#91A5C2] tracking-wider hidden sm:block">
                IIT BOMBAY // CYBER BLUE EDITION
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 border border-[#087CFF]/25 bg-[#0B1D38]/60 px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1 text-xs font-heading tracking-wider uppercase transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#00D9FF] font-bold'
                      : 'text-[#91A5C2] hover:text-[#F5F8FF] font-medium'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Live Frequency Status Pill */}
            <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono px-2.5 py-1 bg-[#0B1D38] border border-[#087CFF]/30 text-[#91A5C2]">
              <Radio className="w-3 h-3 text-[#00D9FF] animate-pulse" />
              <span className="text-[#91A5C2]">BAND:</span>
              <span className="text-[#00D9FF] font-semibold">1420.4 MHz</span>
            </div>

            {/* Sound FX Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 text-[#91A5C2] hover:text-[#F5F8FF] border border-[#087CFF]/30 bg-[#0B1D38]/70 transition-colors cursor-pointer"
              aria-label={isMuted ? 'Unmute audio effects' : 'Mute audio effects'}
              title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-500" /> : <Volume2 className="w-4 h-4 text-[#00D9FF]" />}
            </button>

            {/* Register CTA */}
            <button
              onClick={() => {
                sound.playConfirmation();
                onOpenRegister();
              }}
              data-cursor-text="JOIN"
              className="px-4 sm:px-5 py-2 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 shadow-[0_0_20px_rgba(0,217,255,0.35)] cursor-pointer flex items-center space-x-1.5"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                sound.playSignalClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 lg:hidden text-[#91A5C2] hover:text-white border border-[#087CFF]/30 bg-[#0B1D38] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00D9FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#050B18]/95 backdrop-blur-xl border-b border-[#087CFF]/20 pt-24 px-6 pb-10 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4 text-left">
            <div className="text-[11px] font-mono text-[#00D9FF] tracking-widest uppercase mb-4 font-semibold">
              // TECHFEST STAR NAVIGATION
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left py-3 text-2xl font-display font-black uppercase text-[#F5F8FF] hover:text-[#00D9FF] border-b border-[#0B1D38] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#087CFF]/20 text-left">
            <div className="text-xs font-mono text-[#91A5C2]">
              IIT BOMBAY // ASIA'S LARGEST SCIENCE & TECH FESTIVAL
            </div>
            <button
              onClick={() => {
                sound.playConfirmation();
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] text-[#050B18] font-heading font-bold text-sm uppercase tracking-wider text-center shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              SECURE DELEGATE PASS
            </button>
          </div>
        </div>
      )}
    </>
  );
};
