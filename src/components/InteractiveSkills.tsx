import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_DEMONSTRATIONS } from '../data/portfolioData';
import { SkillDemonstration } from '../types';
import { 
  Code2, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  GitBranch, 
  Database, 
  Server, 
  Eye
} from 'lucide-react';

export default function InteractiveSkills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDemonstration>(SKILL_DEMONSTRATIONS[0]);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Frontend' | 'Backend & Data' | 'Developer Tools'>('All');

  // Interactive demo states
  // 1. Angular RxJS demo
  const [angularCounter, setAngularCounter] = useState(42);
  const [angularStatus, setAngularStatus] = useState<'IDLE' | 'STREAMING' | 'EMITTED'>('IDLE');

  // 2. React state demo
  const [reactLikes, setReactLikes] = useState(12);
  const [reactChecked, setReactChecked] = useState(true);

  // 3. TypeScript contract demo
  const [tsPayloadType, setTsPayloadType] = useState<'valid' | 'invalid'>('valid');

  // 4. JavaScript Array Reducer demo
  const [jsShifts, setJsShifts] = useState([4, 6, 5, 8]);
  const [newShiftInput, setNewShiftInput] = useState('5');

  // 5. CSS Animation demo
  const [cssDuration, setCssDuration] = useState('1.5');
  const [cssShape, setCssShape] = useState<'pulse' | 'spin' | 'bounce'>('pulse');

  // 6. Tailwind utility preview
  const [twTheme, setTwTheme] = useState<'sky' | 'amber' | 'emerald'>('sky');

  // 7. Node / Express endpoint demo
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState(false);

  // 8. Database query demo
  const [dbMode, setDbMode] = useState<'sql' | 'mongo'>('sql');

  // 9. Git demo
  const [gitCommits, setGitCommits] = useState(['init: setup portfolio repo', 'feat: add angular simulation engine']);

  // 10. Copilot demo
  const [copilotApplied, setCopilotApplied] = useState(false);

  const filteredSkills = activeFilter === 'All' 
    ? SKILL_DEMONSTRATIONS 
    : SKILL_DEMONSTRATIONS.filter(s => s.category === activeFilter);

  const simulateApiCall = () => {
    setApiLoading(true);
    setTimeout(() => {
      setApiResponse(JSON.stringify({
        status: 200,
        message: "Endpoint executed successfully",
        server: "Node.js Express",
        timestamp: new Date().toISOString(),
        activeConnections: 18
      }, null, 2));
      setApiLoading(false);
    }, 400);
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE FEATURE • CLICK TO TEST</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
            Skills & Live Demonstrations
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Don't just read a list of buzzwords. Click any skill below to run an instant live demonstration of the concept in action.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {(['All', 'Frontend', 'Backend & Data', 'Developer Tools'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Skill Selector Grid */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
              Select a Skill to Inspect:
            </div>
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#131b29] border-sky-500/80 shadow-md shadow-sky-950/40 text-white ring-1 ring-sky-500/30'
                      : 'bg-[#111622]/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-[#151c2b]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-sky-400 shadow-sm shadow-sky-400' : 'bg-slate-600'}`} />
                    <div>
                      <div className="text-sm font-semibold">{skill.name}</div>
                      <div className="text-[11px] text-slate-400">{skill.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-sky-400/90 hidden sm:inline">
                      {isSelected ? 'Active Demo' : 'Click Demo'}
                    </span>
                    <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-sky-400 fill-sky-400' : 'text-slate-500'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Demonstration Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-slate-700 bg-[#0d1117] p-5 sm:p-6 shadow-xl space-y-5"
              >
                {/* Skill Title & Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wide">
                      {selectedSkill.category} Showcase
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                      <span>{selectedSkill.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                        Live Demo
                      </span>
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    id: {selectedSkill.id}
                  </div>
                </div>

                {/* Practical Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedSkill.description}
                </p>

                {/* Live Interactive Sandbox Box */}
                <div className="p-4 sm:p-5 rounded-lg bg-[#07090e] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-2">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Interactive Sandbox</span>
                    </span>
                    <span className="text-[11px] text-slate-500">Real-time React State</span>
                  </div>

                  {/* 1. ANGULAR DEMO */}
                  {selectedSkill.demoType === 'angular' && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="text-slate-400">
                        RxJS State Stream: <span className="text-sky-400">BehaviorSubject&lt;SimulationMetrics&gt;</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-slate-400">Stream Value: </span>
                          <span className="text-lg font-bold text-sky-400">{angularCounter}</span>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          {angularStatus}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setAngularStatus('STREAMING');
                            setAngularCounter(c => c + 1);
                            setTimeout(() => setAngularStatus('EMITTED'), 150);
                          }}
                          className="px-3 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-medium cursor-pointer transition-colors"
                        >
                          Dispatch +1 Action
                        </button>
                        <button
                          onClick={() => {
                            setAngularCounter(42);
                            setAngularStatus('IDLE');
                          }}
                          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition-colors"
                        >
                          Reset Stream
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 2. REACT DEMO */}
                  {selectedSkill.demoType === 'react' && (
                    <div className="space-y-4 text-xs">
                      <div className="text-slate-400 font-mono">
                        Declarative State Hook: <span className="text-sky-400">useState() &amp; useMemo()</span>
                      </div>
                      <div className="p-4 bg-slate-900/90 rounded border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-slate-200 font-semibold text-sm">Community Volunteer Badge</div>
                          <div className="text-slate-400 text-[11px]">Reactive UI state updates seamlessly</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setReactLikes(l => l + 1)}
                            className="px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-medium cursor-pointer flex items-center gap-1.5 shadow"
                          >
                            <span>👏</span>
                            <span>{reactLikes} Kudos</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. TYPESCRIPT DEMO */}
                  {selectedSkill.demoType === 'typescript' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="text-slate-400">Type Contract Safety Validation:</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setTsPayloadType('valid')}
                          className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
                            tsPayloadType === 'valid' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          Valid Contract Payload
                        </button>
                        <button
                          onClick={() => setTsPayloadType('invalid')}
                          className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
                            tsPayloadType === 'invalid' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          Violate Interface (Type Error)
                        </button>
                      </div>

                      <div className={`p-3 rounded border text-[11px] leading-relaxed ${
                        tsPayloadType === 'valid'
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                          : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                      }`}>
                        {tsPayloadType === 'valid' ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>TypeCheck Passed: FestivalMilestone satisfies all required schema properties.</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                            <span>TypeScript Error TS2322: Type 'string' is not assignable to type 'number'.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 4. JAVASCRIPT DEMO */}
                  {selectedSkill.demoType === 'javascript' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="text-slate-400">Array Reducer Calculation Engine:</div>
                      <div className="p-3 bg-slate-900 rounded border border-slate-800 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="text-slate-400 text-[11px]">Active Volunteer Shifts:</div>
                          <div className="text-sky-300 font-bold">[{jsShifts.join(', ')}] hours</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-[11px]">Total Summed Hours:</div>
                          <div className="text-amber-400 font-bold text-sm">
                            {jsShifts.reduce((a, b) => a + b, 0)} hrs
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={newShiftInput}
                          onChange={(e) => setNewShiftInput(e.target.value)}
                          className="w-20 px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-100 text-xs"
                          placeholder="hrs"
                        />
                        <button
                          onClick={() => {
                            const val = Number(newShiftInput);
                            if (val > 0) setJsShifts([...jsShifts, val]);
                          }}
                          className="px-3 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
                        >
                          Append Shift
                        </button>
                        <button
                          onClick={() => setJsShifts([4, 6, 5, 8])}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 5. HTML & CSS ANIMATION DEMO */}
                  {selectedSkill.demoType === 'html-css' && (
                    <div className="space-y-4 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-mono">Live CSS Keyframe Animation:</span>
                        <div className="flex gap-1">
                          {(['pulse', 'spin', 'bounce'] as const).map((shape) => (
                            <button
                              key={shape}
                              onClick={() => setCssShape(shape)}
                              className={`px-2 py-1 rounded font-mono text-[11px] cursor-pointer ${
                                cssShape === shape ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {shape}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="h-28 bg-slate-900 rounded border border-slate-800 flex items-center justify-center overflow-hidden">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 border border-white/20 shadow-lg flex items-center justify-center font-bold text-white text-xs ${
                            cssShape === 'pulse' ? 'animate-pulse' : cssShape === 'spin' ? 'animate-spin' : 'animate-bounce'
                          }`}
                        >
                          CSS3
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 6. TAILWIND DEMO */}
                  {selectedSkill.demoType === 'tailwind' && (
                    <div className="space-y-3 text-xs">
                      <div className="text-slate-400 font-mono">Utility Class Switcher:</div>
                      <div className="flex gap-2 font-mono">
                        <button
                          onClick={() => setTwTheme('sky')}
                          className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30 cursor-pointer"
                        >
                          theme: sky
                        </button>
                        <button
                          onClick={() => setTwTheme('amber')}
                          className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 cursor-pointer"
                        >
                          theme: amber
                        </button>
                        <button
                          onClick={() => setTwTheme('emerald')}
                          className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-pointer"
                        >
                          theme: emerald
                        </button>
                      </div>

                      <div className={`p-4 rounded-lg border transition-all ${
                        twTheme === 'sky' 
                          ? 'bg-sky-950/20 border-sky-500/40 text-sky-200' 
                          : twTheme === 'amber'
                          ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                          : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                      }`}>
                        <div className="font-semibold text-sm">Responsive Utility Composition</div>
                        <div className="text-[11px] opacity-80 mt-1">
                          Classes: flex items-center gap-3 p-4 rounded-lg bg-{twTheme}-950/20 border border-{twTheme}-500/40
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 7. NODE.JS DEMO */}
                  {selectedSkill.demoType === 'node' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Express Handler: GET /api/festival/status</span>
                        <button
                          onClick={simulateApiCall}
                          disabled={apiLoading}
                          className="px-3 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
                        >
                          {apiLoading ? 'Invoking...' : 'Send Request'}
                        </button>
                      </div>
                      <pre className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] text-emerald-400 overflow-x-auto">
                        {apiResponse || '// Click "Send Request" to invoke mock Express API'}
                      </pre>
                    </div>
                  )}

                  {/* 8. DATABASE DEMO */}
                  {selectedSkill.demoType === 'database' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Query Mode:</span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setDbMode('sql')}
                            className={`px-2.5 py-1 rounded cursor-pointer ${
                              dbMode === 'sql' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            MySQL
                          </button>
                          <button
                            onClick={() => setDbMode('mongo')}
                            className={`px-2.5 py-1 rounded cursor-pointer ${
                              dbMode === 'mongo' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            MongoDB
                          </button>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-300">
                        {dbMode === 'sql' ? (
                          <div>
                            <div className="text-sky-400">SELECT id, volunteer_name, role FROM festival_roster;</div>
                            <div className="mt-2 text-slate-400 border-t border-slate-800 pt-1">
                              Result: 12 rows returned in 1.4ms
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="text-emerald-400">db.festival_logs.find({'{'} year: 2026, status: "active" {'}'})</div>
                            <div className="mt-2 text-slate-400 border-t border-slate-800 pt-1">
                              Result: BSON Document retrieved
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 9. GIT DEMO */}
                  {selectedSkill.demoType === 'git' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Git Commit History Graph:</span>
                        <button
                          onClick={() => setGitCommits([...gitCommits, `feat: update live status ${Date.now().toString().slice(-4)}`])}
                          className="px-2.5 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
                        >
                          + New Commit
                        </button>
                      </div>
                      <div className="space-y-1.5 p-3 bg-slate-900 rounded border border-slate-800">
                        {gitCommits.map((c, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            <span className="text-slate-500">commit #{i + 1}:</span>
                            <span className="text-sky-300">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 10. COPILOT DEMO */}
                  {selectedSkill.demoType === 'copilot' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">AI Refactoring Diff Preview:</span>
                        <button
                          onClick={() => setCopilotApplied(!copilotApplied)}
                          className="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
                        >
                          {copilotApplied ? 'Revert to Raw Code' : 'Apply AI Optimization'}
                        </button>
                      </div>
                      <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px]">
                        {copilotApplied ? (
                          <div className="text-emerald-400">
                            + const sanitized = Math.max(0, Math.min(input, 100000)); // Refactored with zero runtime boundary exceptions
                          </div>
                        ) : (
                          <div className="text-slate-400">
                            - const val = input; // Raw assignment without defensive bounds
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Code Snippet Box */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                    <span>Reference Code Snippet:</span>
                    <span className="text-[10px] text-slate-500">TypeScript / Framework syntax</span>
                  </div>
                  <pre className="p-3.5 rounded-lg bg-[#07090e] border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed">
                    {selectedSkill.snippet}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
