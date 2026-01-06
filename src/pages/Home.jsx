import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StartBackground } from "../components/StartBackground";
import { ThemeToggle } from "../components/ThemeToggle"; 

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme */}
        <ThemeToggle />
        {/* BG */}
        <StartBackground />
        {/* NavBar */}
        <Navbar />
        {/* Min Content */}
        <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
    </div>
};