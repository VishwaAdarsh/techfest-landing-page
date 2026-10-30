import React from 'react';

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  highlightWord?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  subtitle,
  highlightWord,
  align = 'left',
  className = ''
}) => {
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#087CFF] inline-block">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-4xl' : 'max-w-4xl text-left'} ${className}`}>
      {/* Top telemetry tag line */}
      <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#91A5C2] mb-3.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-[#00D9FF] font-bold px-1.5 py-0.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30">{number}</span>
        <span className="text-[#087CFF]/50">//</span>
        <span className="text-[#91A5C2] font-medium tracking-widest">{category}</span>
        <span className="hidden sm:inline text-[#087CFF]/50">//</span>
        <span className="hidden sm:inline text-[#91A5C2]/60 text-[10px] tracking-widest">IIT BOMBAY // 19.1334° N</span>
      </div>

      {/* Main Heading in Space Grotesk */}
      <h2 className="headline-section font-display font-black tracking-tighter text-[#F5F8FF] uppercase text-balance leading-none">
        {renderTitle()}
      </h2>

      {/* Subtitle in Plus Jakarta Sans */}
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#91A5C2] font-body max-w-2xl font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}

      {/* Hairline Divider with Coordinate Pointers */}
      <div className="mt-6 relative flex items-center">
        <div className="h-px bg-gradient-to-r from-[#00D9FF] via-[#087CFF]/40 to-transparent w-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          <span className="w-1.5 h-1.5 bg-[#00D9FF] shadow-[0_0_6px_#00D9FF]"></span>
          <span className="w-1.5 h-1.5 bg-[#087CFF]"></span>
          <span className="w-1.5 h-1.5 bg-[#765BFF]/60"></span>
        </div>
      </div>
    </div>
  );
};
