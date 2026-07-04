import { site } from "../data/site";
import { Github, Mail } from "./icons";

const Footer = () => {
  return (
    <footer className="border-t border-line mt-24">
      <div className="container-site py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* left */}
          <div className="text-center sm:text-left">
            <div className="font-mono font-bold text-white text-base mb-1">
              <span className="text-accent">~/</span>ayoub
            </div>
            <p className="text-sm text-fog">
              {site.role} based in {site.location}
            </p>
          </div>
          {/* right */}
          <div className="flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-fog hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-fog hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={site.toptal}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-fog hover:text-accent transition-colors"
            >
              toptal
            </a>
          </div>
        </div>
        <div className="text-center font-mono text-xs text-fog/70 mt-10">
          © {new Date().getFullYear()} {site.name} — built with React + Vite
        </div>
      </div>
    </footer>
  );
};

export default Footer;
