import discord from "./imgs/Discord.png";
import email from "./imgs/Email.png";

const Contact = () => {
  return (
    <div className="px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10">
      {/* title */}
      <div className="text-white font-semibold text-[32px] mt-12">
        <span className="text-[#6cbbff]">/</span>
        contacts
      </div>
      {/* h2 title */}
      <div className="text-white mt-[14px] mb-[46px]">Who am i?</div>
      {/* flex main */}
      <div className="flex justify-between flex-wrap gap-10">
        {/* left side */}
        <div className="md:w-3/5 w-full">
          <div className="text-[#ABB2BF] font-medium">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        {/* right side */}
        <div className="flex gap-3">
          <div className="p-4 border border-[#ABB2BF]">
            <h2 className="text-white font-medium pb-4">Message me here</h2>
            <div className="text-[#ABB2BF]">
              <div className="flex gap-1 items-center">
                <img src={discord} alt="Discord" />
                <span>biggyrr</span>
              </div>
              <div className="flex gap-1 items-center">
                <img src={email} alt="Email" />
                <span>faragiayoubdev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
