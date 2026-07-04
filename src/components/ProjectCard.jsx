import { ArrowUpRight } from "./icons";

const ProjectCard = ({ img, langs, title, disc, link }) => {
  const isRepo = link.includes("github.com");
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      className="group flex flex-col rounded-lg border border-line bg-night-raised/50 overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-glow hover:-translate-y-1"
    >
      {/* image */}
      <div className="aspect-video overflow-hidden border-b border-line">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="flex items-start justify-between gap-2 text-white text-lg font-semibold font-mono">
          {title}
          <ArrowUpRight
            size={18}
            className="shrink-0 mt-1 text-fog transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h3>
        <p className="text-sm text-fog mt-2 flex-1">{disc}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {langs.map((lang) => (
            <span key={lang} className="chip">
              {lang}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs text-accent mt-4 inline-flex items-center gap-1">
          {isRepo ? "view code" : "view live"} {"<"}~{">"}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
