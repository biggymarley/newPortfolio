import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionLink, { sections } from "./SectionLink";
import useActiveSection from "./useActiveSection";
import { site } from "../data/site";
import { Close, Mail, Menu, Whatsapp } from "./icons";

const sectionIds = sections.map((s) => s.id);

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds, pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-night/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16">
          <SectionLink to="top" onClick={close} className="font-mono font-bold text-white text-base">
            <span className="text-accent">~/</span>ayoub
          </SectionLink>

          {/* desktop nav */}
          <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
            {sections
              .filter((s) => s.id !== "contact")
              .map(({ id, label }) => (
                <SectionLink
                  key={id}
                  to={id}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                    active === id ? "text-white" : "text-fog hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 origin-left ${
                      active === id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </SectionLink>
              ))}
            <SectionLink to="contact" className="btn btn-primary ml-4 !py-2">
              Let's talk
            </SectionLink>
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden -mr-2 w-11 h-11 flex items-center justify-center text-white"
          >
            {open ? <Close size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* mobile menu — full-height sheet under the bar. Kept outside <header>:
          its backdrop-blur would otherwise become this fixed element's containing block. */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed z-40 inset-x-0 top-16 bottom-0 bg-night border-t border-line transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav
          aria-label="Sections"
          className="container-site flex flex-col h-full pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        >
          {sections.map(({ id, label }, i) => (
            <SectionLink
              key={id}
              to={id}
              onClick={close}
              className={`flex items-baseline gap-4 py-4 border-b border-line text-3xl font-semibold tracking-tight transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${active === id ? "text-white" : "text-fog"}`}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              {label}
            </SectionLink>
          ))}
          <div className="mt-auto grid grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Whatsapp size={16} /> WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline">
              <Mail size={16} /> Email
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
