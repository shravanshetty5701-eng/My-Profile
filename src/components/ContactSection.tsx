import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [quickMsg, setQuickMsg] = useState({ name: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
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
    <section id="contact" className="py-16 md:py-24 border-b border-indigo-950/40 bg-[#0c0e20]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161836]/90 text-xs font-mono text-purple-300 mb-2 border border-indigo-400/25">
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>DIRECT COORDINATES 📬</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-indigo-200/90 mt-1 max-w-xl font-normal leading-relaxed">
              Open to front-end developer roles, high-impact Angular/TypeScript engineering, and community initiatives. Reach out directly via email, phone, or LinkedIn.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Direct Details Column */}
          <div className="md:col-span-6 space-y-4">
            {/* Email Card */}
            <ScrollReveal delay={0.05} yOffset={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141733]/90 backdrop-blur-md border border-indigo-400/20 shadow-lg hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-indigo-200/80 font-medium">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-pink-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-1.5 rounded-full bg-[#1e2248] hover:bg-[#282d5e] active:scale-95 text-slate-200 text-xs font-semibold border border-indigo-400/30 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-pink-300" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal delay={0.1} yOffset={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141733]/90 backdrop-blur-md border border-indigo-400/20 shadow-lg hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-indigo-200/80 font-medium">Phone Number</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyPhone}
                      className="px-3 py-1.5 rounded-full bg-[#1e2248] hover:bg-[#282d5e] active:scale-95 text-slate-200 text-xs font-semibold border border-indigo-400/30 transition-all cursor-pointer flex items-center gap-1 shadow-sm"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 text-xs">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-300" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 active:scale-95 text-xs font-semibold border border-emerald-500/30 transition-colors shadow-sm"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* LinkedIn Card */}
            <ScrollReveal delay={0.15} yOffset={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141733]/90 backdrop-blur-md border border-indigo-400/20 shadow-lg hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-indigo-200/80 font-medium">LinkedIn Profile</div>
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-bold text-white hover:text-pink-300 transition-colors"
                      >
                        linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                      </a>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#1e2248] hover:bg-[#282d5e] active:scale-95 text-slate-200 text-xs font-semibold border border-indigo-400/30 transition-colors shadow-sm"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* GitHub Card */}
            <ScrollReveal delay={0.2} yOffset={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141733]/90 backdrop-blur-md border border-indigo-400/20 shadow-lg hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-indigo-200/80 font-medium">GitHub Repository</div>
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-bold text-white hover:text-pink-300 transition-colors"
                      >
                        github.com/shravanshetty
                      </a>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#1e2248] hover:bg-[#282d5e] active:scale-95 text-slate-200 text-xs font-semibold border border-indigo-400/30 transition-colors shadow-sm"
                  >
                    View
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={0.25} yOffset={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141733]/90 backdrop-blur-md border border-indigo-400/20 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200/80 font-medium">Current Location</div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 font-normal">
                      Open to in-office in Mumbai, hybrid, and remote roles
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Note Form Column */}
          <div className="md:col-span-6">
            <ScrollReveal delay={0.15} yOffset={20}>
              <form
                onSubmit={handleQuickSubmit}
                className="p-6 sm:p-7 rounded-2xl bg-[#141733]/95 backdrop-blur-md border border-indigo-400/25 space-y-4 shadow-2xl"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-indigo-900/40">
                  <MessageSquare className="w-4 h-4 text-pink-400" />
                  <h3 className="text-base font-bold text-white">
                    Send a Direct Message ✉️
                  </h3>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-indigo-200 font-semibold mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={quickMsg.name}
                    onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                    placeholder="e.g. Hiring Team / Event Lead"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0f1128]/90 border border-indigo-400/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-indigo-200 font-semibold mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={quickMsg.subject}
                    onChange={(e) => setQuickMsg({ ...quickMsg, subject: e.target.value })}
                    placeholder="e.g. Front-End Opportunity / Tech Chat"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0f1128]/90 border border-indigo-400/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-indigo-200 font-semibold mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={quickMsg.message}
                    onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                    placeholder="Hi Shravan, reached out after checking your portfolio..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0f1128]/90 border border-indigo-400/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 active:scale-[0.98] text-white text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-pink-950/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email Client</span>
                </button>

                {sentNotice && (
                  <div className="text-xs text-emerald-400 text-center font-mono font-medium">
                    Draft opened in your default email client.
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
