import Project_card from "../project_card/Project_card";
import first from "./imgs/chillcloud.png";
import second from "./imgs/bigflix.png";
import third from "./imgs/matcha.png";
import omart from "./imgs/omart.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  // date
  const projects = [
    {
      img: omart,
      langs: [
        "Nextjs",
        "Typescript",
        "tailwind css",
        "Shopify",
        "Storefront Api",
        "vercel",
      ],
      title: "Omart.",
      disc: "Ecommerce Website Powered by Shopify Storefront API",
      link: "https://omart-strings.vercel.app/",
    },
    {
      img: first,
      langs: [
        "React",
        "javascript",
        "tailwind css",
        "vite",
        "firebase",
        "100ms",
        "vercel",
      ],
      title: "ChillCloud",
      disc: "Discord like app ",
      link: "https://cloudchill.vercel.app/",
    },
    {
      img: second,
      langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
      title: "Bigflix",
      link: "https://bigflix-sooty.vercel.app/discover/movies",
      disc: "Netflix like app ",
    },
    {
      img: third,
      langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
      title: "Matcha",
      disc: "Tinder like app ",
      link: "https://biggymarley.github.io/TinderClonePreview/",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="mb-24">
          <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className=" text-[#6cbbff]">#</span>
            <span>work-projects</span>
          </div>
          <a
            href="https://www.toptal.com/resume/ayoub-faragi"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border-[#ABB2BF] border  p-0 flex gap-4 items-center rounded-md overflow-hidden flex-col md:flex-row"
          >
            <img
              src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fpublic-files%2Ftoptal-logo-f2f871d16892f5b8859b0822fa740cc3.png&width=768"
              alt="toptal"
              className="md:w-60 w-full object-contain "
            />
            <p className="text-white font-medium text-2xl text-center md:text-start py-8 md:py-0">
              Explore my professional work projects on my Toptal profile
            </p>
          </a>
        </div>
        <div className=" flex justify-between items-center gap-5">
          {/* left */}

          <div
            data-aos="fade-down"
            className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
          >
            <div className="">
              <span className="text-[#6cbbff]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#6cbbff]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <NavLink to="/projects">
              <span>View all ~~&gt;</span>
            </NavLink>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, link }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  link={link}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
