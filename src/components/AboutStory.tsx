import { motion } from 'motion/react';
import { THE_STORY, PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Users, Compass, CheckCircle2, MapPin, GraduationCap } from 'lucide-react';

export default function AboutStory() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>THE STORY • DUAL IDENTITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
            The Throughline
          </h2>
          <p className="text-base text-slate-300 font-medium mt-2 leading-relaxed">
            {THE_STORY.hook}
          </p>
        </div>

        {/* Narrative Content */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {THE_STORY.paragraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* The Throughline Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 p-6 rounded-xl border border-sky-500/30 bg-gradient-to-r from-sky-950/20 via-slate-900/60 to-amber-950/20 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-amber-400" />
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-sky-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-sky-300 uppercase tracking-wider mb-1">
                The Core Principle
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-medium italic leading-relaxed">
                "{THE_STORY.throughlineCallout}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-lg bg-[#0d1117] border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
              <Code2 className="w-4 h-4" />
              <span>ENGINEERING</span>
            </div>
            <div className="text-base font-bold text-slate-100">3.4+ Years Frontend</div>
            <div className="text-xs text-slate-400 mt-0.5">Angular • TypeScript • React</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0d1117] border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <Users className="w-4 h-4" />
              <span>LEADERSHIP</span>
            </div>
            <div className="text-base font-bold text-slate-100">500+ Community Fest</div>
            <div className="text-xs text-slate-400 mt-0.5">10+ Volunteers • BTS Events</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0d1117] border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>
            <div className="text-base font-bold text-slate-100">BSc Computer Science</div>
            <div className="text-xs text-slate-400 mt-0.5">Univ. of Mumbai (8.5 CGPA)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
