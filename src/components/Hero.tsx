import { PERSONAL_INFO, KEY_FACTS } from '../data/portfolioData';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Subtle Live Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">Open to front-end developer roles</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">Mumbai & Remote</span>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 font-display">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-sky-400">
            {PERSONAL_INFO.title}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl pt-2">
            {PERSONAL_INFO.heroSubtitle}
          </p>
        </motion.div>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8"
        >
          <motion.a
            id="hero-explore-work-btn"
            href="#experience"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>

          <motion.a
            id="hero-contact-btn"
            href="#contact"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Get in touch</span>
          </motion.a>

          <motion.a
            id="hero-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-slate-400 hover:text-slate-200 text-sm font-medium hover:bg-slate-800/50 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Short, quiet introductory summary & key facts */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 pt-8 border-t border-slate-800/80"
        >
          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mb-6">
            Based in Mumbai, India. Currently a Developer at BTS Strategy Alignment and Execution, where I build
            interactive simulation applications in Angular. I focus on writing reliable, responsive UI and keeping
            components easy to maintain.
          </p>

          {/* Understated 3 key facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {KEY_FACTS.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + idx * 0.08 }}
                className="py-3 border-l-2 border-slate-700 pl-3.5 hover:border-sky-500/80 transition-colors"
              >
                <div className="text-base font-semibold text-slate-100">
                  {fact.value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {fact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
