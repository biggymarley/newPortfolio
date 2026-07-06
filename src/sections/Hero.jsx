import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "../data/site";
import portrait from "../assets/portrait.webp";

const useTyped = (text, speed = 55, startDelay = 400) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    let interval;
    let i = 0;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return text.slice(0, count);
};

const Hero = () => {
  const typed = useTyped(site.role);
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>

      <div className="container-site pt-28 pb-12 lg:pt-32 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* left */}
        <div className="w-full lg:w-3/5" data-aos="fade-right">
          <p className="font-mono text-sm text-fog mb-4">
            <span className="text-accent">$</span> whoami
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white leading-tight">
            {site.name}
          </h1>
          <p className="font-mono text-xl md:text-2xl text-fog mt-3 min-h-[2rem]">
            <span className="text-accent">&gt;</span>{" "}
            <span className="text-white">{typed}</span>
            <span className="inline-block w-[0.55em] h-[1.1em] align-middle bg-accent ml-1 animate-blink"></span>
          </p>
          <p className="text-fog max-w-xl mt-6 leading-relaxed">{site.tagline}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <NavLink to="/projects" className="btn btn-primary">
              view my work
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline">
              contact me
            </NavLink>
          </div>
        </div>

        {/* right */}
        <div className="relative shrink-0" data-aos="fade-left" data-aos-delay="150">
          <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-xl border-2 border-accent/30 pointer-events-none"></div>
          <img
            src={portrait}
            alt={site.name}
            className="relative h-[260px] md:h-[320px] object-contain rounded-xl border border-line bg-night-deep/40"
          />
          <a
            href={site.toptal}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-4 flex items-center gap-2.5 rounded-md border border-line bg-night-deep/80 backdrop-blur px-3 py-2.5 font-mono text-sm text-fog hover:border-accent/60 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Currently working on <span className="text-white">Toptal</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
