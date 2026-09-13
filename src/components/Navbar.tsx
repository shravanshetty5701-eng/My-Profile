import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; href: string; highlight?: boolean }[] = [
    { label: 'Story', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0e1022]/95 backdrop-blur-md border-b border-indigo-900/40 py-3 shadow-lg shadow-indigo-950/20'
          : 'bg-[#0e1022]/60 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Personal Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white flex items-center justify-center font-mono text-xs font-bold shadow-md group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm tracking-tight group-hover:text-pink-300 transition-colors flex items-center gap-1.5">
                <span>Shravan Shetty</span>
              </span>
              <span className="text-[11px] text-indigo-200/80 font-medium">
                Front-End &amp; Community
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs sm:text-sm text-slate-200 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  link.highlight
                    ? 'text-pink-300 font-semibold hover:text-pink-200'
                    : 'hover:text-pink-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Social & Email Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-950/60 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-950/60 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-indigo-300" />
            </a>

            <a
              id="nav-contact-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 ml-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 active:scale-95 text-white text-xs font-semibold shadow-md shadow-pink-950/30 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-950/80 active:scale-90 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="lg:hidden mt-3 pt-3 pb-4 border-t border-indigo-900/40 bg-[#12142d]/95 backdrop-blur-md rounded-2xl px-3 space-y-1 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm text-slate-200 hover:text-white hover:bg-indigo-900/40 active:scale-[0.98] transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-indigo-900/40 flex items-center justify-between px-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs text-pink-300 font-medium hover:underline flex items-center gap-1 active:scale-95 transition-transform"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 active:scale-95 transition-transform"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
