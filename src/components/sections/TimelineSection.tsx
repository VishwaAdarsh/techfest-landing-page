import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_DATA, FESTIVAL_METADATA } from '../../data/techfestData';
import { MapPin, AlertCircle, Download } from 'lucide-react';
import { sound } from '../../utils/sound';

export const TimelineSection: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const currentDay = TIMELINE_DATA[activeDayIndex];

  const downloadFullSchedule = () => {
    sound.playSignalClick();
    const scheduleText = [
      '==============================================================',
      'TECHFEST STAR — IIT BOMBAY // CYBER BLUE EDITION SCHEDULE',
      'Asia\'s Largest Science & Technology Festival',
      'Venue: IIT Bombay, Powai, Mumbai - 400076',
      'Coordinates: 19.1334° N, 72.9133° E',
      '==============================================================\n',
      ...TIMELINE_DATA.flatMap(d => [
        `\n[ ${d.dayNumber} — ${d.title} (${d.dateLabel}) ]`,
        '--------------------------------------------------------------',
        ...d.schedule.map(s => `${s.time.padEnd(12)} | [${s.category.padEnd(12)}] | ${s.event.padEnd(50)} | @ ${s.venue}`)
      ]),
      '\n==============================================================',
      'Note: Synchronized with the official Techfest Secretariat guidelines.',
      'For real-time updates visit https://techfest.org',
      '=============================================================='
    ].join('\n');

    const blob = new Blob([scheduleText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'techfest-official-schedule.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="timeline" className="relative w-full py-24 sm:py-32 bg-[#050B18] border-t border-[#087CFF]/20 text-[#F5F8FF] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          category="TIMELINE & SCHEDULE // THREE DAYS OF TRANSMISSION"
          title="THE THREE-DAY OPERATIONAL MATRIX"
          highlightWord="OPERATIONAL"
          subtitle="Explore the chronological blueprint of competitions, technical keynotes, workshops, and night shows across the IIT Bombay campus."
        />

        {/* Official Date Notice Banner (Ensuring no fabricated countdown as instructed) */}
        <div className="mb-10 p-4 sm:p-5 bg-[#0B1D38]/80 border border-[#087CFF]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(5,11,24,0.5)] text-left">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-[#00D9FF] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[#F5F8FF] font-heading font-bold text-sm block">
                OFFICIAL FESTIVAL SCHEDULE & VENUE TIMELINE
              </span>
              <span className="text-[#91A5C2] font-body text-xs block leading-relaxed">
                {FESTIVAL_METADATA.dateNotice} // Specific calendar dates are released per academic scheduling.
              </span>
            </div>
          </div>

          <button
            onClick={downloadFullSchedule}
            className="px-4 py-2 border border-[#087CFF]/40 bg-[#0B1D38] hover:border-[#00D9FF] hover:text-[#00D9FF] text-xs font-mono uppercase text-[#F5F8FF] flex items-center space-x-2 transition-colors cursor-pointer shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>Download Schedule (.TXT)</span>
          </button>
        </div>

        {/* Day Selector Tabs with Clean Left Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          {TIMELINE_DATA.map((day, idx) => {
            const isSelected = activeDayIndex === idx;
            return (
              <button
                key={day.dayNumber}
                onClick={() => {
                  sound.playSignalClick();
                  setActiveDayIndex(idx);
                }}
                className={`p-4 text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#00D9FF] bg-[#0B1D38] shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                    : 'border-[#087CFF]/25 bg-[#0B1D38]/50 hover:border-[#087CFF]/50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={isSelected ? 'text-[#00D9FF] font-bold' : 'text-[#91A5C2]'}>
                    {day.dayNumber}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#050B18] border border-[#087CFF]/30 text-[#00D9FF] font-medium">
                    {day.status}
                  </span>
                </div>
                <div className="text-base font-heading font-bold text-[#F5F8FF] uppercase">
                  {day.title}
                </div>
                <div className="text-xs font-body text-[#91A5C2] mt-0.5">
                  {day.dateLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Schedule List for Active Day */}
        <div className="border border-[#087CFF]/25 bg-[#0B1D38]/60 divide-y divide-[#087CFF]/15 text-left">
          {currentDay.schedule.map((item, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#0B1D38] transition-colors group"
            >
              <div className="flex items-start sm:items-center space-x-4">
                {/* Time Badge */}
                <div className="w-24 shrink-0 px-2.5 py-1 bg-[#050B18] border border-[#087CFF]/30 text-xs font-mono text-[#00D9FF] font-semibold text-center">
                  {item.time}
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg font-heading font-bold text-[#F5F8FF] group-hover:text-[#00D9FF] transition-colors">
                      {item.event}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-body text-[#91A5C2] mt-1">
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
                      <span>{item.venue}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Category Pill */}
              <div className="shrink-0">
                <span className="px-3 py-1 bg-[#050B18]/90 border border-[#087CFF]/30 text-[10px] font-mono tracking-wider uppercase text-[#91A5C2]">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Location Coordinates Strip */}
        <div className="mt-8 p-6 bg-[#0B1D38]/80 border border-[#087CFF]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#00D9FF] tracking-widest uppercase font-semibold">
              CAMPUS ARRIVAL INFORMATION
            </span>
            <div className="text-sm font-heading font-medium text-[#F5F8FF]">
              {FESTIVAL_METADATA.campus}
            </div>
            <div className="text-xs font-mono text-[#00D9FF]">
              COORDINATES: {FESTIVAL_METADATA.coordinates} (MAIN GATE VIA ADI SHANKARACHARYA MARG)
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=IIT+Bombay+Powai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playSignalClick()}
            className="px-4 py-2 border border-[#087CFF]/40 text-xs font-mono text-[#F5F8FF] hover:border-[#00D9FF] hover:text-[#00D9FF] transition-colors cursor-pointer shrink-0"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
};
