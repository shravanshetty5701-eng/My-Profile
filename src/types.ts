export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  dates: string;
  summary?: string;
  bullets: string[];
  technologies?: string[];
}

export interface CommunityRole {
  id: string;
  title: string;
  organization: string;
  dates: string;
  scale?: string;
  responsibilities: string[];
  reflection: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
