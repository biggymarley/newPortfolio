import { skillGroups } from "../../data/skills";
import shapes from "./imgs/test.png";

const Skills = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
      {/* top */}
      <div data-aos="fade-left" className="mb-10">
        <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
          <div>
            <span className="text-[#6cbbff]">#</span>skills
          </div>
          <div className="line w-1/3 h-px bg-[#6cbbff]"></div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-wrap gap-10 justify-between items-center text-white">
        {/* left */}
        <div data-aos="fade-right" className="mx-auto">
          <img className="w-full mx-auto" src={shapes} alt="" />
        </div>
        {/* right & mapping */}
        <div
          data-aos="fade-left"
          className="mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
        >
          {skillGroups.map(({ title, languages }) => (
            <div
              key={title}
              className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]"
            >
              <div className="p-2">
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
    </div>
  );
};

export default Skills;
