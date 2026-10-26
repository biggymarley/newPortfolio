import { site } from "../data/site";
import portrait from "../assets/portrait.webp";
import SectionLink from "../components/SectionLink";
import CopyButton from "../components/CopyButton";
import { ArrowDown, MapPin, Whatsapp } from "../components/icons";

const Availability = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-night-deep/70 px-3 py-1.5 text-xs text-fog">
    <span className="relative flex h-2 w-2">
      <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
    </span>
    Available for freelance projects
  </span>
);

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glow + grid */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(#3A4049 1px, transparent 1px), linear-gradient(90deg, #3A4049 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      <div className="relative container-site pt-28 pb-8 md:pt-36 md:pb-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* copy */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4" data-aos="fade-up">
            {/* small portrait on phones, the big card takes over on desktop */}
            <img
              src={portrait}
              alt=""
              width="56"
              height="56"
              className="lg:hidden w-14 h-14 rounded-full object-cover border border-line"
            />
            <Availability />
          </div>

          <p className="mt-6 font-mono text-sm text-fog" data-aos="fade-up" data-aos-delay="50">
            {site.name} <span className="text-line">/</span> {site.role}
          </p>
          <h1
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I build web products end to end,{" "}
            <span className="text-accent">from storefront to admin.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-fog max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="150">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3" data-aos="fade-up" data-aos-delay="200">
            <SectionLink to="work" className="btn btn-primary">
              See my work <ArrowDown size={16} />
            </SectionLink>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Whatsapp size={16} className="text-[#25D366]" /> Message me on WhatsApp
            </a>
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-x-1 text-sm text-fog" data-aos="fade-up" data-aos-delay="200">
            or email{" "}
            <a href={`mailto:${site.email}`} className="text-white underline decoration-line underline-offset-4 hover:decoration-accent break-all">
              {site.email}
            </a>
            <CopyButton value={site.email} label="email address" className="!min-w-[36px] !min-h-[36px]" />
          </p>
        </div>

        {/* portrait card (desktop) */}
        <div className="hidden lg:block lg:col-span-5" data-aos="fade-up" data-aos-delay="150">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl pointer-events-none"></div>
            <figure className="relative rounded-3xl border border-line bg-night-raised/60 p-3 shadow-2xl">
              <img
                src={portrait}
                alt={`Portrait of ${site.name}`}
                width="480"
                height="480"
                className="w-full aspect-square object-cover rounded-2xl"
              />
              <figcaption className="flex items-center justify-between gap-3 px-2 pt-4 pb-1">
                <div>
                  <p className="text-white font-semibold">{site.name}</p>
                  <p className="text-sm text-fog flex items-center gap-1.5 mt-0.5">
                    <MapPin size={14} /> {site.location} · works remotely
                  </p>
                </div>
                <a
                  href={site.toptal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[#204ECF]/60 bg-[#204ECF]/15 px-3 py-1.5 text-xs font-medium text-white hover:bg-[#204ECF]/30 transition-colors"
                >
                  Toptal · Top 3%
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
