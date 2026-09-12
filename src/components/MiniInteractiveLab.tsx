import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  CheckSquare, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  Trash2, 
  Plus, 
  RotateCcw,
  Zap
} from 'lucide-react';

export default function MiniInteractiveLab() {
  const [activeTab, setActiveTab] = useState<'calc' | 'todo' | 'css' | 'entropy'>('calc');

  // 1. Calculator State
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcFormula, setCalcFormula] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalcDigit = (d: string) => {
    if (isCalculated) {
      setCalcDisplay(d);
      setCalcFormula(d);
      setIsCalculated(false);
      return;
    }
    if (calcDisplay === '0' && d !== '.') {
      setCalcDisplay(d);
      setCalcFormula(d);
    } else {
      setCalcDisplay(prev => prev + d);
      setCalcFormula(prev => prev + d);
    }
  };

  const handleCalcOp = (op: string) => {
    setIsCalculated(false);
    setCalcFormula(prev => `${prev} ${op} `);
    setCalcDisplay('0');
  };

  const handleCalcEquals = () => {
    try {
      // Safe mathematical evaluation for digits and simple arithmetic operators
      const sanitized = calcFormula.replace(/[^0-9+\-*/.]/g, '');
      // eslint-disable-next-line no-eval
      const result = Function(`'use strict'; return (${sanitized})`)();
      const formatted = Number(Number(result).toFixed(4)).toString();
      setCalcDisplay(formatted);
      setCalcFormula(prev => `${prev} = ${formatted}`);
      setIsCalculated(true);
    } catch {
      setCalcDisplay('Error');
    }
  };

  const clearCalc = () => {
    setCalcDisplay('0');
    setCalcFormula('');
    setIsCalculated(false);
  };

  // 2. Persistent To-Do List with localStorage
  const [todos, setTodos] = useState<Array<{ id: string; text: string; completed: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('shravan_portfolio_tasks');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      { id: '1', text: 'Calibrate Stage Sound Levels with Vendor', completed: true },
      { id: '2', text: 'Review volunteer crowd flow routes for 500+ attendees', completed: true },
      { id: '3', text: 'Optimize Angular RxJS subscription memory leak', completed: false }
    ];
  });

  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('shravan_portfolio_tasks', JSON.stringify(todos));
    } catch {
      // ignore
    }
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodos(prev => [...prev, { id: Date.now().toString(), text: newTodoText.trim(), completed: false }]);
    setNewTodoText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  // 3. CSS Animation Playground
  const [animSpeed, setAnimSpeed] = useState(1.5);
  const [animScale, setAnimScale] = useState(1.2);
  const [animRotate, setAnimRotate] = useState(45);
  const [animTiming, setAnimTiming] = useState<'ease' | 'linear' | 'cubic-bezier'>('ease');

  // 4. Password Strength & Code Entropy Evaluator
  const [securityInput, setSecurityInput] = useState('ShravanDev2026!@');
  const evaluateSecurity = (val: string) => {
    let score = 0;
    if (val.length >= 8) score += 25;
    if (val.length >= 12) score += 15;
    if (/[A-Z]/.test(val)) score += 20;
    if (/[0-9]/.test(val)) score += 20;
    if (/[^A-Za-z0-9]/.test(val)) score += 20;
    return Math.min(100, score);
  };
  const securityScore = evaluateSecurity(securityInput);

  return (
    <section id="dev-lab" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>MINI INTERACTIVE LAB • 4 REAL TOOLS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-display">
              The Developer Interactive Lab
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Real functional web utilities running client-side. Test the calculator, persist tasks to your browser's localStorage, or experiment with live CSS physics.
            </p>
          </div>

          <div className="flex gap-2 font-mono text-xs overflow-x-auto pb-1">
            {[
              { id: 'calc', name: 'Calculator', icon: Calculator },
              { id: 'todo', name: 'Local Tasks', icon: CheckSquare },
              { id: 'css', name: 'CSS Physics', icon: Sparkles },
              { id: 'entropy', name: 'Security Evaluator', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-sky-600 text-white border-sky-500'
                      : 'bg-[#111622] text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tool Sandbox Container */}
        <div className="rounded-xl border border-slate-700/80 bg-[#0d1117] p-5 sm:p-8 shadow-xl">
          {/* 1. CALCULATOR */}
          {activeTab === 'calc' && (
            <div className="max-w-xs mx-auto space-y-4">
              <div className="text-center">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  JavaScript Math Engine
                </span>
                <h3 className="text-base font-bold text-slate-100">Live Client-Side Calculator</h3>
              </div>

              {/* Screen */}
              <div className="p-4 rounded-xl bg-[#06080d] border border-slate-800 font-mono text-right space-y-1">
                <div className="text-[11px] text-slate-500 h-4 overflow-hidden text-ellipsis">
                  {calcFormula || '0'}
                </div>
                <div className="text-2xl font-bold text-sky-300 overflow-x-auto">
                  {calcDisplay}
                </div>
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-4 gap-2 font-mono text-sm">
                <button onClick={clearCalc} className="col-span-2 p-2.5 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-800/40 hover:bg-rose-900/50 cursor-pointer font-bold">
                  AC
                </button>
                <button onClick={() => handleCalcOp('/')} className="p-2.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 cursor-pointer font-bold">
                  /
                </button>
                <button onClick={() => handleCalcOp('*')} className="p-2.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 cursor-pointer font-bold">
                  *
                </button>

                {['7', '8', '9'].map(d => (
                  <button key={d} onClick={() => handleCalcDigit(d)} className="p-2.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 cursor-pointer">
                    {d}
                  </button>
                ))}
                <button onClick={() => handleCalcOp('-')} className="p-2.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 cursor-pointer font-bold">
                  -
                </button>

                {['4', '5', '6'].map(d => (
                  <button key={d} onClick={() => handleCalcDigit(d)} className="p-2.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 cursor-pointer">
                    {d}
                  </button>
                ))}
                <button onClick={() => handleCalcOp('+')} className="p-2.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 cursor-pointer font-bold">
                  +
                </button>

                {['1', '2', '3'].map(d => (
                  <button key={d} onClick={() => handleCalcDigit(d)} className="p-2.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 cursor-pointer">
                    {d}
                  </button>
                ))}
                <button onClick={handleCalcEquals} className="row-span-2 p-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold cursor-pointer flex items-center justify-center">
                  =
                </button>

                <button onClick={() => handleCalcDigit('0')} className="col-span-2 p-2.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 cursor-pointer">
                  0
                </button>
                <button onClick={() => handleCalcDigit('.')} className="p-2.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 cursor-pointer">
                  .
                </button>
              </div>
            </div>
          )}

          {/* 2. LOCALSTORAGE PERSISTENT TO-DO LIST */}
          {activeTab === 'todo' && (
            <div className="max-w-lg mx-auto space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    LocalStorage State Engine
                  </span>
                  <h3 className="text-base font-bold text-slate-100">Event &amp; Sprint Checklist</h3>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                  {todos.filter(t => t.completed).length} of {todos.length} Done
                </div>
              </div>

              {/* Add form */}
              <form onSubmit={addTodo} className="flex gap-2">
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder="Add a new task (saved in localStorage)..."
                  className="flex-1 px-3 py-2 rounded-lg bg-[#07090e] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-sky-500 font-sans"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Task</span>
                </button>
              </form>

              {/* Task list */}
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {todos.map(todo => (
                  <div
                    key={todo.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                      todo.completed 
                        ? 'bg-slate-900/40 border-slate-850 opacity-70' 
                        : 'bg-slate-900/90 border-slate-800'
                    }`}
                  >
                    <div
                      onClick={() => toggleTodo(todo.id)}
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {}}
                        className="rounded accent-sky-500 cursor-pointer"
                      />
                      <span className={`text-xs ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200 font-medium'}`}>
                        {todo.text}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-500 text-center font-mono">
                ✓ Tasks are safely persisted in your browser's LocalStorage across page reloads.
              </div>
            </div>
          )}

          {/* 3. CSS ANIMATION PLAYGROUND */}
          {activeTab === 'css' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Controls */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                    Live CSS Physics Visualizer
                  </span>
                  <h3 className="text-base font-bold text-slate-100 font-sans mt-0.5">Interactive Keyframe Studio</h3>
                </div>

                <div className="space-y-3 p-4 rounded-lg bg-[#07090e] border border-slate-800">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Animation Duration:</span>
                      <span className="text-sky-400">{animSpeed}s</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="4.0"
                      step="0.1"
                      value={animSpeed}
                      onChange={(e) => setAnimSpeed(Number(e.target.value))}
                      className="w-full accent-sky-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Scale Expansion:</span>
                      <span className="text-sky-400">{animScale}x</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="1.8"
                      step="0.05"
                      value={animScale}
                      onChange={(e) => setAnimScale(Number(e.target.value))}
                      className="w-full accent-sky-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Angular Rotation:</span>
                      <span className="text-sky-400">{animRotate}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      step="15"
                      value={animRotate}
                      onChange={(e) => setAnimRotate(Number(e.target.value))}
                      className="w-full accent-sky-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Visual Display Stage */}
              <div className="h-56 rounded-xl bg-gradient-to-b from-[#090d15] to-[#05070a] border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-amber-500 p-0.5 shadow-2xl flex items-center justify-center transition-all"
                  style={{
                    transform: `scale(${animScale}) rotate(${animRotate}deg)`,
                    transition: `transform ${animSpeed}s ${animTiming}`
                  }}
                >
                  <div className="w-full h-full bg-[#0d1117] rounded-2xl flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-sky-400 font-bold font-mono text-xs">LOGIC</span>
                    <span className="text-[9px] text-amber-400 font-mono font-semibold">&amp; COMMUNITY</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. SECURITY & ENTROPY EVALUATOR */}
          {activeTab === 'entropy' && (
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-center">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  Client-Side Security Analyzer
                </span>
                <h3 className="text-base font-bold text-slate-100 font-sans mt-0.5">Password &amp; Token Entropy Checker</h3>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  value={securityInput}
                  onChange={(e) => setSecurityInput(e.target.value)}
                  placeholder="Type any password or string..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-slate-800 text-slate-100 text-xs font-mono focus:outline-none focus:border-sky-500"
                />

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Entropy Score:</span>
                    <span className={securityScore > 75 ? 'text-emerald-400 font-bold' : securityScore > 50 ? 'text-amber-400 font-bold' : 'text-rose-400 font-bold'}>
                      {securityScore}% ({securityScore > 75 ? 'Strong' : securityScore > 50 ? 'Moderate' : 'Weak'})
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        securityScore > 75 ? 'bg-emerald-500' : securityScore > 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${securityScore}%` }}
                    />
                  </div>
                </div>

                {/* Check breakdown */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2">
                  <div className={`p-2 rounded border ${securityInput.length >= 8 ? 'border-emerald-500/30 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>
                    {securityInput.length >= 8 ? '✓' : '✗'} 8+ Characters
                  </div>
                  <div className={`p-2 rounded border ${/[A-Z]/.test(securityInput) ? 'border-emerald-500/30 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>
                    {/[A-Z]/.test(securityInput) ? '✓' : '✗'} Uppercase Letter
                  </div>
                  <div className={`p-2 rounded border ${/[0-9]/.test(securityInput) ? 'border-emerald-500/30 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>
                    {/[0-9]/.test(securityInput) ? '✓' : '✗'} Numeric Digit
                  </div>
                  <div className={`p-2 rounded border ${/[^A-Za-z0-9]/.test(securityInput) ? 'border-emerald-500/30 text-emerald-300' : 'border-slate-800 text-slate-500'}`}>
                    {/[^A-Za-z0-9]/.test(securityInput) ? '✓' : '✗'} Special Symbol
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
