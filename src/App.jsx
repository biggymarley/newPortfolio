import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileContactBar from "./components/MobileContactBar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// The site is one scrolling page; the old standalone pages now jump to their section.
const toSection = (id) => <Navigate to={{ pathname: "/", hash: `#${id}` }} replace />;

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return (
    <div className="overflow-x-clip">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={toSection("work")} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={toSection("about")} />
          <Route path="/contact" element={toSection("contact")} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      {/* remount per page so it re-finds that page's #contact section */}
      <MobileContactBar key={pathname} />
    </div>
  );
}

export default App;
