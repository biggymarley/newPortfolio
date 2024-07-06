import { NavLink } from "react-router-dom";

const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div data-aos="fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#6cbbff]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#6cbbff]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m Ayoub!
              <br />
              <br />a full-stack developer with over five years of experience in
              front-end development, designing and building responsive web and
              mobile applications. He is proficient in the CSS and JavaScript
              frameworks, including React, React Native, and Node.js, and has
              extensive user experience and user psychology knowledge.
            </p>
            {/* button */}
            <div className="mt-7">
              <NavLink
                to="/about"
                className=" duration-150 hover:bg-[#6cbbff33] border border-[#6cbbff] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </NavLink>
            </div>
          </div>
          {/* right */}
          <div data-aos="fade-left" className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
