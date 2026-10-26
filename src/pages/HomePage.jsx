import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import WorkSection from "../sections/WorkSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";
import { scrollToSection } from "../components/SectionLink";

const HomePage = () => {
  const { hash } = useLocation();

  // Arriving with a hash (from a project page or an old /about-style URL):
  // scroll once the sections are in the DOM.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => scrollToSection(id));
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <Hero />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
