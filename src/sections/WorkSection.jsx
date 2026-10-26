import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectSpotlight from "../components/ProjectSpotlight";
import { categories, moreProjects, smallProjects, spotlightProjects } from "../data/projects";
import { ArrowUpRight, Github } from "../components/icons";
import { site } from "../data/site";

const INITIAL_COUNT = 6;

const countFor = (id) =>
  id === "all" ? moreProjects.length : moreProjects.filter((p) => p.category === id).length;

const MoreProjects = () => {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = filter === "all" ? moreProjects : moreProjects.filter((p) => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hidden = filtered.length - visible.length;

  const pick = (id) => {
    setFilter(id);
    setExpanded(false);
  };

  return (
    <div className="mt-24 md:mt-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">More projects</h3>
          <p className="text-fog mt-2">Stores, platforms and the apps I learned on.</p>
        </div>

        {/* filters — horizontally scrollable on phones */}
        <div
          role="tablist"
          aria-label="Filter projects"
          className="no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 flex gap-2 overflow-x-auto"
        >
          {categories
            .filter((c) => countFor(c.id) > 0)
            .map(({ id, label }) => {
              const selected = filter === id;
              return (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="project-grid"
                  onClick={() => pick(id)}
                  className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 min-h-[40px] text-sm transition-colors ${
                    selected
                      ? "border-accent bg-accent-soft text-white"
                      : "border-line text-fog hover:text-white hover:border-fog/50"
                  }`}
                >
                  {label}
                  <span className={`font-mono text-[11px] ${selected ? "text-accent" : "text-fog/60"}`}>
                    {countFor(id)}
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      <div id="project-grid" role="tabpanel" className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {hidden > 0 && (
        <div className="mt-8 flex justify-center">
          <button type="button" onClick={() => setExpanded(true)} className="btn btn-outline">
            Show {hidden} more
          </button>
        </div>
      )}
    </div>
  );
};

const CodeExperiments = () => (
  <div className="mt-24 md:mt-32">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Code experiments</h3>
        <p className="text-fog mt-2">Small repos: forms, servers, games and C exercises.</p>
      </div>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 text-sm text-fog hover:text-accent transition-colors"
      >
        <Github size={16} /> All on GitHub
      </a>
    </div>
    <ul className="mt-8 divide-y divide-line border-y border-line">
      {smallProjects.map(({ languages, title, body, link }) => (
        <li key={title}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-4 min-h-[56px] transition-colors hover:bg-night-raised/40 -mx-3 px-3 rounded-md"
          >
            <span className="flex-1 min-w-0 sm:flex sm:items-baseline sm:gap-4">
              <span className="block text-white font-medium">{title}</span>
              <span className="block text-sm text-fog truncate">{body}</span>
            </span>
            <span className="hidden md:block font-mono text-xs text-fog/70">{languages.join(" · ")}</span>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-fog transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const WorkSection = () => {
  return (
    <section id="work" className="section">
      <div className="max-w-2xl" data-aos="fade-up">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Real products, live and in use</h2>
        <p className="section-lead">
          Most of these I designed and built solo, from the database to the last animation. Open a
          case study for the decisions behind each one, or jump straight to the live site.
        </p>
      </div>

      <div className="mt-14 md:mt-20 space-y-20 md:space-y-28">
        {spotlightProjects.map((project, i) => (
          <ProjectSpotlight key={project.slug} project={project} index={i} />
        ))}
      </div>

      <MoreProjects />
      <CodeExperiments />
    </section>
  );
};

export default WorkSection;
