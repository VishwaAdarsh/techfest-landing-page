import { Competition, Workshop, FestivalExperience, TimelineDay, FestivalStat } from '../types';

export const FESTIVAL_METADATA = {
  name: 'TECHFEST',
  institution: 'INDIAN INSTITUTE OF TECHNOLOGY BOMBAY',
  legacy: 'ESTABLISHED 1998 // POWAI, MUMBAI',
  tagline: 'THE SIGNAL OF INNOVATION',
  descriptor: "Asia's Largest Science & Technology Festival",
  coordinates: '19.1334° N, 72.9133° E',
  campus: 'IIT Bombay, Powai, Mumbai - 400076, Maharashtra, India',
  // Configurable date indicator as mandated by PRD:
  currentDates: 'DECEMBER // DATES ANNOUNCED ANNUALLY',
  dateNotice: 'Dates configurable: Synchronized with the upcoming Academic Calendar. Verified by Techfest Secretariat.',
  signalStatus: 'TRANSMITTING // FREQ 1420.4 MHz',
  registrationPortalStatus: 'PORTAL OPEN — ALLOCATING SLOTS',
  socialLinks: {
    instagram: 'https://instagram.com/techfest_iitbombay',
    youtube: 'https://youtube.com/c/TechfestIITB',
    linkedin: 'https://linkedin.com/company/techfest',
    twitter: 'https://twitter.com/Techfest_IITB',
    facebook: 'https://facebook.com/iitbtechfest',
    official: 'https://techfest.org'
  }
};

