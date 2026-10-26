import { Link } from "react-router-dom";
import { ArrowUpRight, ClaudeSpark, Github } from "./icons";

const MAX_CHIPS = 4;

export const StackChips = ({ langs, claudeCode, max = MAX_CHIPS }) => {
  const shown = langs.slice(0, max);
  const rest = langs.length - shown.length;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((lang) => (
        <span key={lang} className="chip">
          {lang}
        </span>
      ))}
      {rest > 0 && <span className="chip text-fog/70">+{rest}</span>}
      {claudeCode && (
        <span className="chip inline-flex items-center gap-1 border-[#D97757]/50 text-[#D97757]">
          <ClaudeSpark size={12} /> Claude Code
        </span>
      )}
    </div>
  );
};

const cardClass =
  "group flex flex-col h-full rounded-xl border border-line bg-night-raised/50 overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-glow md:hover:-translate-y-1";

// Projects with a `slug` route to their internal case-study page; the rest
// (GitHub-only repos) open `link` externally.
const ProjectCard = ({ img, langs, title, disc, link, slug, claudeCode, launch }) => {
  const isRepo = link.includes("github.com");

  const content = (
    <>
      <div className="aspect-[16/10] overflow-hidden border-b border-line bg-night-deep">
        <img
          src={img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="flex items-start justify-between gap-2 text-white text-lg font-semibold tracking-tight">
          {title}
          <ArrowUpRight
            size={18}
            className="shrink-0 mt-1 text-fog transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h3>
        <p className="text-sm text-fog mt-2 flex-1 leading-relaxed">{disc}</p>
        {launch && (
          <p className="mt-3 text-xs text-fog">
            <span className="font-mono text-emerald-300">launched on </span>
            <span className="text-white/90">{launch.tags.join(" · ")}</span>
          </p>
        )}
        <div className="mt-4">
          <StackChips langs={langs} claudeCode={claudeCode} max={3} />
        </div>
        <span className="font-mono text-xs text-accent mt-4 inline-flex items-center gap-1.5">
          {slug ? (
            "case study →"
          ) : isRepo ? (
            <>
              <Github size={13} /> view code
            </>
          ) : (
            "view live →"
          )}
        </span>
      </div>
    </>
  );

  if (slug) {
    return (
      <Link to={`/projects/${slug}`} className={cardClass}>
        {content}
      </Link>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {content}
    </a>
  );
};

export default ProjectCard;
