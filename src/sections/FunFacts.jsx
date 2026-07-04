import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
import illustration from "../assets/fun-facts.png";

const FunFacts = () => {
  return (
    <section className="container-site py-16">
      <SectionHeading title="my-fun-facts" />
      <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
        {/* facts */}
        <div className="flex flex-col items-start gap-3 w-full md:w-[55%]" data-aos="fade-right">
          {site.facts.map((fact) => (
            <div
              key={fact}
              className="font-mono text-sm rounded-md border border-line bg-night-raised/50 px-3 py-2 transition-colors hover:border-accent/40"
            >
              <span className="text-fog/50">{"// "}</span>
              <span className="text-fog">{fact}</span>
            </div>
          ))}
        </div>
        {/* illustration */}
        <div className="flex justify-center items-center w-full md:w-[40%]" data-aos="fade-left">
          <img className="w-[220px]" src={illustration} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
