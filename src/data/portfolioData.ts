import { TimelineMilestone, SkillDemonstration, ProjectItem, LeadershipRole } from '../types';

export const PERSONAL_INFO = {
  name: "Shravan Chandrashekhar Shetty",
  preferredName: "Shravan Shetty",
  title: "Front-End Developer & Community Builder",
  hook: "Writing front-end code by day, building community events by evening. 3.4+ years solving problems through logic and leadership.",
  heroSubtitle: "I build responsive web applications and spend my time outside work organizing community events and working with volunteers.",
  email: "shravanshetty5701@gmail.com",
  phone: "+91 (Available upon inquiry)",
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
  hook: "I've spent the last 3.4 years doing two things that people don't usually expect to go together: writing front-end code, and organizing the events that bring people out of their houses.",
  paragraphs: [
    "It started with a BSc in Computer Science from the University of Mumbai, where I graduated in February 2022 with an 8.5 CGPA. But even while I was heads-down in coursework, I was also the Creative Head of my college fest — the person turning a loose idea into something hundreds of people would actually show up for. That instinct never really left me.",
    "After college, I cut my teeth at SDAC Infotech, keeping a live website running — maintenance, updates, performance monitoring, the unglamorous work that teaches you how things actually break. From there I joined BTS Strategy Alignment and Execution Private Limited as an Associate Developer, building responsive UI components for Angular-based simulation applications. I wasn't just writing code in isolation — I was resolving UI issues under deadline, optimizing performance, and working across teams to ship things that scaled. That work got noticed: within about two years, I was promoted to Developer.",
    "What most people don't see on a resume is that I was building the same muscles somewhere else at the same time. I'm the Head of my local Ganpati Mandal, which means I plan and run a large-scale community celebration every year for 500+ community members with a tight-knit team of 10+ volunteers — coordinating vendors, volunteers, budgets, and a hundred moving pieces that all have to land on the same day. And at BTS, I found my way onto the Event Management team, organizing and hosting the company's internal events, because apparently once people know you can run a festival, they hand you the office party too.",
    "Looking back, the throughline is obvious to me even if it isn't obvious on paper: whether I'm debugging a component or coordinating a mandal, I'm solving problems with the same instincts — plan carefully, communicate constantly with everyone involved, and stay steady when things go sideways. That's the person I want this website to introduce."
  ],
  throughlineCallout: "Whether I'm debugging an Angular component or coordinating a 500-person festival, I solve problems with the same instincts: plan carefully, communicate constantly, and stay steady when things go sideways."
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "bts-developer",
    title: "Developer",
    organization: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    dates: "2024 — Present",
    category: "code",
    badge: "Engineering Promotion",
    summary: "Promoted to Developer after two years of consistent front-end delivery and ownership.",
    bullets: [
      "Architect and maintain responsive Angular simulation front-ends utilized by global corporate clients.",
      "Diagnose and optimize UI rendering bottlenecks, complex RxJS state streams, and cross-browser quirks under tight release cycles.",
      "Collaborate directly with cross-functional design and product leads to translate business models into interactive components."
    ],
    tags: ["Angular", "TypeScript", "RxJS", "Enterprise UI", "State Management"]
  },
  {
    id: "bts-events-lead",
    title: "Event Management Lead",
    organization: "BTS Strategy Alignment & Execution",
    dates: "2023 — Present",
    category: "community",
    badge: "Company Culture",
    summary: "Organizing and hosting internal corporate gatherings, town halls, and cultural celebrations.",
    bullets: [
      "Spearhead event schedules, technical audio/video arrangements, and interactive engagement activities for company-wide gatherings.",
      "Bridge distributed and in-office teams through shared celebrations and seamless live execution.",
      "Work alongside operations and leadership to run memorable events without disrupting client project deadlines."
    ],
    tags: ["Event Planning", "Live Hosting", "Cross-Team Engagement", "Audio/Visual Coordination"]
  },
  {
    id: "ganpati-mandal-head",
    title: "Head of Local Ganpati Mandal",
    organization: "Annual Community Festival, Mumbai",
    dates: "Annual Milestone",
    category: "community",
    badge: "Community Leadership",
    summary: "Directing multi-day community celebrations for 500+ attendees with a dedicated volunteer team.",
    bullets: [
      "Manage end-to-end logistics: electrical systems, stage setups, sound engineering, and local municipal & police permits.",
      "Lead and mentor a 10+ person volunteer team handling crowd control, prasad distribution, and emergency contingency plans.",
      "Handle live crisis management during unpredictable Mumbai monsoon showers and vendor delivery shifts."
    ],
    tags: ["Logistics", "500+ Attendees", "10+ Volunteers", "Vendor Negotiation", "Crisis Management"]
  },
  {
    id: "bts-associate-developer",
    title: "Associate Developer",
    organization: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    dates: "2022 — 2024",
    category: "code",
    badge: "Front-End Engineering",
    summary: "Built modular front-end components and resolved high-priority UI tickets.",
    bullets: [
      "Developed reusable Angular components, interactive tables, and simulation control panels with responsive design.",
      "Resolved responsive UI layout defects across mobile, tablet, and widescreen enterprise displays.",
      "Earned accelerated promotion to Developer in approximately two years through consistent execution."
    ],
    tags: ["Angular", "JavaScript", "HTML/CSS", "Defect Resolution", "Git"]
  },
  {
    id: "sdac-infotech",
    title: "Web Maintenance & Operations",
    organization: "SDAC Infotech",
    dates: "2022",
    category: "code",
    badge: "Production Operations",
    summary: "Ground-level web maintenance, scheduled updates, and cross-browser troubleshooting.",
    bullets: [
      "Maintained live client portals, scheduled asset updates, and monitored uptime and performance.",
      "Resolved cross-browser CSS and JavaScript discrepancies to ensure consistent client experiences.",
      "Learned the fundamentals of production resilience and defensive coding practices."
    ],
    tags: ["Web Operations", "JavaScript", "Cross-Browser Testing", "Performance Monitoring"]
  },
  {
    id: "mumbai-university-fest",
    title: "BSc Computer Science & College Fest Creative Head",
    organization: "University of Mumbai",
    dates: "2019 — 2022",
    category: "education",
    badge: "Academic & Creative Foundation",
    summary: "Graduated with an 8.5 CGPA while directing the creative production of the annual inter-collegiate fest.",
    bullets: [
      "Studied software engineering principles, algorithms, data structures, and relational database systems.",
      "Led the creative direction, stage aesthetics, and on-ground scheduling for hundreds of festival attendees.",
      "Balanced rigorous computer science exams with late-night stage design and volunteer coordination."
    ],
    tags: ["8.5 CGPA", "Computer Science", "Creative Direction", "Student Leadership"]
  }
];

