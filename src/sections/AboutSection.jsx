import { NavLink } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";

const AboutSection = ({ full = false }) => {
  return (
    <section className="container-site py-16">
      <SectionHeading title="about-me" prefix={full ? "/" : "#"} />
      <div className="max-w-3xl" data-aos="fade-right">
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
    </section>
  );
};

export default AboutSection;
