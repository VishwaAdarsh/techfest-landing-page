import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Zap, Radio } from 'lucide-react';
import { WaveformVisualizer } from '../ui/WaveformVisualizer';
import { FESTIVAL_METADATA } from '../../data/techfestData';
import { sound } from '../../utils/sound';
import { gsap } from 'gsap';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);

  // Desktop Pointer-reactive Soft Blue Illumination
  const [pointerGlow, setPointerGlow] = useState({ x: 50, y: 35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointerGlow({ x, y });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(taglineRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.5,
        delay: 0.05
      })
      .from([headlineLine1Ref.current, headlineLine2Ref.current], {
        opacity: 0,
        y: 45,
        stagger: 0.12,
        duration: 0.85
      }, '-=0.25')
      .from(descRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.6
      }, '-=0.45')
      .from(ctaRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.55
      }, '-=0.4')
      .from(photoCardRef.current, {
        opacity: 0,
        scale: 0.96,
        x: 20,
        duration: 0.75
      }, '-=0.55');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050B18]"
    >
      {/* Background Cyber Blue Grid & Pointer-reactive Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden cyber-grid">
        <div
          className="absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full pointer-events-none transition-transform duration-500 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${pointerGlow.x}%`,
            top: `${pointerGlow.y}%`,
            background: 'radial-gradient(circle, rgba(8, 124, 255, 0.16) 0%, rgba(0, 217, 255, 0.04) 40%, transparent 70%)'
          }}
        />
        <div className="absolute -bottom-32 -right-32 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full bg-[#765BFF]/10 blur-[140px]"></div>
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#91A5C2] border-b border-[#087CFF]/20 pb-3">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping shadow-[0_0_6px_#00D9FF]"></span>
            <span className="text-[#F5F8FF] font-semibold tracking-widest uppercase">
              ACTIVE TRANSMISSION: TECHFEST STAR // CYBER BLUE
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hidden sm:inline text-[#91A5C2]">LOCATION:</span>
            <span className="text-[#00D9FF] font-bold">{FESTIVAL_METADATA.coordinates}</span>
            <span className="text-[#087CFF]/40">|</span>
            <span className="text-[#91A5C2] tracking-wider">POWAI, MUMBAI</span>
          </div>
        </div>
      </div>

      {/* Centerpiece: Monumental Kinetic Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Typography Column with Clean Left Alignment */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Tagline Pill */}
            <div ref={taglineRef} className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B1D38]/80 border border-[#087CFF]/30 text-xs font-mono text-[#91A5C2]">
              <Radio className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span className="text-[#00D9FF] font-semibold">IIT BOMBAY PRESENTS</span>
              <span className="text-[#087CFF]/40">//</span>
              <span className="text-[#F5F8FF] tracking-wider">{FESTIVAL_METADATA.descriptor}</span>
            </div>

            {/* Monumental Condensed Headline */}
            <h1 className="headline-hero font-monument font-black uppercase text-[#F5F8FF] tracking-tight select-none">
              <span ref={headlineLine1Ref} className="block transform hover:translate-x-1 transition-transform">
                ENGINEER
              </span>
              <span
                ref={headlineLine2Ref}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#087CFF] to-[#765BFF]"
              >
                THE FUTURE.
              </span>
            </h1>

            {/* Supporting Statement in Sora & Body in Plus Jakarta Sans */}
            <div className="space-y-2.5 max-w-2xl">
              <p className="text-sm sm:text-base font-heading font-medium text-[#00D9FF] tracking-wide flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full inline-block"></span>
                <span>Where innovation meets imagination.</span>
              </p>
              <p ref={descRef} className="text-base sm:text-lg text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
                Experience Asia's largest collegiate technology festival. High-octane robotics combat, sovereign artificial intelligence sprints, aerospace flight trials, and luminous midnight spectacles at IIT Bombay.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  sound.playConfirmation();
                  onOpenRegister();
                }}
                data-cursor-text="JOIN"
                className="px-8 py-4 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-sm uppercase tracking-wider transition-all transform active:scale-95 shadow-[0_0_30px_rgba(0,217,255,0.35)] flex items-center space-x-2 cursor-pointer group"
              >
                <span>REGISTER AS DELEGATE</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  sound.playSignalClick();
                  onExplore();
                }}
                data-cursor-text="EXPLORE"
                className="px-6 py-4 border border-[#087CFF]/40 bg-[#0B1D38]/60 hover:bg-[#0B1D38] hover:border-[#00D9FF] text-[#F5F8FF] font-mono text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>EXPLORE BATTLEGROUND</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#00D9FF]" />
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div ref={photoCardRef} className="lg:col-span-4 space-y-4">
            <div className="relative border border-[#087CFF]/30 bg-[#0B1D38]/80 p-3 shadow-2xl group overflow-hidden">
              <div className="relative h-64 sm:h-72 overflow-hidden border border-[#087CFF]/20">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="Techfest Hardware Engineering & Cyber Telemetry"
                  className="w-full h-full object-cover filter contrast-110 brightness-95 cyber-image-grade group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#050B18]/90 border border-[#087CFF]/40 text-[10px] font-mono text-[#00D9FF]">
                  CYBER: 1420.4 MHz
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono text-[#00D9FF] uppercase tracking-wider block">
                    ARENA PROTOCOL
                  </span>
                  <div className="text-sm font-heading font-bold text-[#F5F8FF] uppercase">
                    INTERNATIONAL ROBOWARS & AI ARENA
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#087CFF]/20 flex items-center justify-between text-[11px] font-mono text-[#91A5C2]">
                <span className="flex items-center space-x-1.5">
                  <Zap className="w-3 h-3 text-[#00D9FF]" />
                  <span>SYNTHESIS: LOCKED</span>
                </span>
                <span className="text-[#087CFF] font-bold">29TH REVOLUTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom: Interactive Oscilloscope & Signal Waveform Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="border border-[#087CFF]/25 bg-[#0B1D38]/60 p-3 sm:p-4 backdrop-blur-sm">
          <WaveformVisualizer height={70} interactive={true} />
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#91A5C2]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full shadow-[0_0_6px_#00D9FF]"></span>
            <span>OFFICIAL IIT BOMBAY SCIENCE & TECH INITIATIVE</span>
          </div>

          <div
            onClick={onExplore}
            className="flex items-center space-x-1.5 hover:text-[#00D9FF] transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3 h-3 text-[#00D9FF] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
