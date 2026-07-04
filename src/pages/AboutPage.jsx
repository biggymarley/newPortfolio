import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import FunFacts from "../sections/FunFacts";

const AboutPage = () => {
  return (
    <div className="pt-12">
      <AboutSection full />
      <SkillsSection />
      <FunFacts />
    </div>
  );
};

export default AboutPage;
