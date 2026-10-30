import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer and hover capability
    const hasMouse = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    if (!hasMouse) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, select');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor-text') || '';
        setCursorText(customText);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const renderLoop = () => {
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.18;
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.18;
      setTrailPosition({ x: trailRef.current.x, y: trailRef.current.y });
      animFrameRef.current = requestAnimationFrame(renderLoop);
    };
    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Precision Center Cyan Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00D9FF] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#00D9FF]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />

      {/* Cyber Scope Ring with Fluid Trailing */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 rounded-full border-2 border-[#00D9FF] bg-[#087CFF]/15 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,217,255,0.4)]'
            : 'w-8 h-8 rounded-full border border-[#087CFF]/40'
        }`}
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0)`
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold text-black bg-[#00D9FF] px-1 py-0.5 tracking-tighter">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
