import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  ExternalLink, 
  Github, 
  Play, 
  X, 
  Layers, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

export default function ProjectShowcase() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Simulation interactive state in modal
  const [modalSimScenario, setModalSimScenario] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');
  const [modalVolunteerDone, setModalVolunteerDone] = useState<Record<string, boolean>>({
    'stage-permit': true,
    'power-backup': true,
    'vendor-sound': false,
    'prasad-counters': true,
    'rain-tarps': false
  });

  const toggleTask = (key: string) => {
    setModalVolunteerDone(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#0a0d14]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT SHOWCASE • INTERACTIVE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Each project represents real-world execution. Click any card to launch an interactive live demonstration or inspect what was built and why.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Click cards to launch sandbox
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const isCommunity = project.category === 'community';
            const isHybrid = project.category === 'hybrid';
            const accentBorder = isCommunity ? 'hover:border-amber-500/70' : isHybrid ? 'hover:border-purple-500/70' : 'hover:border-sky-500/70';
            const accentBadge = isCommunity ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : isHybrid ? 'text-purple-400 bg-purple-500/10 border-purple-500/20' : 'text-sky-400 bg-sky-500/10 border-sky-500/20';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group rounded-xl border border-slate-800 bg-[#0d1117] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 shadow-lg ${accentBorder}`}
              >
                <div>
                  {/* Top Category Badge & Actions */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${accentBadge}`}>
                      {project.category.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                        title="Expand Sandbox"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* What & Why Callout Box */}
                  <div className="space-y-2 mb-4 p-3 rounded-lg bg-[#080b10] border border-slate-800/80 text-[11px]">
                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">What was built:</span>
                      <span className="text-slate-300 leading-relaxed">{project.whatBuilt}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-800/70">
                      <span className="text-slate-400 font-semibold block mb-0.5">Why it was built:</span>
                      <span className="text-slate-300 leading-relaxed">{project.whyBuilt}</span>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer group-hover:border-sky-500/50"
                  >
                    <Play className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
                    <span>{project.liveDemoLabel || 'Launch Demo'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0d1117] border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-4 pr-8">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  Interactive Sandbox Preview
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeModalProject.subtitle}
                </p>
              </div>

              {/* Modal Body depending on interactiveType */}
              <div className="space-y-4 pt-2">
                {activeModalProject.interactiveType === 'simulation' && (
                  <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                      <span>Simulation Strategic Mode:</span>
                      <div className="flex gap-1">
                        {(['conservative', 'balanced', 'aggressive'] as const).map((sc) => (
                          <button
                            key={sc}
                            onClick={() => setModalSimScenario(sc)}
                            className={`px-2.5 py-1 rounded text-xs capitalize cursor-pointer ${
                              modalSimScenario === sc ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {sc}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      <div className="p-3 bg-slate-900 rounded border border-slate-800">
                        <div className="text-xs text-slate-400">Risk Factor</div>
                        <div className="text-base font-bold text-amber-400">
                          {modalSimScenario === 'conservative' ? 'Low (12%)' : modalSimScenario === 'balanced' ? 'Moderate (35%)' : 'High (78%)'}
                        </div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded border border-slate-800">
                        <div className="text-xs text-slate-400">Projected ROI</div>
                        <div className="text-base font-bold text-emerald-400">
                          {modalSimScenario === 'conservative' ? '+14%' : modalSimScenario === 'balanced' ? '+32%' : '+68%'}
                        </div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded border border-slate-800">
                        <div className="text-xs text-slate-400">Time-to-Market</div>
                        <div className="text-base font-bold text-sky-400">
                          {modalSimScenario === 'conservative' ? '6 Months' : modalSimScenario === 'balanced' ? '4 Months' : '2.5 Months'}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      This replicates the real simulation dashboards built at BTS, where leadership teams tweak strategic levers and test organizational impact in a risk-free environment.
                    </p>
                  </div>
                )}

                {activeModalProject.interactiveType === 'logistics' && (
                  <div className="p-4 rounded-lg bg-[#14141c] border border-amber-500/20 space-y-3">
                    <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                      <span>Ganpati Festival Active Readiness Checklist:</span>
                      <span>500+ Attendees • 10+ Volunteers</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        { key: 'stage-permit', label: 'Municipal & Local Police Clearance Permits' },
                        { key: 'power-backup', label: 'Secondary Generator Load-Test Check' },
                        { key: 'vendor-sound', label: 'Audio Engineer Line Check & Acoustic Calibrations' },
                        { key: 'prasad-counters', label: '10+ Volunteer Shifts & Prasad Queue Stations' },
                        { key: 'rain-tarps', label: 'Emergency Monsoon Waterproofing Deployments' },
                      ].map((item) => (
                        <div
                          key={item.key}
                          onClick={() => toggleTask(item.key)}
                          className="flex items-center justify-between p-2.5 rounded bg-slate-900/90 border border-slate-800 cursor-pointer hover:bg-slate-850"
                        >
                          <span className={modalVolunteerDone[item.key] ? 'line-through text-slate-500' : 'text-slate-200'}>
                            {item.label}
                          </span>
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                            modalVolunteerDone[item.key] ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {modalVolunteerDone[item.key] ? 'Completed' : 'Pending Action'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModalProject.interactiveType === 'calculator' && (
                  <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 space-y-2 text-xs text-slate-300">
                    <p>
                      The Developer Interactive Lab is embedded below in the next section with four complete standalone working utilities.
                    </p>
                    <a
                      href="#dev-lab"
                      onClick={() => setActiveModalProject(null)}
                      className="inline-flex items-center gap-1 text-sky-400 font-medium hover:underline pt-2"
                    >
                      <span>Jump to Interactive Lab tools</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Footer in Modal */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Built by Shravan Shetty
                  </span>
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>View GitHub Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
