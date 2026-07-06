import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowUpRight, Check, ClaudeSpark } from "../components/icons";
import NotFoundPage from "./NotFoundPage";

// Default the live preview to a phone frame when the visitor is on a small screen.
const isSmallScreen = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [view, setView] = useState(() => (isSmallScreen() ? "mobile" : "desktop"));

  if (!project) return <NotFoundPage />;

  const { title, disc, link, img, langs, about, features, skills, selfDesigned, claudeCode } =
    project;
  const displayUrl = link.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const isMobileView = view === "mobile";

  return (
    <section className="container-site pt-28 pb-20">
      {/* breadcrumb */}
      <Link
        to="/projects"
        className="font-mono text-sm text-fog hover:text-accent transition-colors inline-flex items-center gap-2"
      >
        <span className="text-accent">$</span> cd ../projects
      </Link>

      {/* header */}
      <div className="mt-6 flex flex-wrap items-start justify-between gap-6" data-aos="fade-up">
        <div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white">
            <span className="text-accent">/</span>
            {title}
          </h1>
          <p className="text-fog mt-3 max-w-2xl">{disc}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          visit live site <ArrowUpRight size={16} />
        </a>
      </div>

      {/* live preview — browser chrome around an iframe */}
      <div
        className="mt-10 rounded-xl border border-line bg-night-deep/80 overflow-hidden"
        data-aos="fade-up"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-night-raised/60">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex-1 min-w-0 truncate font-mono text-xs text-fog bg-night-deep/80 border border-line rounded px-3 py-1 hover:text-accent transition-colors"
          >
            {displayUrl}
          </a>
          {/* desktop / mobile toggle */}
          <div className="flex items-center rounded border border-line overflow-hidden font-mono text-xs">
            <button
              type="button"
              onClick={() => setView("desktop")}
              aria-pressed={!isMobileView}
              className={`px-2.5 py-1 transition-colors ${
                !isMobileView ? "bg-accent-soft text-accent" : "text-fog hover:text-white"
              }`}
            >
              desktop
            </button>
            <button
              type="button"
              onClick={() => setView("mobile")}
              aria-pressed={isMobileView}
              className={`px-2.5 py-1 border-l border-line transition-colors ${
                isMobileView ? "bg-accent-soft text-accent" : "text-fog hover:text-white"
              }`}
            >
              mobile
            </button>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} in a new tab`}
            className="text-fog hover:text-accent transition-colors"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
        {/* frame */}
        <div
          className={
            isMobileView
              ? "relative bg-night-deep flex justify-center py-6 px-4"
              : "relative aspect-video bg-night-deep"
          }
        >
          {!frameLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-20"
              />
              <span className="relative font-mono text-sm text-fog animate-pulse">
                loading live preview…
              </span>
            </div>
          )}
          {isMobileView ? (
            <div className="relative w-full max-w-[375px] h-[70vh] max-h-[720px] rounded-[2rem] border-4 border-line bg-night-deep overflow-hidden shadow-glow">
              <iframe
                src={link}
                title={`${title} — live mobile preview`}
                loading="lazy"
                onLoad={() => setFrameLoaded(true)}
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          ) : (
            <iframe
              src={link}
              title={`${title} — live preview`}
              loading="lazy"
              onLoad={() => setFrameLoaded(true)}
              className="relative w-full h-full border-0"
              allow="fullscreen"
            />
          )}
        </div>
      </div>
      <p className="font-mono text-xs text-fog mt-3">
        {"//"} this is the real website running in an embedded frame — if it doesn't load,{" "}
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          open it in a new tab
        </a>
      </p>

      {/* details */}
      <div className="mt-14 grid lg:grid-cols-3 gap-10">
        {/* main column */}
        <div className="lg:col-span-2 space-y-12">
          <div data-aos="fade-up">
            <h2 className="font-mono text-xl md:text-2xl font-semibold text-white mb-4">
              <span className="text-accent">#</span>about
            </h2>
            <p className="text-fog leading-7">{about}</p>
            {selfDesigned && (
              <div className="mt-5 rounded-lg border border-accent/30 bg-accent-soft p-4 text-sm text-fog leading-6">
                <span className="font-mono text-accent">design: </span>
                I designed this project myself, end to end. I'm comfortable with Figma and
                other design tools, but I mostly design directly in code — skipping the
                separate design/handoff phase for much faster delivery.
              </div>
            )}
          </div>

          <div data-aos="fade-up">
            <h2 className="font-mono text-xl md:text-2xl font-semibold text-white mb-4">
              <span className="text-accent">#</span>what-i-built
            </h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-fog leading-6">
                  <Check size={16} className="shrink-0 mt-1 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* sidebar */}
        <aside className="space-y-10">
          <div data-aos="fade-up">
            <h2 className="font-mono text-lg font-semibold text-white mb-4">
              <span className="text-accent">#</span>tech-stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {langs.map((lang) => (
                <span key={lang} className="chip">
                  {lang}
                </span>
              ))}
              {claudeCode && (
                <span className="chip inline-flex items-center gap-1 border-[#D97757]/50 text-[#D97757]">
                  <ClaudeSpark size={12} /> built using Claude Code
                </span>
              )}
            </div>
          </div>

          <div data-aos="fade-up">
            <h2 className="font-mono text-lg font-semibold text-white mb-4">
              <span className="text-accent">#</span>skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="chip border-accent/40 text-white">
                  {skill}
                </span>
              ))}
              {selfDesigned && (
                <span className="chip border-accent/40 text-white">UI/UX design (Figma, design-in-code)</span>
              )}
            </div>
          </div>

          <div data-aos="fade-up" className="rounded-lg border border-line bg-night-raised/50 p-5">
            <p className="font-mono text-sm text-white mb-3">Like what you see?</p>
            <p className="text-sm text-fog mb-4">
              I can build something like this for you.
            </p>
            <Link to="/contact" className="btn btn-outline w-full">
              get in touch
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
