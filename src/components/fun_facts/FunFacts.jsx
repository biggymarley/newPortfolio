import illustration from "./imgs/Group 53.png";

const facts = [
  "I like camping and hiking.",
  "I enjoy making music, especially Gnawa music.",
  "I like both cats and dogs.",
];

const FunFacts = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className="mb-12 text-[32px] font-medium text-white">
        <span className="text-[#6cbbff]">#</span>
        my-fun-facts
      </div>
      <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
        {/* left */}
        <div className="flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
          {facts.map((fact) => (
            <div
              key={fact}
              className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal"
            >
              {fact}
            </div>
          ))}
        </div>
        {/* right */}
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <img className="w-[250px]" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
