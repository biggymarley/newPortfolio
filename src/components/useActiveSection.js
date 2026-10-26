import { useEffect, useState } from "react";

// Scroll-spy: returns the id of the section crossing the middle of the viewport.
const useActiveSection = (ids, enabled = true) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -54% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids, enabled]);

  return active;
};

export default useActiveSection;
