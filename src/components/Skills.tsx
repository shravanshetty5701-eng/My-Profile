import React, { useState, useEffect } from 'react';
import { 
  AngularLogo, 
  ReactLogo, 
  TypeScriptLogo, 
  JavaScriptLogo, 
  NodeLogo, 
  ExpressLogo, 
  Html5Logo, 
  Css3Logo, 
  MySqlLogo, 
  MongoLogo, 
  GitLogo, 
  TailwindLogo 
} from './ToolLogos';
import { Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

type SkillCategory = 'All' | 'Frontend' | 'Backend & Data' | 'DevOps & Tools';

interface ToolItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & Data' | 'DevOps & Tools';
  experience: string;
  logo: React.ComponentType<{ className?: string; size?: number }>;
  glowColor: string;
  oneLiner: string;
}

const TOOLS: ToolItem[] = [
  {
    id: 'angular',
    name: 'Angular',
    category: 'Frontend',
    experience: '3.4+ yrs',
    logo: AngularLogo,
    glowColor: 'rgba(221, 0, 49, 0.35)',
    oneLiner: 'Daily enterprise framework for reactive simulation UI and RxJS state management.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    experience: '3.4+ yrs',
    logo: TypeScriptLogo,
    glowColor: 'rgba(49, 120, 198, 0.35)',
    oneLiner: 'Strict compile-time type safety, modular contracts, and scalable architecture.'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    experience: '3.4+ yrs',
    logo: JavaScriptLogo,
    glowColor: 'rgba(247, 223, 30, 0.35)',
    oneLiner: 'Core language foundation: async/await, closures, functional methods, and DOM APIs.'
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    experience: 'Proficient',
    logo: ReactLogo,
    glowColor: 'rgba(97, 218, 251, 0.35)',
    oneLiner: 'Declarative component hierarchies, modern hooks, and reactive single-page apps.'
  },
  {
    id: 'css3',
    name: 'CSS3 & Animation',
    category: 'Frontend',
    experience: '3.4+ yrs',
    logo: Css3Logo,
    glowColor: 'rgba(38, 77, 228, 0.35)',
    oneLiner: 'Hardware-accelerated transforms, responsive flex/grid layouts, and cross-browser fixes.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    experience: 'Proficient',
    logo: TailwindLogo,
    glowColor: 'rgba(56, 189, 248, 0.35)',
    oneLiner: 'Utility-first tokenized styling, responsive breakpoints, and custom theme systems.'
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    experience: '3.4+ yrs',
    logo: Html5Logo,
    glowColor: 'rgba(228, 77, 38, 0.35)',
    oneLiner: 'Semantic document structure, WCAG AA accessibility standards, and clean DOM trees.'
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Backend & Data',
    experience: 'Working Knowledge',
    logo: NodeLogo,
    glowColor: 'rgba(51, 153, 51, 0.35)',
    oneLiner: 'Event-driven JavaScript runtime, npm build toolchains, and local prototyping servers.'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'Backend & Data',
    experience: 'Working Knowledge',
    logo: ExpressLogo,
    glowColor: 'rgba(255, 255, 255, 0.2)',
    oneLiner: 'Lightweight REST API routers, JSON middlewares, and backend service integration.'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Backend & Data',
    experience: 'Academic & Applied',
    logo: MySqlLogo,
    glowColor: 'rgba(0, 117, 143, 0.35)',
    oneLiner: 'Relational data modeling, foreign-key schemas, queries, and table indexing.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Backend & Data',
    experience: 'Working Knowledge',
    logo: MongoLogo,
    glowColor: 'rgba(19, 170, 82, 0.35)',
    oneLiner: 'NoSQL JSON document stores, collection pipelines, and flexible data models.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'DevOps & Tools',
    experience: '3.4+ yrs',
    logo: GitLogo,
    glowColor: 'rgba(240, 80, 50, 0.35)',
    oneLiner: 'Feature branching, semantic commits, code reviews, and release branch hygiene.'
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [highlightedToolId, setHighlightedToolId] = useState<string | null>(null);

  // Listen for clicks on floating background tool logos to highlight corresponding card
  useEffect(() => {
    const handleSelectTool = (e: Event) => {
      const customEv = e as CustomEvent<string>;
      if (customEv.detail) {
        const targetId = customEv.detail;
        if (TOOLS.some(t => t.id === targetId)) {
          setHighlightedToolId(targetId);
          // Auto switch category if filtered out
          const found = TOOLS.find(t => t.id === targetId);
          if (found && activeCategory !== 'All' && found.category !== activeCategory) {
            setActiveCategory('All');
          }
          // Clear highlight pulse after 3 seconds
          setTimeout(() => {
            setHighlightedToolId(null);
          }, 3000);
        }
      }
    };
    window.addEventListener('select-tool', handleSelectTool);
    return () => window.removeEventListener('select-tool', handleSelectTool);
  }, [activeCategory]);

  const categories: SkillCategory[] = ['All', 'Frontend', 'Backend & Data', 'DevOps & Tools'];

  const filteredTools = activeCategory === 'All'
    ? TOOLS
    : TOOLS.filter(t => t.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-indigo-950/40 relative bg-[#0c0e22]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161836]/90 text-xs font-mono text-purple-300 mb-2 border border-indigo-400/25">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>CORE TECHNICAL STACK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
                Skills &amp; Technologies
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200/80 mt-1 max-w-2xl font-normal">
                Production-tested tools across front-end engineering, simulation platforms, and web operations.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#111430] border border-indigo-400/20 self-start sm:self-auto">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-pink-500 text-white font-bold shadow-md shadow-pink-950/40'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTools.map((tool, index) => {
            const LogoComp = tool.logo;
            const isHighlighted = highlightedToolId === tool.id;

            return (
              <ScrollReveal key={tool.id} delay={Math.min(index * 0.03, 0.2)} yOffset={14}>
                <div
                  id={`skill-${tool.id}`}
                  className={`group relative p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    isHighlighted
                      ? 'bg-[#181d45] border-pink-400 shadow-xl shadow-pink-950/50 ring-2 ring-pink-400/50'
                      : 'bg-[#121533]/85 border-indigo-400/20 hover:border-indigo-400/40 hover:bg-[#161a3d] shadow-sm'
                  }`}
                >
                  {/* Subtle hover background glow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(circle at top right, ${tool.glowColor} 0%, transparent 65%)`
                    }}
                  />

                  {/* Top Row: Logo + Name + Experience Badge */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-[#0c0e22] border border-indigo-950 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                        <LogoComp size={22} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors truncate">
                          {tool.name}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                          {tool.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0c0e22] text-indigo-300/90 border border-indigo-900/60 font-medium whitespace-nowrap shrink-0">
                      {tool.experience}
                    </span>
                  </div>

                  {/* One Line Summary - Direct and concise */}
                  <p className="text-xs text-slate-300 leading-snug font-normal">
                    {tool.oneLiner}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
