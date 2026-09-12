import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, Phone, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [quickMsg, setQuickMsg] = useState({ name: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.message.trim()) return;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(quickMsg.subject || 'Opportunity Inquiry')}&body=${encodeURIComponent(`Hi Shravan,\n\n${quickMsg.message}\n\nFrom: ${quickMsg.name}`)}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT &amp; COLLABORATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Open to front-end developer roles, technical challenges, and community discussions. Feel free to reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Details Column */}
          <div className="lg:col-span-6 space-y-3.5">
            {/* Email row */}
            <div className="p-4 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="px-2.5 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors"
                  >
                    Send
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn row */}
            <div className="p-4 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-[#0a66c2]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors"
                    >
                      in/{PERSONAL_INFO.linkedinHandle}
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & Availability */}
            <div className="p-4 rounded-xl bg-[#111622] border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Phone: Direct call &amp; WhatsApp number available upon email inquiry.</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-400">
                  Location: {PERSONAL_INFO.location} • Open to Remote, Hybrid &amp; On-Site
                </span>
              </div>
            </div>
          </div>

          {/* Quick Message / Mailer Form */}
          <div className="lg:col-span-6 p-5 rounded-xl bg-[#0d1117] border border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
              <span>Quick Direct Dispatch</span>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-3 text-xs">
              <div>
                <input
                  type="text"
                  placeholder="Your Name / Organization"
                  value={quickMsg.name}
                  onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject (e.g. Front-End Opportunity)"
                  value={quickMsg.subject}
                  onChange={(e) => setQuickMsg({ ...quickMsg, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Your message or project scope..."
                  value={quickMsg.message}
                  onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#07090e] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Compose Email Draft</span>
              </button>

              {sentNotice && (
                <div className="text-center text-emerald-400 font-mono text-[11px] pt-1">
                  ✓ Opening your mail client with pre-filled details...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
