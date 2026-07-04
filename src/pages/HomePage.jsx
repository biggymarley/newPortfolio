import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import SkillsSection from "../sections/SkillsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