export const FESTIVAL_STATS: FestivalStat[] = [
  {
    value: '175,000+',
    label: 'ANNUAL FOOTFALL',
    detail: "Asia's most attended collegiate technology summit"
  },
  {
    value: '2,500+',
    label: 'UNIVERSITIES & COLLEGES',
    detail: 'Participating technical institutions across India'
  },
  {
    value: '75+',
    label: 'GLOBAL NATIONS',
    detail: 'International competitors, delegates and speakers'
  },
  {
    value: '₹40,00,000+',
    label: 'VERIFIED PRIZE POOL',
    detail: 'Awarded across flagship competitive tracks'
  },
  {
    value: '27+',
    label: 'EDITIONS OF EXCELLENCE',
    detail: 'Unbroken legacy of pioneering technical student leadership'
  }
];

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: 'robowars',
    title: 'INTERNATIONAL ROBOWARS',
    category: 'robotics',
    categoryLabel: 'ROBOTICS COMBAT',
    tagline: '60kg Titanium gladiators clashing in an electrified ballistic arena.',
    description: 'The crowning jewel of Techfest. Heavyweight and featherweight robotic machines, engineered from hardened titanium and aerospace alloys, collide in an arena with active pneumatics, spinning flywheels, and destructive kinetic weaponry.',
    prizePool: '₹14,00,000',
    teamSize: 'Up to 6 Members',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Open to college teams, independent robotics labs, and international competitors.',
    timeline: 'Zonal qualifiers followed by 3-day double-elimination main draw at IIT Bombay.',
    keyHighlights: [
      '60kg Heavyweight & 15kg Featherweight categories',
      'Bulletproof polycarbonate arena enclosure',
      'Live international streaming and arena telemetry'
    ],
    rules: [
      'Robots must pass stringent safety and weapon failsafe inspections.',
      'Active radio failsafe cut-off is mandatory.',
      'Flame, entanglement, and liquid projectiles are strictly prohibited.'
    ],
    featured: true
  },
  {
    id: 'forge-a-thon',
    title: 'TRUEFOUNDRY FORGE-A-THON',
    category: 'ai',
    categoryLabel: 'AI & SOFTWARE',
    tagline: '36-hour sprint building autonomous multi-agent production systems.',
    description: 'Techfest flagship AI hackathon hosted in partnership with leading AI infrastructure pioneers. Build sovereign multi-agent reasoning graphs, autonomous code synthesis pipelines, and low-latency LLM production tools.',
    prizePool: '₹6,00,000',
    teamSize: '2 - 4 Members',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Undergraduate, postgraduate, and independent AI practitioners.',
    timeline: 'Round 1: Virtual architectural proposal. Round 2: On-site 36-hour sprint at IIT Bombay.',
    keyHighlights: [
      'Enterprise cloud GPU compute clusters provided',
      'Direct mentorship from AI founders & researchers',
      'Fast-track venture investment and fellowship opportunities'
    ],
    rules: [
      'All source repositories must be initialized at commencement.',
      'Evaluation based on autonomy, benchmark accuracy, and deployment reliability.'
    ],
    featured: true
  },
  {
    id: 'boeing-aeromodelling',
    title: 'BOEING NATIONAL AEROMODELLING',
    category: 'aerospace',
    categoryLabel: 'AEROSPACE & FLIGHT',
    tagline: 'Precision flight dynamics, payload drops, and high-speed maneuvers.',
    description: 'Held in collaboration with global aerospace giant Boeing. Teams design, manufacture, and pilot custom fixed-wing RC aircraft through demanding obstacle courses, precision payload deployment zones, and endurance circuits.',
    prizePool: '₹5,00,000',
    teamSize: '3 - 5 Members',
    image: 'https://images.unsplash.com/photo-1517976487502-8f714249a237?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Full-time engineering students with verified college credentials.',
    timeline: 'Technical design report submission followed by outdoor flight trials at Gymkhana Grounds.',
    keyHighlights: [
      'Evaluated by aerospace engineers from Boeing and IIT Bombay Faculty',
      'Telemetry logging for climb rate, payload mass fraction, and landing precision',
      'Top performers invited to Boeing career interaction sessions'
    ],
    rules: [
      'Fixed-wing propulsion only (electric motor powered).',
      'Wingspan and maximum take-off weight must adhere strictly to design rubric.'
    ],
    featured: true
  },
  {
    id: 'drone-racing',
    title: 'TECHFEST DRONE RACING LEAGUE',
    category: 'aerospace',
    categoryLabel: 'AEROSPACE & ROBOTICS',
    tagline: 'High-speed FPV night racing through neon obstacles and vertical chicanes.',
    description: 'Pilots wearing first-person-view telemetry goggles push high-discharge brushless racing drones to speeds exceeding 140 km/h through a custom illuminated obstacle course inside the indoor arena.',
    prizePool: '₹4,50,000',
    teamSize: '1 - 2 Members (Pilot & Mechanic)',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Global FPV pilots of all ages with verified flight credentials.',
    timeline: 'Day 1: Time trials. Day 2: Knockout heats. Day 3: Floodlit championship final.',
    keyHighlights: [
      '5-inch open and micro-whoop classes',
      'HD digital low-latency video feed transmission',
      'Integrated transponder timing system down to milliseconds'
    ],
    rules: [
      'Standard 4S-6S LiPo power restrictions apply.',
      'Failsafe disarm checks prior to every heat.'
    ]
  },
  {
    id: 'cozmo-clench',
    title: 'COZMO CLENCH & MESHMERIZE',
    category: 'robotics',
    categoryLabel: 'AUTONOMOUS ROBOTICS',
    tagline: 'Precision robotic manipulation and high-speed line maze traversal.',
    description: 'A test of autonomous algorithmic navigation and mechanical gripping precision. Bots must autonomously solve dynamically reconfigured line mazes, identify designated geometric blocks via onboard sensors, and transport them to delivery silos.',
    prizePool: '₹3,50,000',
    teamSize: '2 - 4 Members',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Undergraduate college and university students.',
    timeline: 'Single-elimination trial rounds followed by head-to-head timed final runs.',
    keyHighlights: [
      'No human telemetry intervention allowed during autonomous maze run',
      'Variable lighting and surface friction test zones',
      'Live arena scoreboard tracking penalty deductions and time splits'
    ],
    rules: [
      'Bot dimensions strictly bounded within 30cm x 30cm footprint.',
      'All processing must occur onboard without remote compute offloading.'
    ]
  },
  {
    id: 'zerocode-sprint',
    title: 'ZEROCODE AI CHALLENGE',
    category: 'ai',
    categoryLabel: 'AI & SOFTWARE',
    tagline: 'Zero manual syntax. Pure prompt orchestration and rapid software generation.',
    description: 'Competitors are challenged to build end-to-end fullstack production applications within tight 3-hour windows using only AI orchestration, prompt engineering, and agentic code copilots without hand-typing syntax.',
    prizePool: '₹2,50,000',
    teamSize: 'Individual or Pairs',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Open to all registered student delegates.',
    timeline: 'Speed-round heats held continuously throughout Day 1 and Day 2.',
    keyHighlights: [
      'Surprise real-world problem statements revealed 5 minutes before kickoff',
      'Tested against rigorous automated unit tests and accessibility audits',
      'Evaluated by industry leaders in generative software engineering'
    ],
    rules: [
      'Strict automated screen telemetry to verify zero manual code typing.',
      'Deployment to live public URLs within the allocated timer.'
    ]
  },
  {
    id: 'innovatex-social',
    title: 'INNOVATEX & INDIA @71/100',
    category: 'innovation',
    categoryLabel: 'SUSTAINABILITY & IOT',
    tagline: 'Ground-level technological interventions for national and global challenges.',
    description: 'Transforming engineering intellect into tangible socio-economic impact. Teams present working hardware prototypes tackling rural energy distribution, water filtration sensors, healthcare triage, and sustainable agriculture.',
    prizePool: '₹5,00,000 + Grant Support',
    teamSize: '2 - 5 Members',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    eligibility: 'Student innovators, early-stage research scholars, and incubator incubates.',
    timeline: 'Stage 1: Working prototype video audit. Stage 2: Live jury exhibition at Techfest.',
    keyHighlights: [
      'Direct interaction with government innovation funds and angel investors',
      'Patent assistance and incubation support from IIT Bombay SINE',
      'Comprehensive media coverage across national engineering outlets'
    ],
    rules: [
      'Functional hardware prototype demonstration is compulsory.',
      'Proof of concept validated with field testing data.'
    ]
  }
];

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'agentic-ai',
    title: 'AGENTIC AI & LLM PRODUCTION SYSTEMS',
    category: 'ai',
    categoryLabel: 'ARTIFICIAL INTELLIGENCE',
    duration: '2 Days // 12 Hours Hands-on',
    prerequisites: 'Foundational Python & basic REST API knowledge',
    certification: 'Official Certificate from Techfest, IIT Bombay',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Deep dive into architecting resilient multi-agent software pipelines. Implement function calling, autonomous tool selection, RAG with vector databases, and evaluation benchmarks for LLM apps.',
    syllabus: [
      'Architecture of autonomous multi-agent reasoning graphs',
      'Vector databases, embeddings, and hybrid semantic retrieval',
      'Tool invocation, memory retention, and state management',
      'Benchmarking and deploying production-ready agent endpoints'
    ],
    priceNotice: 'Official subsidized student rate verified at registration portal'
  },
  {
    id: 'cyber-security',
    title: 'ETHICAL HACKING & OFFENSIVE SECURITY',
    category: 'cyber',
    categoryLabel: 'CYBER SECURITY',
    duration: '2 Days // 12 Hours Hands-on',
    prerequisites: 'Basic networking and Linux CLI familiarity',
    certification: 'Official Certificate from Techfest, IIT Bombay',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    description: 'Learn real-world penetration testing, memory vulnerability analysis, Active Directory reconnaissance, and defensive countermeasures in dedicated virtual cloud sandboxes.',
    syllabus: [
      'Reconnaissance, network mapping, and vulnerability exploitation',
      'Web application attack vectors (OWASP Top 10 hands-on)',
      'Privilege escalation and reverse engineering binary targets',
      'Hardening enterprise networks and incident forensics'
    ],
    priceNotice: 'Includes access pass to Techfest Keynotes & Night Exhibitions'
  },
  {
    id: 'fullstack-cloud',
    title: 'HIGH-SCALE FULL STACK & CLOUD SYSTEMS',
    category: 'dev',
    categoryLabel: 'WEB & DISTRIBUTED SYSTEMS',
    duration: '2 Days // 12 Hours Hands-on',
    prerequisites: 'Basic JavaScript/TypeScript syntax',
    certification: 'Official Certificate from Techfest, IIT Bombay',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Build sub-100ms globally distributed applications using Next.js, Node microservices, Redis caching clusters, and automated continuous deployment with containerization.',
    syllabus: [
      'Serverless computing and edge rendering architectures',
      'PostgreSQL schema optimization, indexing, and connection pools',
      'Event-driven message queues and WebSocket streaming',
      'Docker container orchestration and cloud observability'
    ],
    priceNotice: 'Official subsidized student rate verified at registration portal'
  },
  {
    id: 'ros2-robotics',
    title: 'ROS 2 & AUTONOMOUS MOBILE ROBOTICS',
    category: 'robotics',
    categoryLabel: 'ROBOTICS & EMBEDDED',
    duration: '2 Days // 14 Hours Hands-on',
    prerequisites: 'C++ or Python familiarity and basic linear algebra',
    certification: 'Official Certificate from Techfest, IIT Bombay',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Program autonomous ground robots using the Robot Operating System 2. Implement SLAM (Simultaneous Localization and Mapping), sensor fusion with LiDAR, and Nav2 path planning.',
    syllabus: [
      'ROS 2 node architectures, topics, services, and actions',
      'URDF kinematics modeling and Gazebo physics simulation',
      '2D/3D LiDAR point-cloud processing and SLAM mapping',
      'Autonomous obstacle avoidance and path execution algorithms'
    ],
    priceNotice: 'Includes access pass to Techfest Keynotes & Night Exhibitions'
  }
];

