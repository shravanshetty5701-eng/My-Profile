import { useState } from 'react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';
import { Users, CheckCircle2, Award, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function LeadershipSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const currentRole = LEADERSHIP_ROLES[activeRoleIndex];

  return (
    <section id="leadership" className="py-16 md:py-24 border-b border-indigo-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161836]/90 text-xs font-mono text-purple-300 mb-2 border border-indigo-400/25">
              <Users className="w-3.5 h-3.5 text-pink-400" />
              <span>ORGANIZATIONAL LEADERSHIP 🤝</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              Community &amp; Culture Leadership
            </h2>
            <p className="text-sm sm:text-base text-indigo-200/90 mt-1 max-w-2xl font-normal leading-relaxed">
              Directing community celebrations, managing volunteer teams, and hosting company events. The leadership muscles built here directly reinforce calm decision-making during high-stakes software delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* Role Selection Buttons */}
        <ScrollReveal delay={0.1} yOffset={16}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {LEADERSHIP_ROLES.map((role, idx) => {
              const isSelected = activeRoleIndex === idx;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`p-4 rounded-2xl border text-left active:scale-[0.98] transition-all cursor-pointer shadow-md ${
                    isSelected
                      ? 'bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-indigo-600/20 border-pink-400 text-white shadow-pink-950/20'
                      : 'bg-[#141733]/80 border-indigo-400/20 text-slate-200 hover:text-white hover:border-indigo-400/40'
                  }`}
                >
                  <div className="text-xs font-mono text-pink-300 font-semibold mb-1">{role.dates}</div>
                  <div className="text-sm sm:text-base font-bold text-white mb-0.5">{role.title}</div>
                  <div className="text-xs text-indigo-200/80 font-medium">{role.organization}</div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Detailed Role Breakdown Card */}
        <ScrollReveal delay={0.15} yOffset={20}>
          <div className="p-6 sm:p-8 rounded-2xl border border-indigo-400/20 bg-[#141733]/90 backdrop-blur-md space-y-6 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-indigo-900/40 gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentRole.title}
                </h3>
                <div className="text-sm text-indigo-200/90 font-medium mt-0.5">
                  {currentRole.organization}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/30 text-xs font-mono text-pink-300 font-semibold self-start sm:self-auto">
                <Award className="w-4 h-4 text-pink-400" />
                <span>{currentRole.scale}</span>
              </div>
            </div>

            {/* Core Leadership Skills Grid */}
            <div>
              <div className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider mb-3">
                Core Responsibilities &amp; Capabilities:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentRole.skillsBuilt.map((skill, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0f1128]/80 border border-indigo-400/15 space-y-1.5 hover:border-indigo-400/30 transition-colors">
                    <div className="flex items-center gap-2 text-pink-300 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal pl-6">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="pt-2">
              <div className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider mb-2.5">
                On-Ground Execution:
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {currentRole.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold text-base leading-none mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Reflection Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0f1128]/80 border border-indigo-400/15">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-pink-300 uppercase font-bold block mb-1">
                    Personal Takeaway:
                  </span>
                  <p className="text-sm sm:text-base text-white font-medium italic leading-relaxed">
                    &ldquo;{currentRole.reflection}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
