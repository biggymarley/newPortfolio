import { Link, useLocation } from "react-router-dom";

// The home page sections, in scroll order. Navbar, footer and scroll-spy read this.
export const sections = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const scrollToSection = (id) => {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (id === "top") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};

// Link to a home-page section. On the home page it scrolls in place (and
// updates the hash without adding history entries); from a project page it
// navigates home and HomePage scrolls to the hash once it has rendered.
const SectionLink = ({ to, onClick, children, ...rest }) => {
  const { pathname } = useLocation();
  const handleClick = (e) => {
    onClick?.(e);
    if (pathname !== "/") return;
    e.preventDefault();
    scrollToSection(to);
    window.history.replaceState(null, "", to === "top" ? "/" : `#${to}`);
  };
  return (
    <Link to={to === "top" ? "/" : { pathname: "/", hash: `#${to}` }} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default SectionLink;
