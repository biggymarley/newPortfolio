import { site } from "../data/site";
import { ArrowUpRight } from "../components/icons";
import ToptalBadge from "../components/ToptalBadge";

const ToptalBanner = () => {
  return (
    <div
      data-aos="fade-up"
      className="group flex flex-col md:flex-row items-center gap-8 md:gap-10 rounded-xl border border-line bg-night-raised/50 p-8 transition-all duration-300 hover:border-accent/60 hover:shadow-glow"
    >
      <ToptalBadge hireUrl={site.toptalHire} />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-white font-semibold font-mono text-lg md:text-xl">
          Verified Toptal talent — top 3%
        </h3>
        <p className="text-sm md:text-base text-fog mt-3 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I work with clients worldwide through Toptal, the exclusive network of
          the top freelance software developers. Explore my professional client
          work on my profile.
        </p>
      </div>
      <a
        href={site.toptal}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline shrink-0"
      >
        view profile
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
};

export default ToptalBanner;
