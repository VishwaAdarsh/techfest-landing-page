import React, { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { TechnicalTicker } from './components/layout/TechnicalTicker';
import { CustomCursor } from './components/layout/CustomCursor';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { CompetitionsSection } from './components/sections/CompetitionsSection';
import { WorkshopsSection } from './components/sections/WorkshopsSection';
import { ExperiencesSection } from './components/sections/ExperiencesSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';

import { EventDetailModal } from './components/ui/EventDetailModal';
import { RegistrationModal } from './components/ui/RegistrationModal';

import { Competition } from './types';

export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preselectedEvent, setPreselectedEvent] = useState<string>('');
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);

  const handleOpenRegister = (eventTitle?: string) => {
    setPreselectedEvent(eventTitle || '');
    setIsRegisterOpen(true);
  };

  const handleOpenCompetitionSpec = (comp: Competition) => {
    setSelectedCompetition(comp);
  };

  const handleRegisterFromSpec = (eventTitle: string) => {
    setSelectedCompetition(null);
    setPreselectedEvent(eventTitle);
    setIsRegisterOpen(true);
  };

  const scrollToCompetitions = () => {
    const el = document.getElementById('competitions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050B18] text-[#F5F8FF] font-sans antialiased selection:bg-[#00D9FF] selection:text-[#050B18]">
      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Sticky Minimal Navigation with Cyber Blue Identity */}
      <Navigation onOpenRegister={() => handleOpenRegister()} />

      {/* Main Page Flow */}
      <main className="w-full">
        {/* Section 01: Hero — Engineer The Future */}
        <HeroSection
          onOpenRegister={() => handleOpenRegister()}
          onExplore={scrollToCompetitions}
        />

        {/* Technical Telemetry Ticker */}
        <TechnicalTicker />

        {/* Section 02: About — The Movement */}
        <AboutSection />

        {/* Section 03: Competitions — The Battleground */}
        <CompetitionsSection
          onSelectCompetition={handleOpenCompetitionSpec}
          onRegisterCompetition={(title) => handleOpenRegister(title)}
        />

        {/* Section 04: Workshops — The Knowledge Lab */}
        <WorkshopsSection
          onRegisterWorkshop={(title) => handleOpenRegister(title)}
        />

        {/* Section 05: Experiences — The Spectacle */}
        <ExperiencesSection
          onOpenRegister={() => handleOpenRegister('Spectacle & Technoholix Pass')}
        />

        {/* Section 06: Timeline — The Countdown & Schedule */}
        <TimelineSection />

        {/* Section 07: Final CTA — The Next Revolution Starts With You */}
        <FinalCtaSection
          onOpenRegister={() => handleOpenRegister()}
          onExplore={scrollToCompetitions}
        />
      </main>

      {/* Editorial Footer & Verified Channels */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Competition Specification Modal */}
      <EventDetailModal
        competition={selectedCompetition}
        isOpen={!!selectedCompetition}
        onClose={() => setSelectedCompetition(null)}
        onRegister={handleRegisterFromSpec}
      />

      {/* Interactive Registration Pass Generator Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => {
          setIsRegisterOpen(false);
          setPreselectedEvent('');
        }}
        preselectedEventTitle={preselectedEvent}
      />
    </div>
  );
}

export default App;
