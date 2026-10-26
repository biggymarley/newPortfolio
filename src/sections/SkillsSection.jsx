import { skillGroups } from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-2xl" data-aos="fade-up">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">The stack I ship with</h2>
      </div>

      <div className="mt-12 rounded-xl border border-line divide-y divide-line overflow-hidden" data-aos="fade-up">
        {skillGroups.map(({ title, languages }) => (
          <div key={title} className="grid md:grid-cols-12 gap-3 md:gap-6 p-5 md:p-6 bg-night-raised/30">
            <h3 className="md:col-span-3 font-mono text-sm text-white">
              <span className="text-accent">&gt;</span> {title}
            </h3>
            <div className="md:col-span-9 flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <span key={lang} className="chip !text-[13px] !px-2.5 !py-1">
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
