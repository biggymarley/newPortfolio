import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ToptalBanner from "./ToptalBanner";
import { featuredProjects } from "../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="container-site py-16">
      <div className="mb-16">
        <ToptalBanner />
      </div>
      <SectionHeading title="projects" to="/projects" toLabel="view all" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
