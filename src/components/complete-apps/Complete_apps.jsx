import React from "react";
// imgs
import first from "./imgs/chillcloud.png";
import second from "./imgs/bigflix.png";
import third from "./imgs/matcha.png";
import bike from "./imgs/bike.png";
import startincub from "./imgs/startincub.png";

import Project_card from "../project_card/Project_card";

const Complete_apps = () => {
  const projects = [
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
      img: startincub,
      langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
      title: "Startincub",
      disc: "Startups Incubation Application",
      link: "https://biggymarley.github.io/Project/#/",
    },
    {
      img: third,
      langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
      title: "Matcha",
      disc: "Tinder like app ",
      link: "https://biggymarley.github.io/TinderClonePreview/",
    },
    {
      img: bike,
      langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
      title: "Bike Rental App",
      disc: "Bike Rental App",
      link: "https://bikerental.vercel.app/",
    },
    {
      img: second,
      langs: ["React", "TailwinCss", "javascript", "css", "vite", "vercel"],
      title: "Landing page",
      link: "https://obi-landing.vercel.app/",
      disc: "Landing page for ai project",
    },
    {
      img: "https://camo.githubusercontent.com/61ea9e91a74c24d88e2bf28fbf4ea3cee133e9365dcf332e96d40af46cd90734/68747470733a2f2f626173686c6f676f2e636f6d2f696d672f73796d626f6c2f6a70672f66756c6c5f636f6c6f7265645f6c696768742e6a7067",
      langs: ["C", "Unix Shell"],
      title: "Unix Shell Implementation",
      disc: "Unix Shell Implementation",
      link: "https://github.com/biggymarley/42SH",
    },
    {
      img: "https://biggymarley.github.io/myPortfolio/static/media/libft.8948aa24978189644e2c.png",
      langs: ["C", "Terminal"],
      title: "C Standard Library",
      disc: "C Standard Library",
      link: "https://github.com/biggymarley/libft",
    },
  ];
  return (
    <div>
      <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div className="">
          {/* projects */}
          <div className=" text-white font-bold text-[32px]">
            <span className=" text-[#6cbbff]">/</span>
            <span>projects</span>
          </div>
          {/* list */}
          <div className=" text-white mt-[14px]">List of my projects</div>
        </div>
        {/* completed tasks */}
        <div className="">
          {/* title */}
          <div>
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
          <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className=" text-[#6cbbff]">#</span>
            <span>complete-apps</span>
          </div>
          {/* projects */}
          <div className="flex flex-wrap justify-start  gap-4 my-12">
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
      </div>
    </div>
  );
};

export default Complete_apps;
