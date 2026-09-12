import { WORK_EXPERIENCE } from '../data/portfolioData';
import { motion } from 'motion/react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/80">
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
            Experience
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Work history and roles I've held over the last 3.4+ years.
          </p>
        </motion.div>

        {/* Simplified Experience List */}
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative pl-6 sm:pl-8 border-l border-slate-800 hover:border-sky-500/50 transition-colors duration-200"
            >
              {/* Timeline marker with gentle hover response */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-[#0d1117] group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-200" />

              {/* Header: Title, Company, Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-sm font-medium text-sky-400">
                    {job.company}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono shrink-0">
                  {job.dates}
                </div>
              </div>

              {/* Short summary if available */}
              {job.summary && (
                <p className="text-sm text-slate-300 mb-3 italic">
                  {job.summary}
                </p>
              )}

              {/* Concise bullet points */}
              <ul className="space-y-2 mb-4 text-sm text-slate-300 list-disc list-outside ml-4">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {job.technologies && job.technologies.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs text-slate-500 mr-1">Tools:</span>
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/60 group-hover:border-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
