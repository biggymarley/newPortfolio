import ProjectCard from "../project_card/ProjectCard";
import { projects } from "../../data/projects";

const CompleteApps = () => {
  return (
    <div>
      <div className="pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div>
          <div className="text-white font-bold text-[32px]">
            <span className="text-[#6cbbff]">/</span>
            <span>projects</span>
          </div>
          <div className="text-white mt-[14px]">List of my projects</div>
        </div>
        {/* work projects */}
        <div>
          <div>
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
              <span className="text-[#6cbbff]">#</span>
              <span>work-projects</span>
            </div>
            <a
              href="https://www.toptal.com/resume/ayoub-faragi"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border-[#ABB2BF] border p-0 flex gap-4 items-center rounded-md overflow-hidden flex-col md:flex-row"
            >
              <img
                src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fpublic-files%2Ftoptal-logo-f2f871d16892f5b8859b0822fa740cc3.png&width=768"
                alt="toptal"
                className="md:w-60 w-full object-contain"
              />
              <p className="text-white font-medium text-2xl text-center md:text-start py-8 md:py-0">
                Explore my professional work projects on my Toptal profile
              </p>
            </a>
          </div>
          <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className="text-[#6cbbff]">#</span>
            <span>complete-apps</span>
          </div>
          {/* projects */}
          <div className="flex flex-wrap justify-start gap-4 my-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteApps;
