import SectionHeading from "../components/SectionHeading";
import { smallProjects } from "../data/projects";
import { Github, ArrowUpRight } from "../components/icons";

const SmallProjects = () => {
  return (
    <section className="container-site py-16">
      <SectionHeading title="small-projects" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {smallProjects.map(({ languages, title, body, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            className="group flex flex-col rounded-lg border border-line bg-night-raised/50 p-5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1"
          >
            <h3 className="flex items-start justify-between gap-2 font-mono text-white font-semibold">
              {title}
              <ArrowUpRight
                size={16}
                className="shrink-0 mt-1 text-fog transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </h3>
            <p className="text-sm text-fog mt-2 flex-1">{body}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {languages.map((lang) => (
                <span key={lang} className="chip">
                  {lang}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-accent mt-4 inline-flex items-center gap-1.5">
              <Github size={13} /> view code
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SmallProjects;
