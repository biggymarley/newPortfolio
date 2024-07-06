const Footer = () => {
  return (
    <>
      {/* line */}
      <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Ayoub</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">faragiayoubdev@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Musician and full-stack developer based in Morocco</p>
            </div>
          </div>
          {/* right */}
      
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2024. Made by Ayoub
        </div>
      </div>
    </>
  );
};

export default Footer;
