import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { WORKSHOPS_DATA } from '../../data/techfestData';
import { WorkshopCategory } from '../../types';
import { Search, CheckCircle, Clock, Award, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface WorkshopsSectionProps {
  onRegisterWorkshop: (workshopTitle: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegisterWorkshop }) => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: { id: WorkshopCategory; label: string }[] = [
    { id: 'all', label: 'ALL LABS' },
    { id: 'ai', label: 'AI & LLMS' },
    { id: 'cyber', label: 'CYBER DEFENSE' },
    { id: 'dev', label: 'FULL STACK & CLOUD' },
    { id: 'robotics', label: 'ROS 2 & ROBOTICS' }
  ];

  const filteredWorkshops = WORKSHOPS_DATA.filter(ws => {
    const matchesCategory = activeCategory === 'all' || ws.category === activeCategory;
    const matchesSearch =
      ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="workshops" className="relative w-full py-24 sm:py-32 bg-[#050B18] border-t border-[#087CFF]/20 text-[#F5F8FF] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          category="THE KNOWLEDGE LAB // HANDS-ON ACADEMICS"
          title="MASTERCLASSES OF DEEP ENGINEERING"
          highlightWord="ENGINEERING"
          subtitle="Intensive two-day certified laboratory masterclasses certified directly by Techfest, IIT Bombay. Hands-on coding, hardware interfacing, and real deployment."
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playSignalClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'border-[#00D9FF] bg-[#00D9FF] text-[#050B18] font-bold shadow-[0_0_15px_rgba(0,217,255,0.3)]'
                    : 'border-[#087CFF]/25 bg-[#0B1D38]/60 text-[#91A5C2] hover:border-[#087CFF]/60 hover:text-[#F5F8FF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00D9FF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search masterclasses..."
              className="w-full pl-9 pr-4 py-2 bg-[#0B1D38] border border-[#087CFF]/30 text-xs font-mono text-[#F5F8FF] placeholder-[#91A5C2]/60 focus:outline-none focus:border-[#00D9FF]"
            />
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          {filteredWorkshops.map(ws => {
            const isExpanded = expandedId === ws.id;

            return (
              <div
                key={ws.id}
                className="border border-[#087CFF]/25 bg-[#0B1D38]/70 p-6 sm:p-8 flex flex-col justify-between hover:border-[#00D9FF]/60 transition-colors shadow-[0_8px_24px_rgba(5,11,24,0.5)]"
              >
                <div className="space-y-4">
                  {/* Category & Duration Tags */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 bg-[#087CFF]/15 border border-[#087CFF]/30 text-[#00D9FF] font-semibold">
                      {ws.categoryLabel}
                    </span>
                    <span className="flex items-center space-x-1.5 text-[#91A5C2]">
                      <Clock className="w-3.5 h-3.5 text-[#00D9FF]" />
                      <span>{ws.duration}</span>
                    </span>
                  </div>

                  {/* Title & Overview */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F8FF] uppercase tracking-tight leading-snug">
                      {ws.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#91A5C2] font-body font-normal leading-relaxed text-balance">
                      {ws.description}
                    </p>
                  </div>

                  {/* Certification Badge */}
                  <div className="flex items-center space-x-2 text-xs font-heading font-medium text-[#F5F8FF] p-2.5 bg-[#050B18]/70 border border-[#087CFF]/25">
                    <Award className="w-4 h-4 text-[#00D9FF] shrink-0" />
                    <span>{ws.certification}</span>
                  </div>

                  {/* Syllabus Points */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider block">
                      CORE SYLLABUS MODULES:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#91A5C2] font-body">
                      {ws.syllabus.slice(0, isExpanded ? ws.syllabus.length : 2).map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00D9FF] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {ws.syllabus.length > 2 && (
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : ws.id)}
                        className="text-[11px] font-mono text-[#00D9FF] hover:underline cursor-pointer pt-1"
                      >
                        {isExpanded ? 'Hide full syllabus ↑' : `+ Show all ${ws.syllabus.length} syllabus modules ↓`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Pricing & Registration CTA */}
                <div className="mt-6 pt-4 border-t border-[#087CFF]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-[#91A5C2]">
                    <span className="text-[#91A5C2]/70 block">ENROLLMENT NOTICE:</span>
                    <span>{ws.priceNotice}</span>
                  </div>

                  <button
                    onClick={() => {
                      sound.playConfirmation();
                      onRegisterWorkshop(ws.title);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-transform active:scale-95 cursor-pointer shrink-0 shadow-[0_0_15px_rgba(0,217,255,0.25)]"
                  >
                    <span>Enroll Masterclass</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredWorkshops.length === 0 && (
          <div className="p-12 text-center border border-dashed border-[#087CFF]/30 text-[#91A5C2] font-mono text-xs">
            NO MASTERCLASSES MATCH YOUR SEARCH CRITERIA.
          </div>
        )}
      </div>
    </section>
  );
};
