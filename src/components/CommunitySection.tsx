import { COMMUNITY_ROLES } from '../data/portfolioData';
import { motion } from 'motion/react';

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
            Community Work
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Organizing cultural festivals, company gatherings, and working with volunteers.
          </p>
        </motion.div>

        {/* Roles List */}
        <div className="space-y-12">
          {COMMUNITY_ROLES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative pl-6 sm:pl-8 border-l border-amber-500/30 hover:border-amber-400/70 transition-colors duration-200"
            >
              {/* Marker with subtle amber tone */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500/80 border-2 border-[#0d1117] group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-200" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-amber-400/90">
                    {item.organization}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono shrink-0">
                  {item.dates}
                </div>
              </div>

              {/* Scale note if available */}
              {item.scale && (
                <div className="text-xs text-slate-400 mb-3 font-medium">
                  Scale: <span className="text-slate-300">{item.scale}</span>
                </div>
              )}

              {/* Responsibilities */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Responsibilities:
                </span>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-outside ml-4">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed pl-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Reflection */}
              <div className="p-4 rounded-lg bg-[#14141c] border border-amber-500/20 text-sm text-slate-300 leading-relaxed group-hover:border-amber-500/30 transition-colors">
                <span className="text-xs font-semibold text-amber-400/90 block mb-1">
                  What I learned:
                </span>
                <p className="text-slate-300 italic">
                  "{item.reflection}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
