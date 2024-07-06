const Project_card = ({ img, langs, title, disc, link }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0"
      >
        {/* img */}
        <div className="">
          <img className=" w-full h-[220px] object-cover" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          {/* btns */}
          <div className="">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className=" py-2 px-4 text-white border border-[#6cbbff] hover:bg-[#6cbbff33] duration-150"
            >
              Live {"<"}~{">"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_card;
