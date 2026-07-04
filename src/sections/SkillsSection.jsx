import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

const SkillsSection = () => {
  return (
    <section className="container-site py-16">
      <SectionHeading title="skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map(({ title, languages }) => (
          <div
            key={title}
            data-aos="fade-up"
            className="rounded-lg border border-line bg-night-raised/50 transition-colors duration-300 hover:border-accent/40"
          >
            <h3 className="font-mono font-semibold text-white text-sm px-4 py-3 border-b border-line">
              <span className="text-accent">&gt;</span> {title}
            </h3>
            <div className="flex flex-wrap gap-1.5 p-4">
              {languages.map((lang) => (
                <span key={lang} className="chip">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
