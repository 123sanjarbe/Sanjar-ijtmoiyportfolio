import BackgroundAtmosphere from "../components/BackgroundAtmosphere";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsCounter from "../components/StatsCounter";
import AboutSection from "../components/AboutSection";
import ProjectsBento from "../components/ProjectsBento";
import TechStack from "../components/TechStack";
import AchievementsTimeline from "../components/AchievementsTimeline";
import SocialChannels from "../components/SocialChannels";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Cyber Atmosphere Background */}
      <BackgroundAtmosphere />

      {/* Floating Glassmorphic Navigation */}
      <Navbar />

      {/* Hero Section with 3D Magnetic Parallax & Kinetic Typography */}
      <HeroSection />

      {/* Live Numeric Stats Counter */}
      <StatsCounter />

      {/* About & Interactive Terminal Section */}
      <AboutSection />

      {/* Bento Grid Featured Projects (3D Hover Tilt) */}
      <ProjectsBento />

      {/* Tech Arsenal & Skill Radar */}
      <TechStack />

      {/* Achievements, Timeline & Certifications */}
      <AchievementsTimeline />

      {/* Media Spotlight (Telegram, YouTube, Instagram, GitHub) */}
      <SocialChannels />

      {/* Interactive Contact & Inquiry Form */}
      <ContactSection />

      {/* Obsidian Footer */}
      <Footer />
    </main>
  );
}
