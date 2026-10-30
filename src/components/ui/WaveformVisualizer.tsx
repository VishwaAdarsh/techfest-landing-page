import React, { useEffect, useRef, useState } from 'react';

interface WaveformVisualizerProps {
  className?: string;
  color?: string;
  accentColor?: string;
  height?: number;
  interactive?: boolean;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  className = '',
  color = '#087CFF',
  accentColor = '#00D9FF',
  height = 100,
  interactive = true
}) => {
  const [frequency, setFrequency] = useState(2.2);
  const [amplitude, setAmplitude] = useState(32);
  const [phase, setPhase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    let currentPhase = 0;
    const animate = () => {
      currentPhase += isHovered ? 0.065 : 0.028;
      setPhase(currentPhase);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered]);

  const points = 160;
  const pathData = Array.from({ length: points }).map((_, i) => {
    const x = (i / (points - 1)) * 1000;
    const t = (i / points) * Math.PI * 2 * frequency + phase;
    const y =
      (height / 2) +
      Math.sin(t) * amplitude +
      Math.sin(t * 2.2 - phase * 0.5) * (amplitude * 0.35) +
      Math.cos(t * 0.8) * (amplitude * 0.18);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  const secondaryPath = Array.from({ length: points }).map((_, i) => {
    const x = (i / (points - 1)) * 1000;
    const t = (i / points) * Math.PI * 2 * (frequency * 1.4) - phase * 1.1;
    const y =
      (height / 2) +
      Math.cos(t) * (amplitude * 0.5) +
      Math.sin(t * 1.8) * (amplitude * 0.2);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  return (
    <div 
      className={`relative w-full overflow-hidden select-none ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <svg
        viewBox={`0 0 1000 ${height}`}
        className="w-full h-full block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cyberWaveGradPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="25%" stopColor={color} stopOpacity="0.8" />
            <stop offset="70%" stopColor={accentColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#765BFF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="cyberWaveGradSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.05" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
          <pattern id="cyberGridPattern" width="40" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#00D9FF" strokeOpacity="0.04" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="20" stroke="#087CFF" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Technical Sub-grid */}
        <rect width="1000" height={height} fill="url(#cyberGridPattern)" />

        {/* Center baseline */}
        <line
          x1="0"
          y1={height / 2}
          x2="1000"
          y2={height / 2}
          stroke="#00D9FF"
          strokeOpacity="0.12"
          strokeDasharray="4 6"
        />

        {/* Secondary Harmonic Wave */}
        <path
          d={secondaryPath}
          fill="none"
          stroke="url(#cyberWaveGradSecondary)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Primary Signal Waveform */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#cyberWaveGradPrimary)"
          strokeWidth={isHovered ? '2.2' : '1.6'}
          strokeLinecap="round"
        />
      </svg>

      {/* Cyber Telemetry Overlay */}
      <div className="absolute top-2 left-3 flex items-center space-x-3 text-[10px] font-mono tracking-wider text-[#91A5C2]">
        <span className="flex items-center space-x-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#00D9FF] animate-ping' : 'bg-[#087CFF]'}`}></span>
          <span className="text-[#F5F8FF]">CYBER-WAVE // 1420.4 MHz</span>
        </span>
        <span className="text-neutral-600">|</span>
        <span className="hidden sm:inline">MOD: SYNCHRO-FREQ</span>
        <span className="hidden sm:inline text-neutral-600">|</span>
        <span className="hidden sm:inline text-[#00D9FF]">CARRIER: LOCK</span>
      </div>

      {interactive && (
        <div className="absolute top-2 right-3 flex items-center space-x-2 text-[10px] font-mono">
          <button
            onClick={() => setFrequency(f => f === 2.2 ? 3.8 : f === 3.8 ? 1.4 : 2.2)}
            className="px-2 py-0.5 rounded border border-[#087CFF]/30 bg-[#0B1D38]/80 text-[#91A5C2] hover:text-[#00D9FF] hover:border-[#00D9FF]/50 transition-colors cursor-pointer"
            title="Cycle Carrier Frequency"
          >
            FREQ: {frequency.toFixed(1)}k
          </button>
          <button
            onClick={() => setAmplitude(a => a >= 38 ? 20 : a + 9)}
            className="px-2 py-0.5 rounded border border-[#087CFF]/30 bg-[#0B1D38]/80 text-[#91A5C2] hover:text-[#087CFF] hover:border-[#087CFF]/50 transition-colors cursor-pointer"
            title="Adjust Wave Gain"
          >
            GAIN: +{Math.round(amplitude)}
          </button>
        </div>
      )}
    </div>
  );
};
