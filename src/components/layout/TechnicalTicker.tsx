import React from 'react';
import { FESTIVAL_METADATA } from '../../data/techfestData';

export const TechnicalTicker: React.FC = () => {
  const tickerItems = [
    'IIT BOMBAY // EST. 1998',
    'ASIA\'S LARGEST SCIENCE & TECHNOLOGY FESTIVAL',
    'COORDINATES: 19.1334° N, 72.9133° E',
    'VERIFIED PRIZE POOL: ₹40,00,000+',
    '175,000+ GLOBAL FOOTFALL',
    '75+ PARTICIPATING NATIONS',
    'CYBER BLUE IDENTITY // STAR EDITION',
    'INTERNATIONAL ROBOWARS & AI ARENA',
    'OFFICIAL DELEGATE ALLOCATION ACTIVE'
  ];

  return (
    <div className="w-full bg-[#071326] border-y border-[#087CFF]/20 py-2.5 overflow-hidden select-none">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 mx-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#91A5C2]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-[#00D9FF] rotate-45 shrink-0 shadow-[0_0_6px_#00D9FF]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
