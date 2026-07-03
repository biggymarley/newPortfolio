import portrait from "./imgs/man.webp";

const About = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className="mb-12">
        <div className="text-white w-2/3 font-semibold text-[32px]">
          <div>
            <span className="text-[#6cbbff]">/</span>
            about-me
          </div>
          <div className="text-white text-base font-normal mt-[14px]">
            Who am i?
          </div>
        </div>
      </div>
      <div className="flex-wrap flex items-center justify-between">
        {/* left */}
        <div className="md:w-[48%] w-full">
          {/* disc */}
          <p className="text-[#ABB2BF]">
            Hello, i’m Ayoub!
            <br />
            <br />a full-stack developer with over five years of experience in
            front-end development, designing and building responsive web and
            mobile applications. He is proficient in the CSS and JavaScript
            frameworks, including React, React Native, and Node.js, and has
            extensive user experience and user psychology knowledge.
          </p>
        </div>
        {/* right */}
        <div className="mx-auto">
          <img className="mx-auto" src={portrait} alt="Ayoub" />
        </div>
      </div>
    </div>
  );
};

export default About;
