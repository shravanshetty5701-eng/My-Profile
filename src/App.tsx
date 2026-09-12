import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import DualTimeline from './components/DualTimeline';
import SignatureWorkspace from './components/SignatureWorkspace';
import InteractiveSkills from './components/InteractiveSkills';
import ProjectShowcase from './components/ProjectShowcase';
import MiniInteractiveLab from './components/MiniInteractiveLab';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 antialiased font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Single-Page Dual-Brand Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Story (First-person authentic narrative) */}
        <AboutStory />

        {/* 3. The Signature WOW Feature: Interactive Developer Workspace */}
        <SignatureWorkspace />

        {/* 4. Dual Experience Timeline (Parallel Growth) */}
        <DualTimeline />

        {/* 5. Interactive Skills (Live Demonstration on Click) */}
        <InteractiveSkills />

        {/* 6. Interactive Project Showcase */}
        <ProjectShowcase />

        {/* 7. Mini Interactive Lab (4 Real Functional Utilities) */}
        <MiniInteractiveLab />

        {/* 8. Dedicated Leadership & Events Spotlight */}
        <LeadershipSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
