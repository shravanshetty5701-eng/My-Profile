import { THE_STORY, PERSONAL_INFO } from '../data/portfolioData';
import { Quote, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutStory() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-indigo-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161836]/90 text-xs font-mono text-purple-300 mb-3 border border-indigo-400/25">
              <BookOpen className="w-3.5 h-3.5 text-pink-400" />
              <span>BACKGROUND &amp; PHILOSOPHY 📖</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              The Story Behind the Work
            </h2>
            <p className="text-base sm:text-lg text-indigo-200/90 font-medium mt-2 leading-relaxed">
              {THE_STORY.hook}
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative Paragraphs */}
        <div className="space-y-5 text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
          {THE_STORY.paragraphs.map((para, index) => (
            <ScrollReveal key={index} delay={index * 0.1} yOffset={16}>
              <p className="text-slate-200 leading-relaxed">
                {para}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* The Throughline Quote Callout */}
        <ScrollReveal delay={0.2} yOffset={18}>
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-[#141733]/90 backdrop-blur-md border-l-4 border-l-pink-400 border border-indigo-400/20 shadow-xl">
            <div className="flex items-start gap-3.5">
              <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-1" />
              <div>
                <div className="text-xs font-mono text-pink-300 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                  <span>The Working Principle</span>
                  <span>✨</span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                  &ldquo;{THE_STORY.throughlineCallout}&rdquo;
                </p>
                <div className="text-xs text-indigo-300 font-medium mt-2.5">
                  — Shravan Shetty
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Academic Foundation Note */}
        <ScrollReveal delay={0.25} yOffset={14}>
          <div className="mt-8 pt-6 border-t border-indigo-900/40 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-slate-300 gap-2">
            <div>
              <span className="text-white font-semibold">Education:</span> {PERSONAL_INFO.education.degree}, {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.graduation})
            </div>
            <div className="font-mono text-pink-300 font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 w-fit">
              Score: {PERSONAL_INFO.education.cgpa} 🎓
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
