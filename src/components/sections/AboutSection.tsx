import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FESTIVAL_STATS } from '../../data/techfestData';
import { Shield, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (narrativeRef.current) {
        gsap.from(narrativeRef.current.children, {
          scrollTrigger: {
            trigger: narrativeRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          },
          opacity: 0,
          y: 30,
          stagger: 0.14,
          duration: 0.7,
          ease: 'power3.out'
        });
      }

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          },
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full py-24 sm:py-32 bg-[#050B18] text-[#F5F8FF] overflow-hidden cyber-grid">
      {/* Decorative vertical coordinates watermark */}
      <div className="absolute right-6 top-1/3 -rotate-90 origin-right text-[10px] font-mono tracking-widest text-[#087CFF]/30 uppercase pointer-events-none hidden xl:block select-none">
        TECHFEST MANIFESTO // ESTABLISHED 1998 // POWAI CAMPUS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          number="02"
          category="THE MOVEMENT // EDITORIAL MANIFESTO"
          title="THE ACCELERATION OF DISCOVERY"
          highlightWord="DISCOVERY"
          subtitle="Born in 1998 on the campus of IIT Bombay, Techfest began as a student experiment to ignite scientific curiosity. Today, it stands as Asia's largest technological festival."
        />

        {/* Asymmetric Editorial Grid */}
        <div ref={narrativeRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20 text-left">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#F5F8FF] leading-snug text-balance">
              We do not merely observe the horizon of technological progress.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#087CFF] font-black"> We engineer it.</span>
            </div>

            <p className="text-base sm:text-lg text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
              Every winter, over one hundred and seventy-five thousand students, researchers, roboticists, and engineers converge at the Indian Institute of Technology Bombay. From the deafening roar of 60kg titanium combat robots in the Robowars arena to high-concurrency neural agent sprints, Techfest is an unfiltered proving ground.
            </p>

            <p className="text-base sm:text-lg text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
              It is completely student-curated and non-profit, embodying the relentless drive to democratize deep engineering knowledge, foster international scientific collaboration, and empower the next generation of builders.
            </p>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 border border-[#087CFF]/25 bg-[#0B1D38]/60 space-y-1.5">
                <div className="flex items-center space-x-2 text-[#00D9FF] font-heading text-xs uppercase font-bold">
                  <Target className="w-4 h-4" />
                  <span>MERITOCRATIC ARENAS</span>
                </div>
                <p className="text-xs sm:text-sm text-[#91A5C2] font-body font-normal leading-normal">
                  Open to all engineering talent worldwide without institutional or demographic bias.
                </p>
              </div>

              <div className="p-4 border border-[#087CFF]/25 bg-[#0B1D38]/60 space-y-1.5">
                <div className="flex items-center space-x-2 text-[#087CFF] font-heading text-xs uppercase font-bold">
                  <Shield className="w-4 h-4" />
                  <span>DEEP TECH FOCUS</span>
                </div>
                <p className="text-xs sm:text-sm text-[#91A5C2] font-body font-normal leading-normal">
                  Real physical hardware prototypes, verifiable software systems, and reproducible benchmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Asymmetric Image Composition */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative border border-[#087CFF]/30 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
                  alt="Techfest Robotics Engineering Lab"
                  className="w-full h-48 sm:h-56 object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#050B18]/90 text-[10px] font-mono text-[#00D9FF]">
                  ROBOTICS LAB
                </div>
              </div>

              <div className="relative border border-[#087CFF]/30 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="IIT Bombay Student Collaboration"
                  className="w-full h-36 sm:h-44 object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#050B18]/90 text-[10px] font-mono text-[#F5F8FF]">
                  COLLABORATION
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <div className="relative border border-[#087CFF]/30 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                  alt="Techfest Hackathon & Engineering Sprint"
                  className="w-full h-56 sm:h-64 object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#050B18]/90 text-[10px] font-mono text-[#00D9FF]">
                  HACKATHON
                </div>
              </div>

              <div className="p-4 bg-[#0B1D38]/80 border border-[#087CFF]/25 text-xs font-mono space-y-2">
                <div className="text-[#00D9FF] font-bold">LOCATION STAMP:</div>
                <div className="text-[#F5F8FF] font-mono">IIT BOMBAY MAIN CAMPUS</div>
                <div className="text-[#91A5C2] text-[10px]">POWAI // 400076</div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Festival Statistics Grid */}
        <div className="border border-[#087CFF]/30 bg-[#0B1D38]/60 p-6 sm:p-10 backdrop-blur-sm">
          <div className="text-xs font-mono text-[#00D9FF] uppercase tracking-widest mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#00D9FF] shadow-[0_0_6px_#00D9FF]"></span>
            <span>VERIFIED FESTIVAL SCALE & NUMERICAL IMPACT</span>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#087CFF]/20 text-left">
            {FESTIVAL_STATS.map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i !== 0 ? 'lg:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-monument font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5F8FF] to-[#00D9FF] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-mono font-bold text-[#00D9FF] tracking-wider uppercase">
                  {stat.label}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-body text-[#91A5C2] leading-normal">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
