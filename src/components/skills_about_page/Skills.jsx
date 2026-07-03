import { skillGroups } from "../../data/skills";

const Skills = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className="mb-12 text-[32px] font-medium text-white">
        <span className="text-[#6cbbff]">#</span>
        skills
      </div>
      {/* cards */}
      <div className="flex justify-around gap-4 flex-wrap">
        {skillGroups.map(({ title, languages }) => (
          <div
            key={title}
            className="w-[90%] sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF]"
          >
            <div className="text-white p-2">
              <h2 className="font-semibold">{title}</h2>
            </div>
            <div className="flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
              {languages.map((lang) => (
                <span key={lang}>{lang}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
