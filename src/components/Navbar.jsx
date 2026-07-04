import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "home" },
  { to: "/projects", label: "work" },
  { to: "/about", label: "about-me" },
  { to: "/contact", label: "contacts" },
];

const linkClass = ({ isActive }) =>
  `font-mono text-sm transition-colors duration-200 ${
    isActive ? "text-white" : "text-fog hover:text-white"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16">
        {/* logo */}
        <NavLink to="/" className="font-mono font-bold text-white text-base">
          <span className="text-accent">~/</span>ayoub
        </NavLink>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              <span className="text-accent font-medium">#</span>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span className="block h-px w-full bg-fog"></span>
          <span className="block h-px w-3/4 bg-fog ml-auto"></span>
          <span className="block h-px w-full bg-fog"></span>
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-night-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 w-72 max-w-[85vw] bg-night-deep border-l border-line p-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 font-mono text-2xl text-fog hover:text-white"
        >
          ×
        </button>
        <nav className="flex flex-col gap-7 mt-14">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-mono text-2xl transition-colors ${
                  isActive ? "text-white" : "text-fog hover:text-white"
                }`
              }
            >
              <span className="text-accent font-medium">#</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
