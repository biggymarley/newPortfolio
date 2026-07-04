import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
import { Mail, MessageCircle, Copy, Check } from "../components/icons";

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
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

const ContactSection = ({ full = false }) => {
  return (
    <section className={`container-site py-16 ${full ? "min-h-[70vh]" : ""}`}>
      <SectionHeading title="contacts" prefix={full ? "/" : "#"} />
      <div className="flex items-start flex-wrap gap-10 justify-between">
        {/* left */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <p className="text-fog leading-relaxed">
            I'm interested in freelance opportunities. However, if you have any
            other request or question, don't hesitate to contact me.
          </p>
        </div>
        {/* right */}
        <div className="mx-auto" data-aos="fade-left">
          <div className="rounded-xl border border-line bg-night-raised/50 p-6 min-w-[280px]">
            <h3 className="font-mono text-sm text-white font-semibold mb-5">
              <span className="text-accent">$</span> message me here
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle size={17} className="text-accent shrink-0" />
                <span className="font-mono text-sm text-fog flex-1">{site.discord}</span>
                <CopyButton value={site.discord} label="Discord username" />
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-accent shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-sm text-fog hover:text-accent transition-colors flex-1"
                >
                  {site.email}
                </a>
                <CopyButton value={site.email} label="email address" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
