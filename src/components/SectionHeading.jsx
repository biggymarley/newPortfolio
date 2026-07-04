import { NavLink } from "react-router-dom";
import { ArrowRight } from "./icons";

const SectionHeading = ({ title, prefix = "#", to, toLabel }) => {
  return (
    <div className="flex items-center gap-4 mb-10" data-aos="fade-up">
      <h2 className="font-mono text-2xl md:text-3xl font-semibold text-white whitespace-nowrap">
        <span className="text-accent">{prefix}</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
      {to && (
        <NavLink
          to={to}
          className="group font-mono text-sm text-fog hover:text-accent transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
        >
          {toLabel}
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </NavLink>
      )}
    </div>
  );
};

export default SectionHeading;
