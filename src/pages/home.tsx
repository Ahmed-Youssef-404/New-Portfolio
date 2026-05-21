import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/features/HeroSection"
import { AboutSection } from "@/components/features/AboutSection"
import { SkillsSection } from "@/components/features/SkillsSection"
import { ProjectsSection } from "@/components/features/ProjectsSection"
import { ExperienceSection } from "@/components/features/ExperienceSection"
import { TechStackSection } from "@/components/features/TechStackSection"
import { ContactSection } from "@/components/features/ContactSection"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground !font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
