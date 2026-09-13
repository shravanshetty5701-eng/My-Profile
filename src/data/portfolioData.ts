import { TimelineMilestone, SkillDemonstration, ProjectItem, LeadershipRole } from '../types';

export const PERSONAL_INFO = {
  name: "Shravan Chandrashekhar Shetty",
  preferredName: "Shravan Shetty",
  title: "Front-End Developer & Community Builder",
  hook: "Same person, same instincts, two arenas: code and community.",
  heroSubtitle: "I've spent 3.4 years writing front-end code, and just as long organizing the events that bring people together. Both take the same instincts: plan tightly, communicate constantly, stay calm when things break.",
  email: "shravanshetty5701@gmail.com",
  phone: "+91 98920 63842",
  linkedin: "https://www.linkedin.com/in/shravan-shetty-48171a188",
  linkedinHandle: "shravan-shetty-48171a188",
  github: "https://github.com/shravanshetty",
  location: "Mumbai, Maharashtra, India",
  experienceYears: "3.4+",
  education: {
    degree: "BSc in Computer Science",
    institution: "University of Mumbai",
    graduation: "February 2022",
    cgpa: "8.5 CGPA"
  }
};

export const THE_STORY = {
  hook: "Same person, same instincts, two arenas: code and community.",
  paragraphs: [
    "I've spent 3.4 years writing front-end code, and just as long organizing the events that bring people together. Both take the same instincts: plan tightly, communicate constantly, stay calm when things break.",
    "I graduated with a BSc in Computer Science from the University of Mumbai (Feb 2022, 8.5 CGPA). During college I was Creative Head of my college fest, turning an idea into something hundreds of people showed up for.",
    "After college I worked at SDAC Infotech keeping a live website running — fixes, updates, performance monitoring. Then I joined BTS as an Associate Developer building Angular UI for simulation apps, and got promoted to Developer within two years.",
    "Off the clock, I'm Head of my local Ganpati Mandal, running a large community celebration every year, and served on BTS's Event Management team (through 2025) planning the company's internal events.",
    "Same person, same instincts, two arenas: code and community."
  ],
  throughlineCallout: "Same person, same instincts, two arenas: code and community."
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "bts-developer",
    title: "Developer",
    organization: "BTS Strategy Alignment & Execution",
    dates: "2024 — Present",
    category: "code",
    badge: "Technical Promotion",
    summary: "Architect high-performance Angular simulation front-ends and reactive RxJS pipelines for enterprise corporate clients.",
    bullets: [
      "Architect high-performance Angular simulation front-ends and reactive RxJS pipelines for enterprise corporate clients."
    ],
    tags: ["Angular", "TypeScript", "RxJS", "State Management", "Performance Optimization"]
  },
  {
    id: "ganpati-mandal-head",
    title: "Head of Local Ganpati Mandal",
    organization: "Annual Community Festival, Mumbai",
    dates: "Annual Milestone",
    category: "community",
    badge: "Community Leadership",
    summary: "Direct end-to-end festival logistics, civic permissions, and crowd safety for 500+ community attendees with a 10+ volunteer crew.",
    bullets: [
      "Direct end-to-end festival logistics, civic permissions, and crowd safety for 500+ community attendees with a 10+ volunteer crew."
    ],
    tags: ["500+ Attendees", "10+ Volunteers", "Vendor Coordination", "Crisis Management", "Civic Permits"]
  },
  {
    id: "bts-events-lead",
    title: "Event Management Team",
    organization: "BTS Strategy Alignment & Execution",
    dates: "2023 — 2025",
    category: "community",
    badge: "Company Culture",
    summary: "Planned, hosted, and managed technical A/V setups for internal company town halls and cultural gatherings connecting hybrid teams.",
    bullets: [
      "Planned, hosted, and managed technical A/V setups for internal company town halls and cultural gatherings connecting hybrid teams."
    ],
    tags: ["Event Planning", "Live Hosting", "Cross-Team Engagement", "A/V Setup"]
  },
  {
    id: "bts-associate-developer",
    title: "Associate Developer",
    organization: "BTS Strategy Alignment & Execution",
    dates: "2022 — 2024",
    category: "code",
    badge: "Front-End Engineering",
    summary: "Engineered modular Angular components and simulation modules, earning accelerated promotion to Developer within two years.",
    bullets: [
      "Engineered modular Angular components and simulation modules, earning accelerated promotion to Developer within two years."
    ],
    tags: ["Angular", "TypeScript", "JavaScript", "HTML5/CSS3", "Git"]
  },
  {
    id: "sdac-infotech",
    title: "Web Maintenance & Operations",
    organization: "SDAC Infotech",
    dates: "2022",
    category: "code",
    badge: "Production Operations",
    summary: "Maintained live production client web applications with continuous uptime monitoring, performance fixes, and cross-browser consistency.",
    bullets: [
      "Maintained live production client web applications with continuous uptime monitoring, performance fixes, and cross-browser consistency."
    ],
    tags: ["Web Operations", "JavaScript", "Bug Fixes", "Performance Monitoring"]
  },
  {
    id: "college-fest-creative-head",
    title: "Creative Head of College Fest",
    organization: "University of Mumbai",
    dates: "2022",
    category: "community",
    badge: "Fest Leadership",
    summary: "Directed creative vision, stage design, and on-ground scheduling for 500+ inter-college attendees.",
    bullets: [
      "Directed creative vision, stage design, and on-ground scheduling for 500+ inter-college attendees."
    ],
    tags: ["Creative Direction", "500+ Attendees", "Stage Design", "Team Coordination"]
  },
  {
    id: "mumbai-university-cs",
    title: "BSc in Computer Science",
    organization: "University of Mumbai",
    dates: "Graduated Feb 2022",
    category: "education",
    badge: "8.5 CGPA Foundation",
    summary: "Graduated with 8.5 CGPA distinction with a strong grounding in algorithms, database systems, and modern web engineering.",
    bullets: [
      "Graduated with 8.5 CGPA distinction with a strong grounding in algorithms, database systems, and modern web engineering."
    ],
    tags: ["8.5 CGPA", "Computer Science", "Algorithms", "Software Engineering"]
  }
];

