import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ToptalBanner from "./ToptalBanner";
import { projects } from "../data/projects";

const AllProjects = () => {
  return (
    <section className="container-site pt-28">
      {/* page header */}
      <div className="mb-12">
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-white">
          <span className="text-accent">/</span>projects
        </h1>
        <p className="text-fog mt-2">List of my projects</p>
      </div>

      <div className="mb-16">
        <ToptalBanner />
      </div>

      <SectionHeading title="complete-apps" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
