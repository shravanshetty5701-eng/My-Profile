import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 selection:bg-sky-500/20 selection:text-sky-200 antialiased font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Experience */}
        <ExperienceSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Community Work */}
        <CommunitySection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
