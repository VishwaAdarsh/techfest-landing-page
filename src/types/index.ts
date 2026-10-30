export type EventCategory = 'all' | 'robotics' | 'ai' | 'aerospace' | 'innovation';

export interface Competition {
  id: string;
  title: string;
  category: 'robotics' | 'ai' | 'aerospace' | 'innovation';
  categoryLabel: string;
  tagline: string;
  description: string;
  prizePool: string;
  teamSize: string;
  image: string;
  eligibility: string;
  timeline: string;
  keyHighlights: string[];
  rules: string[];
  featured?: boolean;
}

export type WorkshopCategory = 'all' | 'ai' | 'cyber' | 'dev' | 'robotics';

export interface Workshop {
  id: string;
  title: string;
  category: 'ai' | 'cyber' | 'dev' | 'robotics';
  categoryLabel: string;
  duration: string;
  prerequisites: string;
  certification: string;
  image: string;
  description: string;
  syllabus: string[];
  priceNotice: string;
}

export interface FestivalExperience {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  stats: string;
  highlights: string[];
}

export interface TimelineDay {
  dayNumber: string;
  title: string;
  dateLabel: string;
  status: 'Confirmed Track' | 'High Energy' | 'Grand Finale';
  schedule: {
    time: string;
    event: string;
    venue: string;
    category: string;
  }[];
}

export interface FestivalStat {
  value: string;
  label: string;
  detail: string;
}
