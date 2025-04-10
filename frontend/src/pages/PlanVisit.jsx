import HeroSection from "../components/HeroSection";
import { Welcome } from "../components/Welcome";
import Transition from "../utils/transition";
import PageTitle from "../components/PageTitle";
import FaqAccordion from "../components/ui/Faq";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import GrainyBackground from "../components/GrainyBackground";

const PlanVisit = () => {
  return (
    <>
      <PageTitle
        title="Plan your visit | Nyanya Assmbly"
        description="Page contains info on how to locate church"
      />
      {/* HERO SECTION */}
      <HeroSection
        backgroundVideo="bg.mp4"
        svg_color="#F7F2E9"
        title="Plan A Visit"
      />
      <div className="bg-[#F7F2E9]">
        <Welcome
          title="What's it like here"
          text="No matter who you are or where you come from, our aim is for you
          to feel welcomed and comfortable as soon as you arrive. "
        />
      </div>

      {/* DIRECTION SECTION */}
      <div className="container mx-auto px-5 py-20 lg:py-40 flex flex-col md:flex-row justify-between pt-20 gap-10 overflow-hidden">
        <iframe
          className="w-full md:w-1/2 h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.56168774160625!2d7.5723224!3d9.018665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f6743ed1291%3A0xe117b8ec81d453ba!2sTHE%20APOSTOLIC%20CHURCH%20NYANYA%20OPP%20AA%20RANO!5e0!3m2!1sen!2sng!4v1741596691714!5m2!1sen!2sng"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="md:w-[700px]">
          <span className=" text-3xl md:text-5xl font-saol font-bold">
            Detailed Directions
          </span>
          <p className="mt-5 font-karla text-justify leading-loose font-light">
            <TextGenerateEffect
              className="font-karla text-lg md:text-2xl text-black md:leading-loose"
              words={`
              If you're driving, simply click on the Google Map and it will direct you to our church.
              When coming from the Mararaba or Karu axis, take a car, keke, or bike if you are not driving, and stop at the A.A. Rano filling station on Karu Road. Cross to the other side of the road.
              The street opposite the filling station is where the church is located. It is the first building on the left side of the street.
            `}
            />
          </p>
        </div>
      </div>

      {/* FAQ */}
      <GrainyBackground
        bgImg="images/noise3.webp"
        content={
          <div className="py-[150px] lg:py-[250px] flex items-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5 space-y-10 md:space-y-0">
              <div className="w-full md:w-1/4 md:pr-5">
                <span className="font-anton text-4xl md:text-5xl lg:text-8xl text-white">
                  FAQS
                </span>
              </div>
              <div className="w-full md:w-3/4">
                <FaqAccordion />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Transition(PlanVisit);
