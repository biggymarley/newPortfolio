import { Link } from "react-router-dom";
import { categories } from "../data/projects";
import { StackChips } from "./ProjectCard";
import { ArrowRight, ArrowUpRight, GooglePlay } from "./icons";

const categoryLabel = (id) => categories.find((c) => c.id === id)?.label;

// Large alternating row for a headline project: screenshot in a browser frame,
// summary, stack, and two direct actions (case study + live site).
const ProjectSpotlight = ({ project, index }) => {
  const { slug, img, title, disc, link, langs, claudeCode, category, playStore, icon, launch } = project;
  const displayUrl = link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const flipped = index % 2 === 1;

  return (
    <article className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center" data-aos="fade-up">
      {/* screenshot */}
      <Link
        to={`/projects/${slug}`}
        aria-label={`${title} case study`}
        className={`group lg:col-span-7 block rounded-xl border border-line bg-night-deep overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-glow ${
          flipped ? "lg:order-2" : ""
        }`}
      >
        {playStore ? (
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-line bg-night-raised/60">
            <GooglePlay size={13} className="text-fog" />
            <span className="truncate font-mono text-[11px] text-fog">Google Play · Android app</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line bg-night-raised/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 truncate font-mono text-[11px] text-fog">{displayUrl}</span>
          </div>
        )}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={img}
            alt={playStore ? `${title} app screens` : `${title} home page`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      {/* summary */}
      <div className="lg:col-span-5">
        <p className="font-mono text-xs text-fog flex items-center gap-3">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-line"></span>
          {categoryLabel(category)}
        </p>
        <h3 className="mt-3 flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {icon && <img src={icon} alt="" width="40" height="40" className="w-10 h-10 rounded-xl" />}
          {title}
        </h3>
        {playStore && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
            <GooglePlay size={12} /> Published on Google Play
          </p>
        )}
        <p className="mt-3 text-fog leading-relaxed">{disc}</p>
        {launch && (
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-fog">
            <span className="font-mono text-emerald-300">launched on</span>
            {launch.tags.map((tag, i) => (
              <span key={tag} className="text-white/90">
                {tag}
                {i < launch.tags.length - 1 && <span className="text-line ml-2">·</span>}
              </span>
            ))}
          </p>
        )}
        <div className="mt-5">
          <StackChips langs={langs} claudeCode={claudeCode} max={5} />
        </div>
        <div className="mt-7 grid grid-cols-2 sm:flex gap-3">
          <Link to={`/projects/${slug}`} className="btn btn-primary">
            Case study <ArrowRight size={16} />
          </Link>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {playStore ? (
              <>
                <GooglePlay size={15} /> Google Play
              </>
            ) : (
              <>
                Live site <ArrowUpRight size={16} />
              </>
            )}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectSpotlight;
