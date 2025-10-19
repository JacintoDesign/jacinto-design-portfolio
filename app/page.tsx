import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroGeometric
        badge="Design Portfolio"
        title1="Jacinto Design"
        title2="Creative Digital Solutions"
      />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
