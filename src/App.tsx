import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import DualTimeline from './components/DualTimeline';
import Skills from './components/Skills';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MobileTouchFeedback from './components/MobileTouchFeedback';
import Live3DBackground from './components/Live3DBackground';
import FloatingLogosBackground from './components/FloatingLogosBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0e1022] text-slate-100 selection:bg-pink-500/25 selection:text-pink-100 antialiased font-sans overflow-x-hidden">
      {/* Global Live 3D WebGL Simulation Background (Preserved & Interactive) */}
      <Live3DBackground />

      {/* Atmospheric Ambient Glows: Soft, warm, non-harsh depth */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-[#0e1022]/65 backdrop-blur-[0.5px]"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-600/15 via-purple-900/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-600/10 via-amber-600/5 to-transparent"
      />

      {/* Floating Tool Logos: Interactive brand nodes drifting across the background */}
      <FloatingLogosBackground />

      {/* Mobile Touch Response Animation Layer */}
      <MobileTouchFeedback />

      {/* Foreground Content Stack */}
      <div className="relative z-10">
        {/* Interactive Fluid Mouse Cursor & Tracker (Desktop) */}
        <CustomCursor />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero: Dual identity hook & clear CTA */}
          <Hero />

          {/* 2. The Story: First-person narrative, tight & punchy */}
          <AboutStory />

          {/* 3. Experience: Interleaved technical & leadership milestones */}
          <DualTimeline />

          {/* 4. Skills: Real logos & technical stack */}
          <Skills />

          {/* 5. Leadership & Events: Structured around core skills built */}
          <LeadershipSection />

          {/* 7. Contact: Direct Email, Phone, and LinkedIn */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
