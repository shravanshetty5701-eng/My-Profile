import { useState } from 'react';
import { motion } from 'motion/react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  ChevronRight, 
  Award,
  Shield,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';

export default function LeadershipSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const currentRole = LEADERSHIP_ROLES[activeRoleIndex];

  return (
    <section id="leadership" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNITY &amp; EVENT LEADERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
            Leadership, Culture &amp; Communities
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Building software and building communities require the same instincts: careful roadmapping, relentless communication, and staying steady when live plans shift.
          </p>

          {/* Role selector tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {LEADERSHIP_ROLES.map((role, idx) => {
              const isSelected = activeRoleIndex === idx;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#141824] border-amber-500/70 shadow-lg text-white ring-1 ring-amber-500/30'
                      : 'bg-[#0d1117] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[11px] font-mono text-amber-400 mb-1">{role.dates}</div>
                  <div className="text-sm font-bold text-slate-100">{role.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{role.organization}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Card for Selected Role */}
        <div className="rounded-2xl border border-slate-700/80 bg-[#0d1117] p-6 sm:p-8 shadow-xl space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                Spotlight Role
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                {currentRole.title}
              </h3>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">
                {currentRole.organization}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 font-semibold self-start sm:self-auto">
              <Award className="w-3.5 h-3.5" />
              <span>{currentRole.scale}</span>
            </div>
          </div>

          {/* 4 Core Skills Built Grid */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Core Leadership Skills Built:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentRole.skillsBuilt.map((skill, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#080b10] border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{skill.name}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-5 font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              On-Ground Execution Responsibilities:
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentRole.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reflection Quote */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 border border-amber-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
            <span className="text-amber-400 font-semibold not-italic block mb-1">Personal Reflection:</span>
            "{currentRole.reflection}"
          </div>
        </div>
      </div>
    </section>
  );
}
