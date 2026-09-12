import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Users, 
  Terminal, 
  ArrowDown, 
  Sparkles, 
  Play, 
  MapPin, 
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-slate-800/80">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Status & Live Availability Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111622] border border-slate-800 shadow-sm text-xs font-mono text-slate-300 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-300">Open to Front-End Roles • Mumbai &amp; Remote</span>
        </motion.div>

        {/* Dual-Brand Identity Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center justify-center gap-2 text-xs font-mono mb-4 text-slate-400"
        >
          <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>LOGIC • CODE</span>
          </span>
          <span className="text-slate-600">+</span>
          <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>CREATIVITY • COMMUNITY</span>
          </span>
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 font-display mb-4"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-lg sm:text-2xl font-semibold text-slate-200 mb-4"
        >
          <span className="text-sky-400">Front-End Developer</span>
          <span className="text-slate-500 mx-2">&amp;</span>
          <span className="text-amber-400">Community Builder</span>
        </motion.div>

        {/* Hook */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-sans"
        >
          I've spent the last 3.4 years doing two things that people don't usually expect to go together: <span className="text-sky-300 font-medium">writing front-end code</span>, and <span className="text-amber-300 font-medium">organizing the events that bring people out of their houses</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-sky-950/50 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#workspace"
            className="px-5 py-2.5 rounded-lg bg-[#111622] hover:bg-[#161c2b] text-slate-200 text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Interactive Workspace</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-transparent hover:bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-800 transition-colors cursor-pointer"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social / Meta Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Mumbai, India</span>
          </div>
          <div className="hidden sm:block text-slate-700">•</div>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn Profile</span>
          </a>
          <div className="hidden sm:block text-slate-700">•</div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>shravanshetty5701@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
