import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
import { Mail, Whatsapp, Toptal, Copy, Check, ArrowUpRight } from "../components/icons";

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);
  const copy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };
  return (
    <button
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`transition-colors ${copied ? "text-accent" : "text-fog/60 hover:text-accent"}`}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  );
};

// No form — the contact page just forwards people to WhatsApp, email, or Toptal.
const ContactCard = ({ href, icon, iconClass, title, body, cta, trailing }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="fade-up"
    className="group flex flex-col rounded-lg border border-line bg-night-raised/50 p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-glow hover:-translate-y-1"
  >
    <div className={`w-11 h-11 rounded-lg border border-line bg-night-deep/60 flex items-center justify-center ${iconClass}`}>
      {icon}
    </div>
    <h3 className="flex items-center justify-between gap-2 font-mono text-white text-lg font-semibold mt-5">
      {title}
      <ArrowUpRight
        size={17}
        className="shrink-0 text-fog transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </h3>
    <p className="text-sm text-fog mt-2 flex-1 leading-relaxed">{body}</p>
    <div className="flex items-center justify-between gap-2 mt-5">
      <span className="font-mono text-xs text-accent inline-flex items-center gap-1">
        {cta} {"<"}~{">"}
      </span>
      {trailing}
    </div>
  </a>
);

const ContactSection = ({ full = false }) => {
  return (
    <section className={`container-site py-16 ${full ? "min-h-[70vh]" : ""}`}>
      <SectionHeading title="contacts" prefix={full ? "/" : "#"} />
      <p className="text-fog leading-relaxed max-w-2xl -mt-4 mb-10" data-aos="fade-up">
        I'm open to freelance work and interesting projects. No forms here — pick
        whatever is easiest for you and message me directly. I usually reply fast.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.whatsapp && (
          <ContactCard
            href={`https://wa.me/${site.whatsapp}`}
            icon={<Whatsapp size={20} />}
            iconClass="text-[#25D366]"
            title="WhatsApp"
            body="The fastest way to reach me — send a message and let's talk about your project."
            cta="chat on whatsapp"
          />
        )}
        <ContactCard
          href={`mailto:${site.email}`}
          icon={<Mail size={20} />}
          iconClass="text-accent"
          title="Email"
          body={`Prefer writing things down? Drop me a line at ${site.email} with some details about what you need.`}
          cta="send an email"
          trailing={<CopyButton value={site.email} label="email address" />}
        />
        <ContactCard
          href={site.toptalHire}
          icon={<Toptal size={20} />}
          iconClass="text-[#204ECF]"
          title="Toptal"
          body="Want to work through a vetted platform? Hire me directly on Toptal with contracts and payments handled for you."
          cta="hire me on toptal"
        />
      </div>
    </section>
  );
};

export default ContactSection;