export const EXPERIENCES_DATA: FestivalExperience[] = [
  {
    id: 'technoholix',
    title: 'TECHNOHOLIX',
    subtitle: 'THE NOCTURNAL SPECTACLE',
    tag: 'NIGHT REVEAL',
    description: "When the sun sets over the IIT Bombay campus, the festival transforms into an awe-inspiring technological carnival. Witness synchronized aerial drone swarms painting constellations across the Mumbai night sky, international laser projection illusions, acrobatic pyrotechnic artists, and headlining electronic music producers.",
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80',
    stats: '15,000+ Attendees nightly at Gymkhana Arena',
    highlights: [
      '500+ Autonomous drone light formation choreography',
      'International LED and holographic illusionists',
      'World-renowned electronic dance music producers',
      'Massive 360-degree laser mapping arrays'
    ]
  },
  {
    id: 'exhibitions',
    title: 'INTERNATIONAL TECH EXHIBITIONS',
    subtitle: 'THE GLOBAL INNOVATION PAVILION',
    tag: 'CUTTING EDGE',
    description: "An extraordinary journey through the world's most sophisticated technological advancements. From lifelike humanoid androids like Sophia and Furhat to interplanetary space modules from ISRO and cutting-edge military hardware prototypes from DRDO, experience tomorrow's technology today.",
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=80',
    stats: '60+ Global Exhibits from 20+ Countries',
    highlights: [
      'Social humanoid AI robots interacting in real time',
      'ISRO lunar exploration hardware & rocket propulsion units',
      'Bionic prosthetics, brain-computer interfaces, and exoskeletons',
      'Autonomous electric supercar hyper-chassis displays'
    ]
  },
  {
    id: 'lectures',
    title: 'KEYNOTE LECTURE SERIES',
    subtitle: 'THE DIALOGUE OF TITANS',
    tag: 'LEGACY & VISION',
    description: "Techfest has played host to some of the greatest minds in human history: Nobel Laureates, Turing Award recipients, heads of state, space pioneers, and titans of industry. Past luminaries include Dr. A.P.J. Abdul Kalam, Dalai Lama, Ratan Tata, and Nobel Prize winners sharing paradigm-shifting visions.",
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
    stats: 'Packed 2,500-seat Convocation Hall audiences',
    highlights: [
      'Direct Q&A with Nobel and Fields Medal laureates',
      'Deep-dive keynotes on artificial general intelligence and quantum physics',
      'Interstellar space exploration briefings by veteran astronauts',
      'High-impact leadership discussions with global industrial titans'
    ]
  }
];

