import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Remember where each history entry was scrolled to, so going back from a
// case study lands on the same project card instead of the top of the page.
const positions = new Map();

const ScrollToTop = () => {
  const { key, pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const save = () => positions.set(key, window.scrollY);
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [key]);

  useLayoutEffect(() => {
    if (navType === "POP" && positions.has(key)) {
      window.scrollTo(0, positions.get(key));
      return;
    }
    // Hash links are scrolled by the home page itself.
    if (!hash) window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, pathname]);

  return null;
};

export default ScrollToTop;
