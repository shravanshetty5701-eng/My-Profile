import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#090b1a]/95 backdrop-blur-md text-indigo-200/80 text-xs border-t border-indigo-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-white flex items-center gap-2 text-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-300">{PERSONAL_INFO.name}</span>
                <span className="text-indigo-400/50">•</span>
                <span className="text-indigo-200/90 font-medium">Front-End Developer at BTS ✨</span>
              </div>
              <div className="text-slate-300 mt-1 font-normal">
                © {currentYear} Shravan Shetty. Hand-crafted with TypeScript, React &amp; Three.js. Mumbai, India.
              </div>
            </div>

            <div className="flex items-center gap-5 text-slate-200 text-xs font-semibold">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-pink-300 transition-colors"
              >
                Email
              </a>
              <button
                id="footer-back-to-top-btn"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-white ml-2 px-3 py-1.5 rounded-full bg-[#181a38] border border-indigo-400/30 active:scale-95 shadow-sm"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-pink-400" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
