import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, QrCode, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEventTitle?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedEventTitle
}) => {
  const [stream, setStream] = useState<'competitor' | 'workshop' | 'delegate'>('competitor');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(preselectedEventTitle || '');
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  useEffect(() => {
    if (preselectedEventTitle) {
      setSelectedEvent(preselectedEventTitle);
      if (preselectedEventTitle.toLowerCase().includes('workshop') || preselectedEventTitle.toLowerCase().includes('ai') || preselectedEventTitle.toLowerCase().includes('cyber')) {
        setStream('workshop');
      } else {
        setStream('competitor');
      }
    }
  }, [preselectedEventTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    sound.playConfirmation();
    const id = `TF-STAR-${Math.floor(100000 + Math.random() * 900000)}-${stream.toUpperCase().slice(0, 3)}`;
    setPassId(id);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00D9FF', '#087CFF', '#765BFF', '#F5F8FF']
      });
    } catch {
      // Confetti fallback
    }
  };

  const downloadCalendarInvite = () => {
    sound.playSignalClick();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Techfest IIT Bombay//Official Cyber Star Portal//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Techfest Star — IIT Bombay | Cyber Blue Edition',
      'DESCRIPTION:Asia\'s Largest Science and Technology Festival at IIT Bombay. Delegate Pass: ' + passId,
      'LOCATION:IIT Bombay, Powai, Mumbai - 400076, Maharashtra, India',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `techfest-star-pass-${passId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050B18]/90 backdrop-blur-md transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#071326] border border-[#087CFF]/30 rounded-none shadow-[0_20px_60px_rgba(5,11,24,0.9)] overflow-hidden z-10 text-[#F5F8FF] text-left">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#087CFF]/20 bg-[#050B18]">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider">
            <span className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse shadow-[0_0_6px_#00D9FF]"></span>
            <span className="text-[#F5F8FF] font-bold">TECHFEST STAR // DELEGATE PORTAL</span>
          </div>
          <button
            onClick={() => {
              sound.playSignalClick();
              onClose();
            }}
            className="p-1 text-[#91A5C2] hover:text-[#F5F8FF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-1 font-semibold">
                  OFFICIAL DELEGATE REGISTRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#F5F8FF] uppercase tracking-tight">
                  Secure Your Access
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#91A5C2] font-body leading-relaxed">
                  Register for competitions, masterclasses, and open access to Asia's Largest Science & Technology Festival at IIT Bombay.
                </p>
              </div>

              {/* Stream Selector */}
              <div>
                <label className="text-xs font-mono uppercase text-[#91A5C2] block mb-2 font-medium">
                  Select Delegate Track
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'competitor', label: 'Competitor' },
                    { id: 'workshop', label: 'Workshop' },
                    { id: 'delegate', label: 'All-Access Pass' }
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        sound.playSignalClick();
                        setStream(t.id as any);
                      }}
                      className={`py-2 px-3 text-xs font-mono text-center border transition-all ${
                        stream === t.id
                          ? 'border-[#00D9FF] bg-[#087CFF]/20 text-[#00D9FF] font-bold shadow-[0_0_12px_rgba(0,217,255,0.25)]'
                          : 'border-[#087CFF]/20 bg-[#0B1D38]/60 text-[#91A5C2] hover:border-[#087CFF]/50'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event or track name if pre-selected */}
              {selectedEvent && (
                <div className="p-3 bg-[#0B1D38] border border-[#087CFF]/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#91A5C2]">Target Track:</span>
                  <span className="text-[#00D9FF] font-semibold">{selectedEvent}</span>
                </div>
              )}

              {/* Input fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#91A5C2] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 bg-[#0B1D38] border border-[#087CFF]/30 text-[#F5F8FF] text-sm focus:outline-none focus:border-[#00D9FF] transition-colors font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#91A5C2] mb-1.5 font-medium">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. alex@university.edu"
                    className="w-full px-4 py-2.5 bg-[#0B1D38] border border-[#087CFF]/30 text-[#F5F8FF] text-sm focus:outline-none focus:border-[#00D9FF] transition-colors font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#91A5C2] mb-1.5 font-medium">
                    Institution / University / Organization
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    placeholder="e.g. IIT Bombay / Department of Robotics"
                    className="w-full px-4 py-2.5 bg-[#0B1D38] border border-[#087CFF]/30 text-[#F5F8FF] text-sm focus:outline-none focus:border-[#00D9FF] transition-colors font-body"
                  />
                </div>
              </div>

              {/* Official notice */}
              <div className="p-3 bg-[#0B1D38]/60 border border-[#087CFF]/20 text-[11px] font-body text-[#91A5C2] flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                <span>
                  Official student-run festival registration. Entry verification instructions and credentials will be dispatched to your email.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#087CFF] to-[#00D9FF] hover:from-[#006ee6] hover:to-[#00c5e6] text-[#050B18] font-heading font-bold text-sm uppercase tracking-wider transition-transform active:scale-[0.98] shadow-[0_0_25px_rgba(0,217,255,0.35)] cursor-pointer"
              >
                Generate Delegate Pass
              </button>
            </form>
          ) : (
            /* Digital Pass Display */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-black text-[#F5F8FF] uppercase tracking-tight">
                  Cyber Pass Authenticated
                </h3>
                <p className="text-xs font-mono text-[#91A5C2]">
                  Your credentials have been successfully allocated in the Techfest Star database.
                </p>
              </div>

              {/* Digital Holographic Ticket Card */}
              <div className="relative border-2 border-[#087CFF]/40 bg-gradient-to-b from-[#0B1D38] to-[#050B18] p-5 shadow-2xl overflow-hidden">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#071326] border-r border-[#087CFF]/40"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#071326] border-l border-[#087CFF]/40"></div>

                <div className="flex justify-between items-start border-b border-[#087CFF]/20 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#00D9FF] tracking-widest block uppercase font-semibold">
                      TECHFEST STAR // IIT BOMBAY
                    </span>
                    <h4 className="text-lg font-heading font-bold text-[#F5F8FF] tracking-wide">
                      CYBER DELEGATE PASS
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#91A5C2] block">PASS ID</span>
                    <span className="text-xs font-mono font-bold text-[#00D9FF]">{passId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 my-4 text-xs font-mono">
                  <div>
                    <span className="text-[#91A5C2] block text-[10px]">DELEGATE</span>
                    <span className="text-[#F5F8FF] font-bold">{name}</span>
                  </div>
                  <div>
                    <span className="text-[#91A5C2] block text-[10px]">TRACK</span>
                    <span className="text-[#00D9FF] uppercase font-bold">{stream}</span>
                  </div>
                  <div>
                    <span className="text-[#91A5C2] block text-[10px]">INSTITUTION</span>
                    <span className="text-[#F5F8FF]">{organization || 'Independent Delegate'}</span>
                  </div>
                  <div>
                    <span className="text-[#91A5C2] block text-[10px]">VENUE</span>
                    <span className="text-[#F5F8FF]">IIT Bombay, Powai</span>
                  </div>
                </div>

                {selectedEvent && (
                  <div className="p-2 bg-[#050B18] border border-[#087CFF]/30 text-[11px] font-mono text-[#00D9FF] mb-3">
                    REGISTERED: {selectedEvent}
                  </div>
                )}

                {/* Simulated Barcode */}
                <div className="pt-3 border-t border-dashed border-[#087CFF]/25 flex items-center justify-between">
                  <div className="h-9 w-3/5 flex items-end space-x-1 opacity-70">
                    {[3,6,2,8,4,2,7,3,5,2,9,4,3,6,2,5,8,3,4,7,2,6,4,8,2,6].map((h, i) => (
                      <div key={i} className="bg-[#00D9FF] flex-1" style={{ height: `${h * 3.5}px` }}></div>
                    ))}
                  </div>
                  <div className="p-1.5 bg-[#00D9FF] text-[#050B18] rounded-none">
                    <QrCode className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={downloadCalendarInvite}
                  className="w-full py-3 bg-[#0B1D38] hover:bg-[#087CFF]/30 border border-[#087CFF]/40 text-[#F5F8FF] font-heading font-medium text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#00D9FF]" />
                  <span>Add To Calendar (.ICS)</span>
                </button>
                <button
                  onClick={resetForm}
                  className="w-full py-2.5 text-[#91A5C2] hover:text-[#F5F8FF] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done // Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
