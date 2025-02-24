import HeroSection from "../components/HeroSection";
import { Welcome } from "../components/Welcome";
import transition from "../utils/transition";
import PageTitle from "../components/PageTitle";
import FaqAccordion from "../components/ui/Faq";

const PlanVisit = () => {
  return (
    <>
      <PageTitle
        title="Plan your visit | Nyanya Assmbly"
        description="Page contains info on how to locate church"
      />
      {/* HERO SECTION */}
      <HeroSection backgroundVideo="bg.mp4" svg_color="#F7F2E9" />
      <div className="bg-[#F7F2E9]">
        <Welcome
          title="What's it like here?"
          text="No matter who you are or where you come from, our aim is for you
          to feel welcomed and comfortable as soon as you arrive. "
        />
      </div>

      {/* DIRECTION SECTION */}
      <div className="py-20 flex flex-col md:flex-row justify-center items-center pt-20 gap-10 overflow-hidden">
        <iframe
          className="md:w-[600px] md:h-[500px]  w-screen h-[600px] px-5"
          src="https://maps.google.com/maps?width=720&amp;height=500&amp;hl=en&amp;q=NO.%202,%20Avenue%20Nyanya%20Karu%20Road%20Opposite%20A.A.%20Rano%20Filling%20Station,%20Nyanya,%20Abuja,%20FCT+(Nyanya%20Assembly)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>

        <div className="md:w-[500px] mx-5">
          <span className="font-semibold text-3xl md:text-5xl font-karla">
            Detailed directions
          </span>
          <p className="mt-5 font-karla leading-loose font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea
            earum ut, numquam nesciunt alias laudantium dolorum magni corrupti
            eos rerum nisi fugit impedit ducimus, nemo magnam tempora ex nihil.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, quos dolores? Earum nihil et eveniet in sapiente nemo
            itaque. Labore alias dolorem adipisci accusamus, obcaecati esse
            veritatis incidunt officia ad?
          </p>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-40 bg-[#E5E0D4]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-5 space-y-10 md:space-y-0">
          <div className="w-full md:w-1/4 md:pr-5">
            <span className="font-alfa text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              FAQS
            </span>
          </div>
          <div className="w-full md:w-3/4">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default transition(PlanVisit);
