const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: [
        "CSS",
        "HTML",
        "JavaScript",
        "HTML5",
        "C",
        "Bash",
        "PHP",
        "SQL",
        "Sass",
        "TypeScript",
        "SCSS",
        "C#",
        "CSS3",
        "Python",
        "Java",
      ],
    },
    {
      title: "Libraries/APIs",
      languages: [
        "React",
        "REST APIs",
        "Camera API",
        "Stripe API",
        "Node.js",
        "React Router",
        "jQuery",
        "React Redux",
        "Sockets",
        "AWS Amplify",
        "API Development",
        "Stripe",
        "AmplifyJS",
        "Formik",
        "Socket.IO",
        "Three.js",
        "Yup",
        "Vue",
        "Chart.js",
        "Recharts",
        "Ramda",
      ],
    },
    {
      title: "Tools",
      languages: [
        "Vim Text Editor",
        "Expo.io",
        "Figma",
        "Expo",
        "GitHub",
        "NPM",
        "JSX",
        "Git",
        "Stripe Checkout",
        "Adobe Experience Design (XD)",
        "Bitbucket",
        "Slack",
        "Webpack",
        "Jira",
        "Apache",
        "Balsamiq",
        "Amazon Cognito",
        "Amazon Simple Email Service (SES)",
        "AWS SDK",
      ],
    },
    {
      title: "Frameworks",
      languages: [
        "Material UI",
        "React Native",
        "Tailwind CSS",
        "Vanilla JS",
        "MUI CSS",
        "Express.js",
        "Next.js",
        "Redux",
        "Bootstrap",
        "Jest",
      ],
    },
    {
      title: "Paradigms",
      languages: [
        "Web Architecture",
        "HTML DOM",
        "Responsive Web Design (RWD)",
        "Responsive",
        "UX Design",
        "Mobile Development",
        "UI Design",
        "Functional Programming",
      ],
    },
    {
      title: "Platforms",
      languages: [
        "Windows",
        "Vercel",
        "Linux",
        "Android",
        "iOS",
        "Firebase",
        "Visual Studio Code (VS Code)",
        "Docker",
        "DigitalOcean",
        "MacOS",
        "Webflow",
        "Amazon Web Services (AWS)",
        "AWS Elastic Beanstalk",
        "AWS Lambda",
        "Google Cloud Platform (GCP)",
      ],
    },
  
  ];
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div data-aos="fade-left" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#6cbbff]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#6cbbff]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <div data-aos="fade-right" className="mx-auto">
            <img
              className=" w-full mx-auto"
              src={require("./imgs/test.png")}
              alt=""
            />
          </div>
          {/* right & mapping */}
          <div
            data-aos="fade-left"
            className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
          >
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                      {languages.map((e) => {
                        return <span>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
