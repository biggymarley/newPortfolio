import React from 'react'

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
        <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-[#6cbbff]'>#</span>
                skills
            </div>
            {/* cards */}
            <div className=" flex justify-around gap-4 flex-wrap">
                {/* card */}
                {skills.map(({ title, languages }) => {
                    return (
                        <>
                            <div className="w-[90%] sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF]">
                                <div className=" text-white p-2">
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
    )
}

export default Skills