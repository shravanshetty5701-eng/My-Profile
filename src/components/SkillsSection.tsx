import { SKILL_CATEGORIES } from '../data/portfolioData';
import { motion } from 'motion/react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
            Skills
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Technologies and tools I use in development.
          </p>
        </motion.div>

        {/* What I work on callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 p-5 rounded-lg bg-[#111622] border border-slate-800"
        >
          <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-1.5">
            What I work on
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Most of my day-to-day work at BTS involves Angular and TypeScript, developing interactive simulation
            interfaces where responsiveness, clean state management, and reliable data rendering are critical.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.15 + catIdx * 0.08 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold text-slate-200 border-b border-slate-800 pb-2">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group text-sm text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-150" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
