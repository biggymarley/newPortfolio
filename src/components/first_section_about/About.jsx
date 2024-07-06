import { NavLink } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Ayoub is a <span className="text-[#6cbbff]">Musician</span> and{" "}
            <span className="text-[#6cbbff]">full-stack developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            seasoned full-stack developer specializing in front-end development,
            adept in CSS and JavaScript frameworks like React, React Native, and
            Node.js, with deep expertise in user experience and psychology.
          </p>
          <NavLink
            to="/contact"
            className="text-white font-medium py-2 px-4 border duration-200 border-[#6cbbff] hover:bg-[#6cbbff33]"
          >
            Contact me!!
          </NavLink>
        </div>
        <div data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img
              src={require("./imgs/man1.png")}
              alt=""
              className="h-[400px] object-contain"
            />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#6cbbff]"></div>
            <div className="">
              Currently working on <span className="text-white">Toptal</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div  data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div> */}
    </>
  );
};

export default About;
