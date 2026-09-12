import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            I'm open to front-end developer roles and technical collaborations. Feel free to reach out directly.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="space-y-4 max-w-xl">
          {/* Email row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-slate-800 text-sky-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.a
                id="contact-send-email-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors"
              >
                Send email
              </motion.a>
              <motion.button
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* LinkedIn row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-slate-800 text-[#0a66c2]">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">LinkedIn</div>
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

            <div>
              <motion.a
                id="contact-open-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <span>View profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex items-center gap-2 text-xs text-slate-400 pt-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Location: {PERSONAL_INFO.location} • Open to remote, hybrid, or on-site opportunities.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