export const SKILL_DEMONSTRATIONS: SkillDemonstration[] = [
  {
    id: "angular",
    name: "Angular",
    category: "Frontend",
    description: "Core framework for my daily work at BTS. Building simulation interfaces with modular components, dependency injection, and RxJS reactive pipelines.",
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
    description: "Declarative component-driven UI library used for rapid client-side web applications, reactive hooks, and state-driven interfaces.",
    snippet: `const [metrics, setMetrics] = useState({ participants: 500, volunteers: 10 });
const throughput = useMemo(() => 
  (metrics.participants / metrics.volunteers).toFixed(1),
  [metrics]
);`,
    demoType: "react"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description: "Ensures type safety across complex simulation states and event coordination payloads, preventing runtime bugs before code reaches staging.",
    snippet: `interface FestivalMilestone {
  readonly id: string;
  volunteersAssigned: number;
  status: 'planning' | 'in-progress' | 'completed';
}
function assignCrew(task: FestivalMilestone, count: number): void { ... }`,
    demoType: "typescript"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    description: "Deep ES6+ foundation: closures, async/await, array transforms, and DOM event mechanics for custom interactive UI controls.",
    snippet: `const volunteerShifts = [4, 6, 5, 8, 3];
const totalHours = volunteerShifts.reduce((acc, curr) => acc + curr, 0);
const averageShift = (totalHours / volunteerShifts.length).toFixed(1);`,
    demoType: "javascript"
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Semantic markup, modern CSS Grid, Flexbox, custom animations, and responsive layouts that look pristine on any screen size.",
    snippet: `@keyframes pulse-status {
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.96); }
}
.live-indicator { animation: pulse-status 2s infinite ease-in-out; }`,
    demoType: "html-css"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design system enabling fast, clean UI execution with consistent spacing scales, typography, and dark-mode palettes.",
    snippet: `<div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-colors">
  <span className="text-xs font-mono text-sky-400">STATUS_OK</span>
</div>`,
    demoType: "tailwind"
  },
  {
    id: "node-express",
    name: "Node.js & Express",
    category: "Backend & Data",
    description: "RESTful API routes, middleware, and server-side utilities for event coordination endpoints and simulation data persistence.",
    snippet: `app.get('/api/festival/status', (req, res) => {
  const currentStatus = { stage: 'live', attendees: 520, volunteersActive: 12 };
  res.json({ success: true, data: currentStatus });
});`,
    demoType: "node"
  },
  {
    id: "databases",
    name: "MySQL & MongoDB",
    category: "Backend & Data",
    description: "Relational modeling for structured attendee registries, inventory tables, and NoSQL document storage for dynamic event logs.",
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
    description: "Branching strategies, clean pull requests, resolving merge conflicts, and automated code review workflows.",
    snippet: `git checkout -b feature/simulation-state-optimizer
git commit -m "refactor(sim): streamline RxJS subscription lifecycle"
git push origin feature/simulation-state-optimizer`,
    demoType: "git"
  },
  {
    id: "copilot-cursor",
    name: "Cursor & GitHub Copilot",
    category: "Developer Tools",
    description: "Leveraging modern AI-assisted engineering workflows for rapid boilerplate generation, defensive unit tests, and code refactoring.",
    snippet: `// AI-prompted defensive sanitization:
// "Ensure input values stay within simulation budget constraints"
const sanitizeBudget = (input: number) => Math.max(0, Math.min(input, 100000));`,
    demoType: "copilot"
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
    liveDemoLabel: "Launch Simulation Sandbox",
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
    liveDemoLabel: "Open Logistics Dashboard",
    interactiveType: "logistics"
  },
  {
    id: "interactive-dev-lab",
    title: "Mini Developer Interactive Lab",
    subtitle: "Four functional mini utilities demonstrating front-end problem solving",
    category: "hybrid",
    description: "A suite of four genuinely functional, interactive tools embedded directly into this portfolio: a business scenario calculator, a persistent task checklist, a live CSS keyframe visualizer, and a code strength validator.",
    whatBuilt: "Created four real standalone tools showcasing pure JavaScript algorithms, DOM manipulation, reactive state hooks, and client-side persistence.",
    whyBuilt: "Rather than asking visitors to trust a bullet list of skills, this lab lets them directly test and interact with working front-end code.",
    technologies: ["JavaScript ES6+", "React Hooks", "CSS Animations", "Web Storage API"],
    githubUrl: "https://github.com/shravanshetty",
    liveDemoLabel: "Try Interactive Lab",
    interactiveType: "calculator"
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
        name: "Planning & Budgeting",
        description: "Drafted end-to-end event roadmaps, calculated material expenses, managed community fund allocations, and secured vendor contracts months in advance."
      },
      {
        name: "Vendor & Civic Coordination",
        description: "Negotiated sound, lighting, scaffolding, and stage setups while securing necessary municipal and police permits across strict civic timelines."
      },
      {
        name: "Team Leadership",
        description: "Led and inspired a tight-knit squad of 10+ volunteers across 16-hour festival days, delegating crowd flow, prasad distribution, and security patrols."
      },
      {
        name: "Live Crisis Problem-Solving",
        description: "Solved unexpected on-ground challenges immediately, such as managing safe crowd re-routing during sudden monsoon downpours and generator switchovers."
      }
    ],
    responsibilities: [
      "Manage planning and on-ground logistics for an annual celebration bringing together over 500 community members.",
      "Coordinate with outside vendors for sound systems, lighting, stage infrastructure, and local municipal permits.",
      "Lead a tight-knit team of 10+ volunteers handling crowd coordination, food and prasad distribution, and safety arrangements.",
      "Make quick decisions on the ground when unpredictable monsoon weather or supply delays require immediate adjustments."
    ],
    reflection: "Running a large community festival taught me how to stay calm when things don't go according to plan, communicate clearly across different groups of people, and keep everyone focused on the goal. It's identical to triaging a high-priority production bug."
  },
  {
    id: "bts-events",
    title: "Event Management Lead",
    organization: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    dates: "2023 — Present",
    scale: "Company-Wide Gatherings & Cultural Summits",
    skillsBuilt: [
      {
        name: "Stakeholder Alignment",
        description: "Collaborated with executive leadership, HR, and facilities teams to design agendas that respect business hours while maximizing team joy."
      },
      {
        name: "Live Hosting & Emceeing",
        description: "Hosted company gatherings in person and over hybrid video feeds, creating warm, engaging atmospheres that broke down departmental silos."
      },
      {
        name: "Technical Audio/Visual Setup",
        description: "Managed stage sound checks, multi-screen presentations, and live interactive polling to ensure seamless hybrid participation."
      },
      {
        name: "Community Building in Tech",
        description: "Proved that developers thrive when workplace culture fosters human connection, trust, and shared celebration outside code reviews."
      }
    ],
    responsibilities: [
      "Plan, host, and emcee internal company events, celebrations, and team-building summits.",
      "Coordinate agendas, audio-visual technical setups, and interactive activities to connect in-office and remote colleagues.",
      "Work with leadership, HR, and facilities to ensure smooth execution without disrupting client work commitments."
    ],
    reflection: "Hosting company events is a great reminder that teams do their best work when they feel connected to each other as real people, not just handles in a Slack channel. Empathy on stage directly translates to empathy in code reviews."
  },
  {
    id: "college-fest",
    title: "Creative Head of College Fest",
    organization: "University of Mumbai",
    dates: "2019 — 2022",
    scale: "Hundreds of Inter-College Participants",
    skillsBuilt: [
      {
        name: "Concept to Execution",
        description: "Converted abstract creative themes into tangible 3D stage structures, banners, lighting themes, and promotional collateral."
      },
      {
        name: "Resource & Budget Scarcity",
        description: "Stretched limited student festival funds through ingenious material sourcing, DIY stage fabrication, and volunteer workgroups."
      },
      {
        name: "Cross-Disciplinary Coordination",
        description: "Coordinated fine arts teams, audio technicians, and security volunteers under strict showtime schedules."
      },
      {
        name: "Foundational Leadership",
        description: "The pivotal crucible where I realized that organizing people toward a common vision is just as rewarding as writing elegant software."
      }
    ],
    responsibilities: [
      "Led the physical decoration, branding, and stage design for our annual college festival.",
      "Coordinated student teams to run event schedules, sound checks, and judging panels on time.",
      "Turned high-level festival concepts into practical schedules and physical setups with a tight student budget."
    ],
    reflection: "This was the first time I realized that whether you're building software or staging an event, turning an idea into something people actually enjoy takes the exact same patience, attention to detail, and practical planning."
  }
];
