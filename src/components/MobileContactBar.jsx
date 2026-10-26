import { useEffect, useState } from "react";
import { site } from "../data/site";
import { Mail, Whatsapp } from "./icons";

// Phone-only sticky contact bar. Appears once the hero's own buttons have
// scrolled away and hides again while the contact section is on screen.
const MobileContactBar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    const observer = contact
      ? new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.15 })
      : null;
    if (contact) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const shown = pastHero && !contactVisible;

  return (
    <div
      aria-hidden={!shown}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-night/90 backdrop-blur-md border-t border-line transition-transform duration-300 ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          className="btn btn-primary"
        >
          <Whatsapp size={16} /> Message me
        </a>
        <a
          href={`mailto:${site.email}`}
          tabIndex={shown ? 0 : -1}
          aria-label="Email me"
          className="btn btn-outline !px-4"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;
