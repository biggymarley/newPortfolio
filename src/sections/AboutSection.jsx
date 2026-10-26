import { site } from "../data/site";
import ToptalBanner from "./ToptalBanner";

const quickFacts = [
  { label: "Based in", value: site.location },
  { label: "Works", value: "Remote, worldwide" },
  { label: "Experience", value: "5+ years" },
  { label: "Main stack", value: "React · Next.js · Node.js · Supabase" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7" data-aos="fade-up">
          <p className="eyebrow">About</p>
          <h2 className="section-title">{site.bio[0]}</h2>
          <div className="mt-6 space-y-4 text-fog leading-relaxed text-base md:text-lg">
            {site.bio.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6" data-aos="fade-up" data-aos-delay="100">
          <dl className="rounded-xl border border-line bg-night-raised/50 divide-y divide-line">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-xs text-fog">{label}</dt>
                <dd className="text-sm text-white text-right">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-xl border border-line p-5">
            <p className="font-mono text-xs text-fog">Off the clock</p>
            <ul className="mt-3 space-y-2">
              {site.facts.map((fact) => (
                <li key={fact} className="text-sm text-white/90 flex gap-2">
                  <span className="text-accent">·</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <ToptalBanner />
      </div>
    </section>
  );
};

export default AboutSection;
