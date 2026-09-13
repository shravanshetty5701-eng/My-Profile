export type DualTrackCategory = 'all' | 'code' | 'community';

export interface TimelineMilestone {
  id: string;
  title: string;
  organization: string;
  dates: string;
  category: 'code' | 'community' | 'education';
  badge: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface SkillDemonstration {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & Data' | 'Developer Tools';
  description: string;
  snippet: string;
  demoType: 'angular' | 'react' | 'typescript' | 'javascript' | 'html-css' | 'tailwind' | 'node' | 'database' | 'git' | 'copilot';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'code' | 'community' | 'hybrid';
  description: string;
  whatBuilt: string;
  whyBuilt: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoLabel?: string;
  interactiveType: 'simulation' | 'logistics' | 'calculator' | 'todo';
}

export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  dates: string;
  scale: string;
  skillsBuilt: {
    name: string;
    description: string;
  }[];
  responsibilities: string[];
  reflection: string;
}
