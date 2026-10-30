import React, { useState } from 'react';
import { ArrowUpRight, Check, Send, MapPin, Radio } from 'lucide-react';
import { FESTIVAL_METADATA } from '../../data/techfestData';
import { sound } from '../../utils/sound';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    sound.playConfirmation();
    setSubscribed(true);
  };

  const socialLinks = [
    { name: 'INSTAGRAM', url: FESTIVAL_METADATA.socialLinks.instagram, handle: '@techfest_iitbombay' },
    { name: 'YOUTUBE', url: FESTIVAL_METADATA.socialLinks.youtube, handle: 'TechfestIITB' },
    { name: 'LINKEDIN', url: FESTIVAL_METADATA.socialLinks.linkedin, handle: 'Techfest, IIT Bombay' },
    { name: 'X / TWITTER', url: FESTIVAL_METADATA.socialLinks.twitter, handle: '@Techfest_IITB' },
    { name: 'FACEBOOK', url: FESTIVAL_METADATA.socialLinks.facebook, handle: 'iitbtechfest' },
    { name: 'TECHFEST.ORG', url: FESTIVAL_METADATA.socialLinks.official, handle: 'Official Portal' }
  ];

  return (
    <footer className="w-full bg-[#03070F] border-t border-[#087CFF]/20 text-[#91A5C2] text-left">
      {/* Top Banner with Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#087CFF]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-[#00D9FF] rounded-full animate-ping"></div>
          <span className="text-xs font-mono tracking-widest text-[#F5F8FF] uppercase font-semibold">
            CYBER TERMINAL // {FESTIVAL_METADATA.coordinates}
          </span>
        </div>
        <div className="text-xs font-mono text-[#91A5C2]">
          INDIAN INSTITUTE OF TECHNOLOGY BOMBAY — STUDENT COMMUNITY
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-monument font-black tracking-wide text-[#F5F8FF] uppercase">
                TECHFEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#087CFF]">STAR</span>
              </div>
              <p className="text-xs font-mono text-[#00D9FF] tracking-wider font-semibold">
                {FESTIVAL_METADATA.descriptor.toUpperCase()} // CYBER BLUE
              </p>
            </div>

            <p className="text-sm text-[#91A5C2] font-body leading-relaxed max-w-md text-balance">
              A student-organized convergence of global innovation, destructive robotics, artificial intelligence breakthroughs, and nocturnal spectacles. Established 1998 at IIT Bombay.
            </p>

            <div className="p-4 bg-[#0B1D38]/60 border border-[#087CFF]/25 space-y-2 text-xs font-mono">
              <div className="flex items-start space-x-2 text-[#F5F8FF]">
                <MapPin className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                <span>{FESTIVAL_METADATA.campus}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#91A5C2]">
                <Radio className="w-4 h-4 text-[#087CFF] shrink-0" />
                <span>{FESTIVAL_METADATA.dateNotice}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F8FF] border-b border-[#087CFF]/20 pb-2 font-semibold">
              NAVIGATION MATRIX
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#hero"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>01 // HERO</span>
                  <span className="text-[#91A5C2]/60">Top</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>02 // THE MOVEMENT</span>
                  <span className="text-[#91A5C2]/60">About</span>
                </a>
              </li>
              <li>
                <a
                  href="#competitions"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>03 // BATTLEGROUND</span>
                  <span className="text-[#91A5C2]/60">Events</span>
                </a>
              </li>
              <li>
                <a
                  href="#workshops"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>04 // KNOWLEDGE LAB</span>
                  <span className="text-[#91A5C2]/60">Courses</span>
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>05 // THE SPECTACLE</span>
                  <span className="text-[#91A5C2]/60">Night</span>
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  onClick={() => sound.playSignalClick()}
                  className="hover:text-[#00D9FF] transition-colors flex items-center justify-between"
                >
                  <span>06 // SCHEDULE</span>
                  <span className="text-[#91A5C2]/60">Timeline</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Links & Channels */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F8FF] border-b border-[#087CFF]/20 pb-2 font-semibold">
                VERIFIED CHANNELS
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playSignalClick()}
                    className="p-2 border border-[#087CFF]/25 bg-[#0B1D38]/40 hover:border-[#00D9FF] hover:text-[#F5F8FF] transition-all flex items-center justify-between group"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#91A5C2] group-hover:text-[#00D9FF]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Dispatch */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F8FF] font-semibold">
                TELEMETRY DISPATCH (NEWSLETTER)
              </h4>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email for alerts..."
                    className="flex-1 px-3 py-2 bg-[#0B1D38] border border-[#087CFF]/30 text-xs text-[#F5F8FF] placeholder-[#91A5C2]/60 focus:outline-none focus:border-[#00D9FF] font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#087CFF] text-[#F5F8FF] hover:bg-[#00D9FF] hover:text-[#050B18] font-heading text-xs font-bold uppercase transition-colors cursor-pointer flex items-center"
                    aria-label="Subscribe to festival updates"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="p-2.5 bg-[#0B1D38] border border-[#00D9FF]/40 text-xs font-mono text-[#00D9FF] flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>SUBSCRIPTION AUTHENTICATED</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Editorial Notice */}
        <div className="mt-16 pt-8 border-t border-[#087CFF]/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#91A5C2] gap-4">
          <div>
            © {new Date().getFullYear()} TECHFEST, IIT BOMBAY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#91A5C2]">EDITION: CYBER BLUE</span>
            <span className="text-[#087CFF]/40">|</span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                sound.playSignalClick();
              }}
              className="hover:text-[#00D9FF] transition-colors cursor-pointer"
            >
              RETURN TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
