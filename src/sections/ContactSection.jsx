import { site } from "../data/site";
import CopyButton from "../components/CopyButton";
import { ArrowUpRight, Github, Mail, Toptal, Whatsapp } from "../components/icons";

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div
        className="relative overflow-hidden rounded-2xl border border-line bg-night-raised/60 p-6 sm:p-10 md:p-14"
        data-aos="fade-up"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Have a project in mind? Let's talk.
          </h2>
          <p className="mt-4 text-fog leading-relaxed md:text-lg">
            I'm open to freelance work and interesting projects. No forms: message me wherever is
            easiest. I usually reply fast.
          </p>
        </div>

        <div className="relative mt-10 grid md:grid-cols-3 gap-4">
          {/* WhatsApp — primary */}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl bg-accent text-night-deep p-5 transition-all hover:brightness-110 hover:shadow-glow"
          >
            <span className="w-11 h-11 shrink-0 rounded-lg bg-night-deep/10 flex items-center justify-center">
              <Whatsapp size={22} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold">WhatsApp</span>
              <span className="block text-sm opacity-80">Fastest reply</span>
            </span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Email — with copy */}
          <div className="group flex items-center gap-4 rounded-xl border border-line bg-night-deep/60 p-5 transition-colors hover:border-accent/60">
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 flex-1 min-w-0">
              <span className="w-11 h-11 shrink-0 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                <Mail size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-white">Email</span>
                <span className="block text-sm text-fog break-all">{site.email}</span>
              </span>
            </a>
            <CopyButton value={site.email} label="email address" className="-mr-2" />
          </div>

          {/* Toptal */}
          <a
            href={site.toptalHire}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-line bg-night-deep/60 p-5 transition-colors hover:border-accent/60"
          >
            <span className="w-11 h-11 shrink-0 rounded-lg bg-[#204ECF]/20 text-[#6c9bff] flex items-center justify-center">
              <Toptal size={20} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-white">Hire via Toptal</span>
              <span className="block text-sm text-fog">Contracts & payments handled</span>
            </span>
            <ArrowUpRight size={18} className="text-fog transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fog">
          <span>
            Discord: <span className="text-white font-mono">{site.discord}</span>
          </span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Github size={15} /> github.com/biggymarley
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
