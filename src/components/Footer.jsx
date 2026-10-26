import { site } from "../data/site";
import SectionLink, { sections } from "./SectionLink";
import { ArrowUp, Github, Mail, Whatsapp } from "./icons";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-site pt-12 pb-28 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <SectionLink to="top" className="font-mono font-bold text-white text-base">
              <span className="text-accent">~/</span>ayoub
            </SectionLink>
            <p className="text-sm text-fog mt-2">
              {site.role} based in {site.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-3 sm:flex gap-x-6 gap-y-3 text-sm">
            {sections.map(({ id, label }) => (
              <SectionLink key={id} to={id} className="text-fog hover:text-white transition-colors py-1">
                {label}
              </SectionLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 -ml-3 md:ml-0">
            {[
              { href: `https://wa.me/${site.whatsapp}`, label: "WhatsApp", Icon: Whatsapp },
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
              { href: site.github, label: "GitHub", Icon: Github },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-md text-fog hover:text-accent hover:bg-night-raised/60 transition-colors"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex items-center justify-between gap-4 font-mono text-xs text-fog/70">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <SectionLink to="top" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors py-2">
            back to top <ArrowUp size={13} />
          </SectionLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
