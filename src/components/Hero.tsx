import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowRight, Briefcase, Users, GraduationCap, Terminal, Heart, Layers, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-indigo-950/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          {/* Main Narrative & Action Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Name & Display Headline */}
            <ScrollReveal delay={0.08} yOffset={20}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
                  {PERSONAL_INFO.preferredName}
                </span>
              </h1>
            </ScrollReveal>

            {/* Title: Front-End Developer & Community Builder */}
            <ScrollReveal delay={0.18} yOffset={20}>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{PERSONAL_INFO.title}</span>
                </h2>
                {/* One-line hook capturing the dual identity */}
                <p className="text-base sm:text-lg text-pink-300 font-medium font-mono border-l-2 border-pink-400/70 pl-3">
                  &ldquo;{PERSONAL_INFO.hook}&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Human Narrative Introduction */}
            <ScrollReveal delay={0.24} yOffset={20}>
              <div className="text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  {PERSONAL_INFO.heroSubtitle}
                </p>
              </div>
            </ScrollReveal>

            {/* Action Buttons & Direct Links: Clear CTA ("Explore My Work") */}
            <ScrollReveal delay={0.3} yOffset={20}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="hero-explore-btn"
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 active:scale-95 text-white text-sm font-bold transition-all shadow-xl shadow-pink-950/50 cursor-pointer"
                >
                  <span>Explore Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  id="hero-contact-btn"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#161836]/90 hover:bg-[#1f2249] active:scale-95 text-slate-200 text-sm font-semibold border border-indigo-400/25 transition-all backdrop-blur-sm cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span>Get In Touch</span>
                </a>

                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-slate-200 hover:text-white hover:bg-indigo-900/40 active:scale-95 border border-indigo-400/20 text-xs font-medium transition-all backdrop-blur-sm"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-slate-200 hover:text-white hover:bg-indigo-900/40 active:scale-95 border border-indigo-400/20 text-xs font-medium transition-all backdrop-blur-sm"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-300" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Subtle Code/Dev Visual Motif */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal delay={0.25} yOffset={24}>
              <div className="p-6 rounded-2xl border border-indigo-400/25 bg-[#141733]/90 backdrop-blur-md shadow-2xl space-y-5">
                {/* Code Terminal Visual Motif */}
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40">
                  <div className="flex items-center gap-2 text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">
                    <Terminal className="w-4 h-4" />
                    <span>runtime-manifest.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE (PROD)</span>
                  </span>
                </div>

                {/* Subtle dev motif code preview */}
                <div className="p-3.5 rounded-xl bg-[#090b1c] border border-indigo-950 font-mono text-xs text-slate-300 space-y-1.5">
                  <div className="text-slate-500">// Dual-core operating instance</div>
                  <div>
                    <span className="text-pink-400">const</span>{' '}
                    <span className="text-purple-300">shravan</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">role:</span>{' '}
                    <span className="text-amber-300">&quot;Front-End Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">community:</span>{' '}
                    <span className="text-amber-300">&quot;Mandal Head &bull; 500+ attendees&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">experience:</span>{' '}
                    <span className="text-emerald-400">3.4</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">status:</span>{' '}
                    <span className="text-pink-300">&quot;ready to ship&quot;</span>
                  </div>
                  <div>{'};'}</div>
                </div>

                {/* Focus Items */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#0f1128]/80 border border-indigo-400/15 space-y-1 hover:border-indigo-400/30 transition-colors">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-300">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span>Front-End Engineering (BTS)</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-normal text-xs pl-7">
                      High-performance Angular interfaces, RxJS reactive pipelines, and decision simulations.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1128]/80 border border-indigo-400/15 space-y-1 hover:border-pink-400/30 transition-colors">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <div className="p-1 rounded-lg bg-pink-500/20 text-pink-300">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span>Community Leadership</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-normal text-xs pl-7">
                      Leading Ganpati Mandal (500+ attendees), BTS cultural events, and college fest operations.
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-2 border-t border-indigo-900/40">
                  <div className="text-xs font-mono text-indigo-300 font-medium mb-2.5 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-pink-400" />
                    <span>Daily Tools:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Angular', color: 'bg-red-500/15 text-red-300 border-red-500/30' },
                      { name: 'TypeScript', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
                      { name: 'RxJS', color: 'bg-pink-500/15 text-pink-300 border-pink-500/30' },
                      { name: 'React', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
                      { name: 'Tailwind CSS', color: 'bg-teal-500/15 text-teal-300 border-teal-500/30' },
                      { name: 'Node.js', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
                      { name: 'Git', color: 'bg-orange-500/15 text-orange-300 border-orange-500/30' },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${tech.color} font-medium`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Clean Grounded Highlights Strip with Entry Animation */}
        <ScrollReveal delay={0.35} yOffset={20}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40">
            <div className="p-4 rounded-2xl bg-[#141733]/80 backdrop-blur-md border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-mono font-semibold mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </div>
              <div className="text-base font-bold text-white">3.4+ Years</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Angular &bull; TypeScript &bull; RxJS</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141733]/80 backdrop-blur-md border border-indigo-400/20 hover:border-pink-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-pink-300 font-mono font-semibold mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>ROLE AT BTS</span>
              </div>
              <div className="text-base font-bold text-white">Developer</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Promoted from Associate</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141733]/80 backdrop-blur-md border border-indigo-400/20 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono font-semibold mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>COMMUNITY</span>
              </div>
              <div className="text-base font-bold text-white">500+ Attendees</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Mandal Head &bull; 10+ Volunteers</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141733]/80 backdrop-blur-md border border-indigo-400/20 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-mono font-semibold mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EDUCATION</span>
              </div>
              <div className="text-base font-bold text-white">8.5 CGPA</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">BSc CS, Univ. of Mumbai</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
