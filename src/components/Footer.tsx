import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0a0d14] text-slate-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-200">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-slate-500 mt-0.5">
            Front-End Developer • Mumbai, India
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-slate-200 transition-colors"
          >
            Email
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            LinkedIn
          </a>
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-200 transition-colors focus:outline-none"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
