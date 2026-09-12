import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Code2, Users } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080b10] text-slate-400 text-xs border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-slate-200 flex items-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-normal">Code</span>
            <span className="text-slate-600">&amp;</span>
            <span className="text-amber-400 font-normal">Community</span>
          </div>
          <div className="text-slate-500 mt-1">
            Front-End Developer &amp; Community Builder • Mumbai, India
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-amber-400 transition-colors"
          >
            Email
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#workspace"
            className="hover:text-slate-200 transition-colors font-mono"
          >
            Workspace
          </a>
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
