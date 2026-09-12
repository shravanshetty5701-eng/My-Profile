import { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { DualTrackCategory } from '../types';
import { Code2, Users, GraduationCap, Calendar, Clock, Briefcase } from 'lucide-react';

export default function DualTimeline() {
  const [filter, setFilter] = useState<DualTrackCategory>('all');

  const filteredMilestones = TIMELINE_MILESTONES.filter(m => {
    if (filter === 'all') return true;
    if (filter === 'code') return m.category === 'code' || m.category === 'education';
    if (filter === 'community') return m.category === 'community' || m.category === 'education';
    return true;
  });

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#0a0d14]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>PARALLEL GROWTH • 2019 — PRESENT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
              Dual Experience Timeline
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Parallel development: sharpening technical architecture in production while exercising on-ground community leadership in parallel.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex bg-[#111622] p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                filter === 'all' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setFilter('code')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                filter === 'code' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3 h-3 text-sky-300" />
              <span>Engineering</span>
            </button>
            <button
              onClick={() => setFilter('community')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                filter === 'community' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users className="w-3 h-3 text-amber-300" />
              <span>Community</span>
            </button>
          </div>
        </div>

        {/* Chronological Timeline Track */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {filteredMilestones.map((milestone, idx) => {
            const isCode = milestone.category === 'code';
            const isCommunity = milestone.category === 'community';
            const isEducation = milestone.category === 'education';

            const dotColor = isCode ? 'bg-sky-500 border-sky-300' : isCommunity ? 'bg-amber-500 border-amber-300' : 'bg-emerald-500 border-emerald-300';
            const badgeBg = isCode ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' : isCommunity ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Visual Node on Timeline Line */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${dotColor} bg-[#0d1117] transition-transform group-hover:scale-125`} 
                />

                {/* Card Container */}
                <div className="rounded-xl border border-slate-800 bg-[#0d1117] p-5 sm:p-6 transition-all group-hover:border-slate-700 shadow-md">
                  {/* Top Bar: Dates & Track Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.dates}</span>
                    </span>

                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeBg}`}>
                      {milestone.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                    {milestone.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    {milestone.organization}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-sans">
                    {milestone.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4 text-xs text-slate-300/90 font-sans">
                    {milestone.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isCode ? 'bg-sky-400' : isCommunity ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
