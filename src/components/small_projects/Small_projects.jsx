import React from "react";

const Small_projects = () => {
  // we need to create some dates for this, you can do it by yourselves
  // we need about 8 projects, but you can add all yours :)
  // in this video we will create about page
  let projects = [
    {
      languages: ["React", "CSS", "Material UI"],
      title: "Contact-Us Form using Material UI",
      body: "Contact-Us Form",
      link: "https://github.com/biggymarley/ContactUs",
    },
    {
      languages: ["React", "CSS", "Material UI"],
      title: "Login Form",
      link: "https://github.com/biggymarley/LoginFrom",

      body: "Login Form using Material UI",
    },
    {
      languages: ["C"],
      title: "ft_ls",
      body: "Ls Command Implementation",
      link: "https://github.com/biggymarley/ls_1337",
    },
    {
      languages: ["PHP", "CSS", "HTML", "javascript", "Sql"],
      title: "Instagram Like App",
      body: "Instagram Like App",
      link: "https://github.com/biggymarley/Camagru",
    },
  ];
  // you will write dates by yourselves
  return (
    <div className=" pt-[80px] px-5 max-w-[1560px] mx-auto">
      {/* title */}
      <div className="">
        <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
          <span className=" text-[#6cbbff]">#</span>
          <span>small-projects</span>
        </div>
      </div>
      {/* body/cards */}
      <div className="cards flex justify-center flex-wrap gap-4">
        {
          // mapping
          projects.map((e) => {
            let { languages, title, body, link } = e;
            return (
              <>
                {/* card */}
                <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                  {/* skills */}
                  <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                    {languages.map((lang) => {
                      return <span>{lang} </span>;
                    })}
                  </div>
                  {/* discription */}
                  <div className="disc p-4">
                    <h2 className=" text-white font-medium text-2xl">
                      {title}
                    </h2>
                    <p className=" text-[#ABB2BF] py-4">{body}</p>
                    {/* we are only coders so maybe no one have figma projects */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" border border-[#6cbbff] px-4 py-2 text-white duration-150 hover:bg-[#6cbbff33]"
                    >
                      Github {"<"}~{">"}
                    </a>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default Small_projects;
