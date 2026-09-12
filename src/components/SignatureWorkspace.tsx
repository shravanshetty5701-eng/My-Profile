import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  FolderTree, 
  Play, 
  RotateCcw, 
  Check, 
  Sparkles,
  Layers,
  Users,
  Calendar,
  Sliders
} from 'lucide-react';

interface FileTab {
  id: string;
  name: string;
  language: string;
  icon: typeof Code2;
  color: string;
}

const FILES: FileTab[] = [
  { id: 'simulation', name: 'simulation-engine.ts', language: 'typescript', icon: Code2, color: 'text-sky-400' },
  { id: 'festival', name: 'festival-coordinator.ts', language: 'typescript', icon: Users, color: 'text-amber-400' },
  { id: 'manifest', name: 'skills-manifest.json', language: 'json', icon: Layers, color: 'text-emerald-400' },
  { id: 'terminal', name: 'developer-terminal', language: 'bash', icon: Terminal, color: 'text-purple-400' }
];

export default function SignatureWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('simulation');

  // Interactive state for Simulation Tab
  const [simParams, setSimParams] = useState({
    headcount: 42,
    efficiency: 85,
    budgetUtilization: 70
  });
  const [simOutput, setSimOutput] = useState<{
    throughput: number;
    estimatedDeliveryWeeks: number;
    systemHealth: string;
  }>({
    throughput: 357,
    estimatedDeliveryWeeks: 3.2,
    systemHealth: 'Optimal'
  });
  const [simRunning, setSimRunning] = useState(false);

  const runSimulation = () => {
    setSimRunning(true);
    setTimeout(() => {
      const throughput = Math.round(simParams.headcount * (simParams.efficiency / 10));
      const weeks = Number((1200 / (throughput || 1)).toFixed(1));
      const health = simParams.budgetUtilization > 90 ? 'High Risk' : simParams.efficiency < 50 ? 'Degraded' : 'Optimal';
      setSimOutput({
        throughput,
        estimatedDeliveryWeeks: Math.max(1, weeks),
        systemHealth: health
      });
      setSimRunning(false);
    }, 300);
  };

  // Interactive state for Festival Coordinator Tab
  const [festivalAttendees, setFestivalAttendees] = useState(520);
  const [volunteers, setVolunteers] = useState(12);
  const [weatherCondition, setWeatherCondition] = useState<'clear' | 'monsoon'>('clear');

  // Interactive state for Terminal
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    { cmd: 'whoami', output: 'Shravan Chandrashekhar Shetty — Front-End Developer & Community Builder' },
    { cmd: 'cat status.txt', output: '3.4+ yrs exp | Angular, TypeScript, React | 500+ Member Fest Leader' },
    { cmd: 'help', output: 'Available commands: whoami, skills, experience, fest, contact, clear' }
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: string | React.ReactNode = '';
    switch (cleanCmd) {
      case 'help':
        output = 'Commands: whoami, skills, experience, fest, contact, clear';
        break;
      case 'whoami':
        output = 'Shravan Chandrashekhar Shetty — Developer at BTS Strategy Alignment & Community Organizer in Mumbai';
        break;
      case 'skills':
        output = 'Angular, TypeScript, JavaScript, React, HTML5, CSS3, Tailwind, Node.js, Express, MySQL, MongoDB, Git';
        break;
      case 'experience':
        output = 'BTS Developer (2024-Pres) | BTS Assoc. Dev (2022-2024) | SDAC Infotech (2022) | Mumbai Univ (BSc CS 8.5 CGPA)';
        break;
      case 'fest':
        output = 'Ganpati Mandal Head: 500+ Community Attendees, 10+ Volunteers, End-to-end logistics, vendor negotiation, crowd safety';
        break;
      case 'contact':
        output = 'Email: shravanshetty5701@gmail.com | LinkedIn: in/shravan-shetty-48171a188 | Location: Mumbai, India';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: "${cleanCmd}". Type "help" for a list of commands.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <section id="workspace" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#0a0d14]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIGNATURE FEATURE • LIVE WORKSPACE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
              Interactive Developer Workspace
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Explore the two dimensions of my work. Inspect real TypeScript simulation logic, test the festival coordination engine, or run live terminal commands.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Sandbox Ready</span>
          </div>
        </div>

        {/* IDE Container */}
        <div className="rounded-xl border border-slate-700/80 bg-[#0d1117] shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                shravan-workspace :: ~/dev/portfolio
              </span>
            </div>

            {/* Mode badge */}
            <div className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              TypeScript v5.8 • Live Sandbox
            </div>
          </div>

          {/* Tab bar */}
          <div className="bg-[#0f141c] border-b border-slate-800/90 flex overflow-x-auto scrollbar-none">
            {FILES.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono border-r border-slate-800 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0d1117] text-slate-100 border-t-2 border-t-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Main IDE Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Micro File Tree */}
            <div className="hidden lg:block lg:col-span-3 bg-[#0d1117] border-r border-slate-800/80 p-3 text-xs font-mono text-slate-400 select-none">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                <FolderTree className="w-3.5 h-3.5 text-sky-400" />
                <span>Explorer</span>
              </div>
              <div className="space-y-1 pl-1">
                <div className="text-slate-400">▾ src/</div>
                <div className="pl-3 space-y-1">
                  <div className="text-slate-400">▾ core/</div>
                  <button
                    onClick={() => setActiveTab('simulation')}
                    className={`w-full text-left pl-3 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      activeTab === 'simulation' ? 'bg-sky-500/10 text-sky-300 font-medium' : 'hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-sky-400" />
                    <span>simulation-engine.ts</span>
                  </button>
                  <div className="text-slate-400">▾ community/</div>
                  <button
                    onClick={() => setActiveTab('festival')}
                    className={`w-full text-left pl-3 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      activeTab === 'festival' ? 'bg-amber-500/10 text-amber-300 font-medium' : 'hover:text-slate-200'
                    }`}
                  >
                    <Users className="w-3 h-3 text-amber-400" />
                    <span>festival-coordinator.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('manifest')}
                    className={`w-full text-left pl-3 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      activeTab === 'manifest' ? 'bg-emerald-500/10 text-emerald-300 font-medium' : 'hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3 h-3 text-emerald-400" />
                    <span>skills-manifest.json</span>
                  </button>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`w-full text-left pl-1 py-1 rounded flex items-center gap-1.5 transition-colors ${
                      activeTab === 'terminal' ? 'bg-purple-500/10 text-purple-300 font-medium' : 'hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3 text-purple-400" />
                    <span>developer-terminal</span>
                  </button>
                </div>
              </div>

              {/* Sidebar Quick Insight */}
              <div className="mt-8 p-3 rounded-lg bg-[#111622] border border-slate-800 text-[11px] leading-relaxed">
                <span className="text-sky-400 font-semibold block mb-1">Dual Mindset Architecture</span>
                "Software state and event logistics both demand clear data flow and swift defensive handling."
              </div>
            </div>

            {/* Right Editor & Sandbox Pane */}
            <div className="lg:col-span-9 bg-[#0b0e14] p-4 sm:p-6 flex flex-col justify-between">
              {/* 1. SIMULATION ENGINE TAB */}
              {activeTab === 'simulation' && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-mono text-sky-400">BTS Angular Simulation Logic</div>
                      <h3 className="text-base font-semibold text-slate-100">
                        Interactive Simulation Scenario Runner
                      </h3>
                    </div>
                    <button
                      onClick={runSimulation}
                      disabled={simRunning}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-medium font-mono transition-colors shadow cursor-pointer"
                    >
                      {simRunning ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{simRunning ? 'Recalculating...' : 'Execute Calculation'}</span>
                    </button>
                  </div>

                  {/* Code View with Sliders */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Simulated Code preview */}
                    <div className="p-3.5 rounded-lg bg-[#07090e] border border-slate-800/90 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
                      <div className="text-slate-500">// Angular RxJS simulation state stream</div>
                      <div>
                        <span className="text-purple-400">export class</span>{' '}
                        <span className="text-yellow-300">SimulationState</span> {'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">headcount</span>: <span className="text-amber-400">{simParams.headcount}</span>;
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">efficiencyRating</span>: <span className="text-amber-400">{simParams.efficiency}%</span>;
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">budgetCapUtilization</span>: <span className="text-amber-400">{simParams.budgetUtilization}%</span>;
                      </div>
                      <div className="pl-4 text-slate-500">// Reactive calculation stream:</div>
                      <div className="pl-4">
                        <span className="text-purple-400">readonly</span> metrics$ = <span className="text-sky-300">this</span>.compute();
                      </div>
                      <div>{'}'}</div>
                    </div>

                    {/* Interactive Input Sliders */}
                    <div className="p-4 rounded-lg bg-[#111622] border border-slate-800 space-y-3.5 text-xs">
                      <div className="flex items-center justify-between text-slate-300 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5 text-sky-400" />
                          <span>Simulated Headcount</span>
                        </span>
                        <span className="font-mono text-sky-400">{simParams.headcount} engineers</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={simParams.headcount}
                        onChange={(e) => {
                          setSimParams({ ...simParams, headcount: Number(e.target.value) });
                        }}
                        className="w-full accent-sky-500 cursor-pointer"
                      />

                      <div className="flex items-center justify-between text-slate-300 font-medium pt-1">
                        <span>Team Efficiency Factor</span>
                        <span className="font-mono text-sky-400">{simParams.efficiency}%</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="100"
                        value={simParams.efficiency}
                        onChange={(e) => {
                          setSimParams({ ...simParams, efficiency: Number(e.target.value) });
                        }}
                        className="w-full accent-sky-500 cursor-pointer"
                      />

                      <div className="flex items-center justify-between text-slate-300 font-medium pt-1">
                        <span>Budget Cap Utilization</span>
                        <span className="font-mono text-sky-400">{simParams.budgetUtilization}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={simParams.budgetUtilization}
                        onChange={(e) => {
                          setSimParams({ ...simParams, budgetUtilization: Number(e.target.value) });
                        }}
                        className="w-full accent-sky-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Live Simulation Output Panel */}
                  <div className="p-4 rounded-lg bg-[#07090e] border border-sky-500/30">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Live Simulation Output Stream</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> State Synchronized
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 font-mono text-center">
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-bold text-sky-400">{simOutput.throughput}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Throughput Units/Sprint</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-bold text-amber-400">{simOutput.estimatedDeliveryWeeks} wks</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Est. Delivery Cycle</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-bold text-emerald-400">{simOutput.systemHealth}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">System Health</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. FESTIVAL COORDINATOR TAB */}
              {activeTab === 'festival' && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-mono text-amber-400">Community Operations Model</div>
                      <h3 className="text-base font-semibold text-slate-100">
                        Ganpati Mandal Live Logistics Dispatcher
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      500+ Attendees • 10+ Volunteers
                    </div>
                  </div>

                  {/* Interactive Festival Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#14141c] border border-amber-500/20 space-y-3.5 text-xs">
                      <div className="flex items-center justify-between text-slate-300 font-medium">
                        <span>Expected Attendees</span>
                        <span className="font-mono text-amber-400">{festivalAttendees} people</span>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="800"
                        step="20"
                        value={festivalAttendees}
                        onChange={(e) => setFestivalAttendees(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />

                      <div className="flex items-center justify-between text-slate-300 font-medium pt-1">
                        <span>Active Volunteer Squad</span>
                        <span className="font-mono text-amber-400">{volunteers} coordinators</span>
                      </div>
                      <input
                        type="range"
                        min="8"
                        max="20"
                        value={volunteers}
                        onChange={(e) => setVolunteers(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />

                      <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                        <span className="text-slate-300">Weather Condition</span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setWeatherCondition('clear')}
                            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                              weatherCondition === 'clear' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            Clear Sky
                          </button>
                          <button
                            onClick={() => setWeatherCondition('monsoon')}
                            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                              weatherCondition === 'monsoon' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            Monsoon Rain ☔
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Logistics Status Board */}
                    <div className="p-4 rounded-lg bg-[#07090e] border border-slate-800 font-mono text-xs space-y-2">
                      <div className="text-slate-500">// On-ground dispatch metrics</div>
                      <div className="flex justify-between border-b border-slate-800/80 pb-1">
                        <span className="text-slate-400">Ratio (Attendees/Volunteer):</span>
                        <span className="text-amber-300 font-bold">{(festivalAttendees / volunteers).toFixed(1)} : 1</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/80 pb-1">
                        <span className="text-slate-400">Crowd Flow Status:</span>
                        <span className={festivalAttendees / volunteers > 45 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                          {festivalAttendees / volunteers > 45 ? 'Elevated Pressure' : 'Well Managed'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/80 pb-1">
                        <span className="text-slate-400">Power Contingency:</span>
                        <span className="text-sky-300 font-bold">Dual Generators Online</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Contingency Plan:</span>
                        <span className={weatherCondition === 'monsoon' ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                          {weatherCondition === 'monsoon' ? 'Tarps & Waterproof Cables Active' : 'Standard Operations'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#14141c] border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
                    <span className="font-semibold text-amber-400 block mb-1">Key Leadership Insight:</span>
                    "When 500 people gather and rain starts falling in Mumbai, you can't push back the deployment. You adapt in real time, delegate calmly to your 10 volunteers, and keep the celebration safe."
                  </div>
                </div>
              )}

              {/* 3. SKILLS MANIFEST TAB */}
              {activeTab === 'manifest' && (
                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-emerald-400">skills-manifest.json</span>
                    <span className="text-slate-500 text-[11px]">JSON Schema Validated</span>
                  </div>
                  <pre className="p-4 rounded-lg bg-[#07090e] border border-slate-800/80 overflow-x-auto text-emerald-300/90 leading-relaxed">
{`{
  "developer": "Shravan Chandrashekhar Shetty",
  "experience": "3.4+ years",
  "currentRole": "Developer @ BTS Strategy Alignment & Execution",
  "frontend": [
    "Angular", "TypeScript", "JavaScript", "React", 
    "HTML5", "CSS3", "Tailwind CSS", "RxJS"
  ],
  "backendAndData": ["Node.js", "Express", "MySQL", "MongoDB"],
  "developerTools": ["Git", "GitHub", "Cursor", "Copilot", "Vite"],
  "leadershipCapabilities": {
    "annualFestivalAttendance": 500,
    "volunteerCoreTeam": "10+",
    "keyCompetencies": [
      "Event Planning & Roadmaps",
      "Vendor & Municipal Permitting",
      "Live Problem Triage",
      "Internal Corporate Summits"
    ]
  }
}`}
                  </pre>
                </div>
              )}

              {/* 4. DEVELOPER TERMINAL TAB */}
              {activeTab === 'terminal' && (
                <div className="space-y-3 font-mono text-xs flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-purple-400 border-b border-slate-800 pb-2 mb-3 flex items-center justify-between">
                      <span>shravan-terminal -- bash 5.2</span>
                      <span className="text-slate-500 text-[11px]">Type 'help' for commands</span>
                    </div>

                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                      {terminalHistory.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <span className="text-emerald-400">visitor@portfolio:~$</span>
                            <span className="text-slate-200">{item.cmd}</span>
                          </div>
                          <div className="text-slate-300 pl-4 border-l border-slate-800 text-[11px] leading-relaxed">
                            {item.output}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terminal input form */}
                  <form onSubmit={handleTerminalSubmit} className="pt-3 border-t border-slate-800 flex items-center gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">visitor@portfolio:~$</span>
                    <input
                      id="terminal-cli-input"
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="try 'skills', 'fest', 'whoami', 'contact', 'clear'..."
                      className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
