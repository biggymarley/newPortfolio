import { smallProjects } from "../../data/projects";

const SmallProjects = () => {
  return (
    <div className="pt-[80px] px-5 max-w-[1560px] mx-auto">
      {/* title */}
      <div>
        <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
          <span className="text-[#6cbbff]">#</span>
          <span>small-projects</span>
        </div>
      </div>
      {/* body/cards */}
      <div className="cards flex justify-center flex-wrap gap-4">
        {smallProjects.map(({ languages, title, body, link }) => (
          <div
            key={title}
            className="card max-w-[331px] w-full border border-[#ABB2BF]"
          >
            {/* skills */}
            <div className="border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
              {languages.map((lang) => (
                <span key={lang}>{lang} </span>
              ))}
            </div>
            {/* description */}
            <div className="disc p-4">
              <h2 className="text-white font-medium text-2xl">{title}</h2>
              <p className="text-[#ABB2BF] py-4">{body}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#6cbbff] px-4 py-2 text-white duration-150 hover:bg-[#6cbbff33]"
              >
                Github {"<"}~{">"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