export const TIMELINE_DATA: TimelineDay[] = [
  {
    dayNumber: 'DAY 01',
    title: 'THE SIGNAL AWAKES',
    dateLabel: 'INAUGURATION & QUALIFIERS',
    status: 'Confirmed Track',
    schedule: [
      { time: '09:00 AM', event: 'Official Techfest Opening Ceremony & Keynote Inauguration', venue: 'Convocation Hall', category: 'CEREMONY' },
      { time: '10:30 AM', event: 'International Robowars: 15kg & 60kg Safety Inspection & Heats', venue: 'Gymkhana Arena', category: 'COMPETITION' },
      { time: '11:00 AM', event: 'International Technology Exhibitions Public Openings', venue: 'SAC Ground', category: 'EXHIBITION' },
      { time: '01:30 PM', event: 'TrueFoundry Forge-a-thon 36-Hour AI Hackathon Kickoff', venue: 'LHC Concourse', category: 'HACKATHON' },
      { time: '04:00 PM', event: 'Distinguished Lecture: Frontiers in Quantum Computing', venue: 'Convocation Hall', category: 'LECTURE' },
      { time: '07:30 PM', event: 'Technoholix Night 01: International Cyber Illusion Show', venue: 'Main Arena', category: 'SPECTACLE' }
    ]
  },
  {
    dayNumber: 'DAY 02',
    title: 'CRUCIBLE OF CHAMPIONS',
    dateLabel: 'INTENSIVE BATTLES & WORKSHOPS',
    status: 'High Energy',
    schedule: [
      { time: '09:30 AM', event: 'Hands-on Workshops (AI, Cyber Security, ROS 2, Cloud)', venue: 'Lecture Hall Complex', category: 'WORKSHOP' },
      { time: '10:00 AM', event: 'Boeing National Aeromodelling: Precision Flight Trials', venue: 'Gymkhana Grounds', category: 'AEROSPACE' },
      { time: '12:00 PM', event: 'International Robowars Quarter-Final Knockout Bouts', venue: 'Combat Arena', category: 'COMPETITION' },
      { time: '02:30 PM', event: 'Cozmo Clench & Meshmerize Autonomous Run Finals', venue: 'SAC Indoor Hall', category: 'ROBOTICS' },
      { time: '05:00 PM', event: 'Nobel Laureate Keynote: Science at the Horizon', venue: 'Convocation Hall', category: 'LECTURE' },
      { time: '08:00 PM', event: 'Technoholix Night 02: 500-Drone Aerial Constellation Show', venue: 'Main Arena', category: 'SPECTACLE' }
    ]
  },
  {
    dayNumber: 'DAY 03',
    title: 'THE GRAND CLIMAX',
    dateLabel: 'CHAMPIONSHIP DECIDERS & FINALE',
    status: 'Grand Finale',
    schedule: [
      { time: '10:00 AM', event: 'Techfest Drone Racing League: High-Speed FPV Knockout Heats', venue: 'Indoor Sports Complex', category: 'RACING' },
      { time: '01:00 PM', event: 'TrueFoundry Forge-a-thon: Final Project Pitches & Jury Verdict', venue: 'LHC Auditorium', category: 'AI & HACKATHON' },
      { time: '03:00 PM', event: 'InnovateX Sustainability & India @71/100 Grand Presentations', venue: 'PC Saxena Auditorium', category: 'INNOVATION' },
      { time: '04:30 PM', event: 'International Robowars 60kg Titan Grand Finale', venue: 'Combat Arena', category: 'CHAMPIONSHIP' },
      { time: '06:30 PM', event: 'Techfest Grand Award Ceremony & Trophies Presentation', venue: 'Convocation Hall', category: 'CEREMONY' },
      { time: '08:30 PM', event: 'Technoholix Megashow: World-Class EDM & Laser Spectacular', venue: 'Main Arena', category: 'SPECTACLE' }
    ]
  }
];
