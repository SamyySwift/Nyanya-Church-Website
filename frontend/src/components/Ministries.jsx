import HeroSection from "./HeroSection.jsx";
import ContactForm from "./ContactForm.jsx";
import InfiniteMovingCards from "./ui/infinite-moving-cards.jsx";

const Ministries = ({ src, team, images }) => {
  return (
    <>
      <HeroSection backgroundVideo={src} svg_color="#F7F2E9" />
      <section className="bg-[#F7F2E9] py-[90px]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-10 md:text-5xl font-alfa text-center">
            Meet The {team}
          </h2>

          <InfiniteMovingCards
            items={images}
            type="image"
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* Form */}
      <section className="h-[1000px] bg-[#E5E0D4]">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
          <h1 className="text-center">
            <span className="text-3xl md:text-5xl font-alfa ">
              Join The {team}
            </span>
          </h1>
          <p className="font-karla font-light text-md md:text-xl pb-[50px] px-4 md:px-0 max-w-3xl text-center">
            If you are interested in joining the {team} or talking with someone
            about it, feel free to reach out to the team leader using the form
            below.
          </p>
          <ContactForm team={team} />
        </div>
      </section>
    </>
  );
};

export default Ministries;
