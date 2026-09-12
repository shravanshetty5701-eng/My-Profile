import { WorkExperience, CommunityRole, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Shravan Chandrashekhar Shetty",
  preferredName: "Shravan Shetty",
  title: "Front-End Developer & Community Builder",
  heroSubtitle: "I build front-end applications and spend my time outside work organizing community events and working with volunteers.",
  email: "shravanshetty5701@gmail.com",
  linkedin: "https://www.linkedin.com/in/shravan-shetty-48171a188",
  linkedinHandle: "shravan-shetty-48171a188",
  location: "Mumbai, Maharashtra, India",
  experienceYears: "3.4+",
  education: {
    degree: "BSc in Computer Science",
    institution: "University of Mumbai",
    graduation: "February 2022",
    cgpa: "8.5 CGPA"
  }
};

export const KEY_FACTS = [
  {
    value: "3.4+ Years",
    label: "Front-end development experience"
  },
  {
    value: "Promoted in ~2 Yrs",
    label: "Developer at BTS Strategy Alignment"
  },
  {
    value: "8.5 CGPA",
    label: "BSc in Computer Science, Univ of Mumbai"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "bts-developer",
    company: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    role: "Developer",
    dates: "2024 — Present",
    summary: "Promoted to Developer after two years. Worked on Angular-based simulation interfaces, production fixes, and new features.",
    bullets: [
      "Build and maintain responsive UI components and interactive modules for enterprise Angular-based simulation applications.",
      "Diagnose and resolve state synchronization issues and UI rendering bottlenecks across complex user flows.",
      "Work closely with designers, product managers, and international teams to ship reliable front-end features under tight deadlines."
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "HTML5", "CSS3", "Git"]
  },
  {
    id: "bts-associate-developer",
    company: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    role: "Associate Developer",
    dates: "2022 — 2024",
    summary: "Built client interfaces for business simulation tools and worked on daily bug fixes and UI updates.",
    bullets: [
      "Developed modular front-end components adhering to responsive layouts and accessibility guidelines.",
      "Investigated and fixed client-reported UI defects across various desktop and tablet screen sizes.",
      "Contributed consistently across sprints, earning promotion to Developer in approximately two years."
    ],
    technologies: ["Angular", "JavaScript", "HTML5", "CSS3", "Git"]
  },
  {
    id: "sdac-infotech",
    company: "SDAC Infotech",
    role: "Web Maintenance & Operations",
    dates: "2022",
    summary: "Hands-on website maintenance, updates, and cross-browser troubleshooting.",
    bullets: [
      "Maintained live client websites, scheduled routine updates, and monitored site uptime.",
      "Fixed styling inconsistencies and layout bugs across different browsers.",
      "Gained practical experience with real-world website maintenance and defensive coding."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Cross-browser Debugging"]
  },
  {
    id: "mumbai-university",
    company: "University of Mumbai",
    role: "BSc Computer Science & College Fest Creative Head",
    dates: "2019 — 2022",
    summary: "Completed degree with an 8.5 CGPA while leading the creative direction and stage setup for the annual college festival.",
    bullets: [
      "Studied software engineering principles, algorithms, data structures, and database management.",
      "Managed the creative theme, stage aesthetics, and schedule coordination for hundreds of festival attendees.",
      "Balanced academic commitments with live event planning and volunteer coordination."
    ],
    technologies: ["Algorithms", "Data Structures", "MySQL", "Event Coordination"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript", "React", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "MySQL", "MongoDB"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Cursor / GitHub Copilot", "Vite"]
  }
];

export const COMMUNITY_ROLES: CommunityRole[] = [
  {
    id: "ganpati-mandal",
    title: "Head of Local Ganpati Mandal",
    organization: "Annual Community Festival",
    dates: "Annual Event",
    scale: "10+ Volunteers • 500+ Community Members",
    responsibilities: [
      "Manage planning and on-ground logistics for an annual celebration bringing together over 500 community members.",
      "Coordinate with outside vendors for sound systems, lighting, stage infrastructure, and local municipal permits.",
      "Lead a tight-knit team of 10+ volunteers handling crowd coordination, food and prasad distribution, and safety arrangements.",
      "Make quick decisions on the ground when unpredictable monsoon weather or supply delays require immediate adjustments."
    ],
    reflection: "Running a large community festival taught me how to stay calm when things don't go according to plan, communicate clearly across different groups of people, and keep everyone focused on the goal."
  },
  {
    id: "bts-events",
    title: "Event Management Lead",
    organization: "BTS Strategy Alignment and Execution Pvt. Ltd.",
    dates: "2023 — Present",
    scale: "Company-Wide Gatherings & Summits",
    responsibilities: [
      "Plan, host, and emcee internal company events, celebrations, and team-building summits.",
      "Coordinate agendas, audio-visual technical setups, and interactive activities to connect in-office and remote colleagues.",
      "Work with leadership, HR, and facilities to ensure smooth execution without disrupting work commitments."
    ],
    reflection: "Hosting company events is a great reminder that teams do their best work when they feel connected to each other as real people, not just handles in a chat channel."
  },
  {
    id: "college-fest",
    title: "Creative Head of College Fest",
    organization: "University of Mumbai",
    dates: "2019 — 2022",
    scale: "Hundreds of Inter-College Participants",
    responsibilities: [
      "Led the physical decoration, branding, and stage design for our annual college festival.",
      "Coordinated student teams to run event schedules, sound checks, and judging panels on time.",
      "Turned high-level festival concepts into practical schedules and physical setups with a tight student budget."
    ],
    reflection: "This was the first time I realized that whether you're building software or staging an event, turning an idea into something people actually enjoy takes the exact same patience and practical planning."
  }
];
