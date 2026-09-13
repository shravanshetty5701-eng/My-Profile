import { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { DualTrackCategory } from '../types';
import { Calendar, Briefcase, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function DualTimeline() {
  const [filter, setFilter] = useState<DualTrackCategory>('all');

  const filteredMilestones = TIMELINE_MILESTONES.filter(m => {
    if (filter === 'all') return true;
    if (filter === 'code') return m.category === 'code' || m.category === 'education';
    if (filter === 'community') return m.category === 'community' || m.category === 'education';
    return true;
  });

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-indigo-950/40 bg-[#0c0e20]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header & Filter Controls */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161836]/90 text-xs font-mono text-purple-300 mb-2 border border-indigo-400/25">
                <Briefcase className="w-3.5 h-3.5 text-pink-400" />
                <span>CAREER &amp; COMMUNITY JOURNEY 🚀</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
                Experience &amp; Milestones
              </h2>
              <p className="text-sm sm:text-base text-indigo-200/90 mt-1 max-w-xl font-normal leading-relaxed">
                Parallel progression: delivering production front-end code at BTS while simultaneously directing large-scale community initiatives in Mumbai.
              </p>
            </div>

            {/* Filter Segmented Control */}
            <div className="flex bg-[#12142d] p-1 rounded-full border border-indigo-400/25 self-start md:self-auto shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('code')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all flex items-center gap-1.5 ${
                  filter === 'code'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Briefcase className="w-3 h-3" />
                <span>Engineering</span>
              </button>
              <button
                onClick={() => setFilter('community')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all flex items-center gap-1.5 ${
                  filter === 'community'
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Users className="w-3 h-3" />
                <span>Community</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Chronological Timeline List */}
        <div className="space-y-4">
          {filteredMilestones.map((milestone, index) => {
            const isCode = milestone.category === 'code';
            const isCommunity = milestone.category === 'community';

            const badgeColor = isCode 
              ? 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30' 
              : isCommunity 
                ? 'bg-pink-500/15 text-pink-300 border-pink-400/30' 
                : 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30';

            return (
              <ScrollReveal key={milestone.id} delay={Math.min(index * 0.06, 0.25)} yOffset={20}>
                <div
                  className="p-4 sm:p-5 rounded-2xl border border-indigo-400/20 bg-[#141733]/90 backdrop-blur-md hover:border-indigo-400/40 transition-all shadow-lg"
                >
                  {/* Top Row: Date & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                        <span>{milestone.dates}</span>
                      </span>
                      <span className="text-indigo-400/60">•</span>
                      <span className="text-xs sm:text-sm text-slate-200 font-semibold">
                        {milestone.organization}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${badgeColor}`}>
                      {milestone.badge}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                    {milestone.title}
                  </h3>

                  {/* Single Key Impact Point */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0c0e22]/70 border border-indigo-950/90 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 mt-2" />
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {milestone.bullets[0] || milestone.summary}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-indigo-900/40">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#0f1128] text-indigo-200/80 border border-indigo-400/15 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