export const SKILL_DEMONSTRATIONS: SkillDemonstration[] = [
  {
    id: "angular",
    name: "Angular",
    category: "Frontend",
    description: "Core framework for 3.4+ years at BTS. Building simulation interfaces with modular components, dependency injection, and RxJS reactive streams.",
    snippet: `@Component({
  selector: 'sim-metric-stream',
  template: \`<div class="metric">{{ value$ | async }}</div>\`
})
export class MetricComponent {
  value$ = this.simService.state$.pipe(
    map(s => s.revenue * s.efficiency)
  );
}`,
    demoType: "angular"
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Declarative component-driven UI library used for modern client-side apps, hooks, custom state management, and real-time dashboards.",
    snippet: `const [metrics, setMetrics] = useState({ attendees: 500, volunteers: 10 });
const ratio = useMemo(() => 
  (metrics.attendees / metrics.volunteers).toFixed(1),
  [metrics]
);`,
    demoType: "react"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description: "Type safety across complex simulation states and event coordination models, preventing runtime bugs before code reaches staging.",
    snippet: `interface FestivalEvent {
  readonly id: string;
  attendeeCount: number;
  status: 'planning' | 'live' | 'completed';
}
function assignVolunteers(e: FestivalEvent, count: number): boolean { ... }`,
    demoType: "typescript"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    description: "Deep ES6+ foundation: closures, async/await, array pipelines, event loop mechanics, and custom DOM interaction handlers.",
    snippet: `const volunteerShifts = [4, 6, 5, 8, 3];
const totalHours = volunteerShifts.reduce((acc, curr) => acc + curr, 0);
const averageShift = (totalHours / volunteerShifts.length).toFixed(1);`,
    demoType: "javascript"
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Semantic markup, modern CSS Grid, Flexbox, hardware-accelerated animations, and responsive layouts that perform smoothly.",
    snippet: `@keyframes pulse-glow {
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.97); }
}
.live-pulse { animation: pulse-glow 2s infinite ease-in-out; }`,
    demoType: "html-css"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design system enabling fast, sleek UI execution with strict spacing scales, typography, and dark-mode glassmorphism.",
    snippet: `<div className="flex items-center gap-3 p-4 rounded-xl bg-[#141733] border border-indigo-400/25 hover:border-pink-400 transition-all">
  <span className="font-mono text-xs text-pink-400">STATUS_OK</span>
</div>`,
    demoType: "tailwind"
  },
  {
    id: "node-express",
    name: "Node.js & Express",
    category: "Backend & Data",
    description: "RESTful API routes, middleware, and backend services for event coordination endpoints and simulation data persistence.",
    snippet: `app.get('/api/festival/status', (req, res) => {
  const status = { stage: 'live', attendees: 520, volunteersActive: 12 };
  res.json({ success: true, data: status });
});`,
    demoType: "node"
  },
  {
    id: "databases",
    name: "MySQL & MongoDB",
    category: "Backend & Data",
    description: "Relational schema design for attendee registrations & shifts, plus NoSQL document storage for event telemetry and audit logs.",
    snippet: `SELECT volunteer_name, role, shift_time 
FROM festival_roster 
WHERE festival_year = 2026 AND status = 'confirmed' 
ORDER BY shift_time ASC;`,
    demoType: "database"
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Developer Tools",
    description: "Branching strategies, semantic commits, PR reviews, resolving merge conflicts, and automated GitHub Actions workflows.",
    snippet: `git checkout -b feature/simulation-state-stream
git commit -m "feat(sim): optimize RxJS reactive calculation pipeline"
git push origin feature/simulation-state-stream`,
    demoType: "git"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "angular-simulation-platform",
    title: "Enterprise Angular Simulation Engine",
    subtitle: "Interactive business simulation interface for enterprise decision testing",
    category: "code",
    description: "Dynamic business simulation interface built with Angular, RxJS, and TypeScript. Enables leadership teams to simulate multi-year business scenarios, adjust resource allocations in real-time, and observe reactive metrics cascade without UI lag.",
    whatBuilt: "Engineered modular Angular components with custom SVG telemetry dials, responsive grid layouts, and optimized RxJS state streams that handle 50+ simultaneous calculation parameters without re-render thrashing.",
    whyBuilt: "Enterprise training programs needed an intuitive, resilient UI where users could model complex corporate strategies during high-stakes leadership workshops.",
    technologies: ["Angular", "TypeScript", "RxJS", "CSS Grid", "Enterprise State Architecture"],
    githubUrl: "https://github.com/shravanshetty",
    liveDemoLabel: "Launch Simulation Demo",
    interactiveType: "simulation"
  },
  {
    id: "festival-command-center",
    title: "Festival Logistics Command Center",
    subtitle: "Real-time coordination system for 500+ attendees & 10+ volunteers",
    category: "community",
    description: "A specialized event operations dashboard built to manage volunteers, vendor milestone checkpoints, budget tracking, and real-time emergency triage during the annual Ganpati festival.",
    whatBuilt: "Built a mobile-first task orchestration dashboard with localStorage persistence, shift countdown timers, vendor contact hotkeys, and crowd density monitors.",
    whyBuilt: "Managing a 500-person community event with 10 volunteers requires flawless coordination. When weather changes or a generator trips, organizers need a one-tap view of all active assignments.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "LocalStorage API", "Offline-Ready"],
    githubUrl: "https://github.com/shravanshetty",
    liveDemoLabel: "Open Operations Board",
    interactiveType: "logistics"
  },
  {
    id: "sdac-web-portal",
    title: "Client Web Operations & Responsive Optimization",
    subtitle: "Production maintenance, uptime monitoring, and cross-browser consistency at SDAC Infotech",
    category: "code",
    description: "Production web operations and front-end maintenance for client portals, focusing on cross-browser compatibility, scheduled asset updates, and performance monitoring.",
    whatBuilt: "Conducted cross-browser rendering audits, refactored rigid legacy CSS into modern responsive layouts, and streamlined routine maintenance updates to minimize downtime.",
    whyBuilt: "Client websites required continuous reliability and consistent visual fidelity across varied corporate workstations and mobile browsers.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Cross-Browser Debugging", "Performance Monitoring"],
    githubUrl: "https://github.com/shravanshetty",
    liveDemoLabel: "View Performance Audits",
    interactiveType: "simulation"
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: "ganpati-mandal",
    title: "Head of Local Ganpati Mandal",
    organization: "Annual Community Festival • Mumbai",
    dates: "Annual Event",
    scale: "500+ Community Attendees • 10+ Dedicated Volunteers",
    skillsBuilt: [
      {
        name: "Planning & Vendor Coordination",
        description: "Drafted end-to-end event roadmaps, calculated material expenses, managed community fund allocations, and secured sound, electrical, and scaffolding contracts months in advance."
      },
      {
        name: "Civic & Police Permissions",
        description: "Navigated municipal corporation approvals, electrical safety clearances, and local police station permits adhering to strict civic timelines."
      },
      {
        name: "Leading a Team Under Pressure",
        description: "Led and inspired a tight-knit squad of 10+ volunteers across 16-hour festival days, delegating crowd flow, prasad distribution, and security patrols."
      },
      {
        name: "Solving Problems Live",
        description: "Handled unexpected on-ground crises immediately — rerouting crowd movement during sudden monsoon downpours and switching power feeds when a line tripped."
      }
    ],
    responsibilities: [
      "Manage planning and on-ground logistics for an annual celebration bringing together over 500 community members.",
      "Coordinate with outside vendors for sound systems, lighting, stage infrastructure, and local municipal permits.",
      "Lead a tight-knit team of 10+ volunteers handling crowd coordination, food and prasad distribution, and safety arrangements.",
      "Make quick decisions on the ground when unpredictable monsoon weather or supply delays require immediate adjustments."
    ],
    reflection: "Running a large community festival taught me how to stay calm when things break, communicate clearly across diverse groups, and keep everyone focused on the goal. It's identical to triaging a high-priority production bug."
  },
  {
    id: "bts-events",
    title: "BTS Event Management Team",
    organization: "BTS Strategy Alignment & Execution",
    dates: "2023 — 2025",
    scale: "Company-Wide Gatherings & Cultural Summits",
    skillsBuilt: [
      {
        name: "Planning & Cross-Functional Alignment",
        description: "Collaborated with executive leadership, HR, and facilities teams to design event agendas that fit company goals and respect work commitments."
      },
      {
        name: "Vendor Coordination & A/V Setup",
        description: "Managed stage sound checks, multi-screen presentations, hybrid streaming, and interactive polling to ensure seamless in-person and remote participation."
      },
      {
        name: "Leading People & Live Hosting",
        description: "Hosted company gatherings in person and over hybrid video feeds, creating energetic atmospheres that broke down departmental silos."
      },
      {
        name: "Solving Problems Live",
        description: "Triaged live audiovisual glitches, speaker timing shifts, and agenda adjustments without the audience ever noticing a hitch."
      }
    ],
    responsibilities: [
      "Plan, host, and emcee internal company events, celebrations, and team-building summits.",
      "Coordinate agendas, audio-visual technical setups, and interactive activities to connect in-office and remote colleagues.",
      "Work with leadership, HR, and facilities to ensure smooth execution without disrupting client work commitments."
    ],
    reflection: "Hosting company events is a reminder that teams do their best work when they feel connected to each other as real people, not just handles in a Slack channel. Empathy on stage directly translates to empathy in code reviews."
  },
  {
    id: "college-fest",
    title: "Creative Head of College Fest",
    organization: "University of Mumbai",
    dates: "2022",
    scale: "Hundreds of Inter-College Participants",
    skillsBuilt: [
      {
        name: "Planning from Concept to Reality",
        description: "Turned an abstract idea into tangible stage structures, lighting themes, schedule run-sheets, and promotional collateral."
      },
      {
        name: "Vendor & Material Negotiation",
        description: "Stretched limited student festival funds through resourceful material sourcing, DIY stage fabrication, and vendor negotiations."
      },
      {
        name: "Leading Student Volunteer Teams",
        description: "Coordinated fine arts teams, audio technicians, and security volunteers under strict showtime schedules."
      },
      {
        name: "Solving Problems Live",
        description: "Handled last-minute schedule collisions, stage electrical cutouts, and judging delays in real-time."
      }
    ],
    responsibilities: [
      "Led the physical decoration, branding, and stage design for our annual college festival.",
      "Coordinated student teams to run event schedules, sound checks, and judging panels on time.",
      "Turned high-level festival concepts into practical schedules and physical setups with a tight student budget."
    ],
    reflection: "This was the first time I realized that turning an idea into something hundreds of people show up for takes the exact same patience, attention to detail, and practical planning as building reliable software."
  }
];
