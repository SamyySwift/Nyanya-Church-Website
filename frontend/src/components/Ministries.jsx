import HeroSection from "./HeroSection.jsx";
import ContactForm from "./ContactForm.jsx";
import InfiniteMovingCards from "./ui/infinite-moving-cards.jsx";
import GrainyBackground from "./GrainyBackground.jsx";

const Ministries = ({ team, images }) => {
  return (
    <>
      <HeroSection backgroundVideo="meetbg.mp4" svg_color="#F7F2E9" />
      <section className="bg-[#F7F2E9] py-[100px]">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl mb-10 lg:text-6xl xl:text-7xl font-anton text-center max-w-xl mx-auto">
            Meet The <span className="font-saol italic">{team}</span>
          </h2>

          <InfiniteMovingCards
            items={images}
            type="image"
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* Form */}

      <GrainyBackground
        bgImg="images/noise.webp"
        content={
          <section className="h-[1000px] container mx-auto px-5">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <h1 className="text-center">
                <span className="text-3xl md:text-5xl lg:text-7xl font-anton text-white">
                  Join The {team}
                </span>
              </h1>
              <p className="font-karla text-white font-light text-md md:text-xl pb-[50px] px-4 md:px-0 max-w-3xl text-center">
                If you are interested in joining the {team} or talking with
                someone about it, feel free to reach out to the team leader
                using the form below.
              </p>
              <ContactForm team={team} />
            </div>
          </section>
        }
      />
    </>
  );
};

export default Ministries;
