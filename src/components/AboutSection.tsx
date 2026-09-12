import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/80">
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
            About Me
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            A little about my background and how I spend my time.
          </p>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-5 text-slate-300 text-base leading-relaxed"
        >
          <p>
            I work as a front-end developer during the week and spend a lot of my free time helping organize community
            events. Surprisingly, both involve many of the same skills — planning, coordinating people, solving
            problems quickly, and staying calm when something goes wrong.
          </p>

          <p>
            My background started with a <span className="text-slate-100 font-medium">BSc in Computer Science from the University of Mumbai</span>,
            where I graduated in February 2022 with an <span className="text-slate-100 font-medium">8.5 CGPA</span>. While studying computing fundamentals,
            I was also the Creative Head of our college festival — the person responsible for turning abstract themes into
            practical stage designs, schedules, and decor for hundreds of students and guests.
          </p>

          <p>
            After university, I began at <span className="text-slate-100 font-medium">SDAC Infotech</span> handling website maintenance, scheduled updates,
            and performance monitoring. It was unglamorous work, but it taught me firsthand how real production sites break and how
            to write code defensively. From there, I joined <span className="text-slate-100 font-medium">BTS Strategy Alignment and Execution</span> as
            an Associate Developer, building responsive UI components for enterprise Angular simulation applications. After two years of
            tackling front-end bugs, improving UI performance, and shipping features under delivery deadlines, I was promoted to Developer.
          </p>

          <p>
            Outside my day job, I serve as <span className="text-slate-100 font-medium">Head of my local Ganpati Mandal</span>, organizing an annual
            cultural festival that brings together 500+ community members, vendor coordination, and a dedicated team of 10+ volunteers.
            At BTS, I also help organize and host our internal company celebrations and summits.
          </p>

          {/* Expandable Read More Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden space-y-5 pt-3 border-t border-slate-800/80 text-slate-300"
              >
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-semibold text-slate-200 tracking-wide">
                    What simulation front-ends taught me about architecture
                  </h4>
                  <p>
                    At BTS, the applications we build aren't standard CRUD portals. They are interactive business simulations where corporate teams test strategic bets, manage simulated budgets, and make decisions under simulated pressure. The UI has to reflect intricate mathematical states cleanly, without lag or jank, even when user inputs trigger cascades across dozens of dependent calculations.
                  </p>
                  <p>
                    Working in this space taught me to treat component boundaries with discipline, keep state flow predictable with RxJS and Angular services, and write clean CSS that adapts smoothly whether a client opens the tool on a standard office laptop, an iPad, or a high-resolution boardroom monitor.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-semibold text-slate-200 tracking-wide">
                    What leading a community festival taught me about execution
                  </h4>
                  <p>
                    Managing an annual community festival in Mumbai is the ultimate live stress-test. You're dealing with local authorities for permissions, organizing power back-ups in case of sudden monsoon outages, scheduling sound engineers and logistics, and leading a tight team of 10+ volunteers to pull off an event for 500+ attendees.
                  </p>
                  <p>
                    When a generator trips during peak hours or rainfall floods a pedestrian walkway, there is no time for panic. You triage immediately, find a safe solution, and keep everyone around you focused. That exact same mindset applies when a production defect surfaces right before a client milestone: diagnose calmly, isolate the root cause, and fix it cleanly.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-semibold text-slate-200 tracking-wide">
                    Why I value both
                  </h4>
                  <p>
                    Both coding and community building share the exact same satisfaction: turning an abstract idea into something real that people can rely on and enjoy. Whether it's shipping a responsive UI module that saves users time or seeing families celebrate together at an event you helped run, the real reward is building for people.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <div className="pt-2">
            <button
              id="about-read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 focus:outline-none transition-colors group cursor-pointer"
            >
              <span>{isExpanded ? 'Read less' : 'Read more about my journey'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180 text-sky-300' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Work & Community Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 p-5 rounded-lg bg-[#111622] border border-slate-800"
        >
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-2 text-sky-400">
            Work & Community
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether I'm diagnosing an unexpected state bug in an Angular simulation or rerouting festival logistics during sudden Mumbai rains,
            the core approach is the same: break the problem down into manageable pieces, communicate clearly with the people involved,
            and keep a steady head when things don't go as planned.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
