import { NavLink } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
import portrait from "../assets/about.webp";

const AboutSection = ({ full = false }) => {
  return (
    <section className="container-site py-16">
      <SectionHeading title="about-me" prefix={full ? "/" : "#"} />
      <div className="flex flex-wrap items-center justify-between gap-10">
        {/* text */}
        <div className="w-full md:w-[55%]" data-aos="fade-right">
          {site.bio.map((paragraph, i) => (
            <p
              key={paragraph}
              className={`text-fog leading-relaxed ${i > 0 ? "mt-4" : "text-white font-medium"}`}
            >
              {paragraph}
            </p>
          ))}
          {!full && (
            <NavLink to="/about" className="btn btn-outline mt-8">
              read more -{">"}
            </NavLink>
          )}
        </div>
        {/* portrait */}
        <div className="mx-auto relative" data-aos="fade-left">
          <div className="absolute -inset-2 translate-x-4 translate-y-4 rounded-xl border-2 border-accent/30 pointer-events-none"></div>
          <img
            src={portrait}
            alt={site.name}
            loading="lazy"
            className="relative rounded-xl border border-line bg-night-deep/40"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
