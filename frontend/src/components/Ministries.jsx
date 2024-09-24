import Hero from "./Hero.jsx";
import ContactForm from "./ContactForm.jsx";

import InfiniteMovingCards from "./ui/infinite-moving-cards.jsx";

const Ministries = ({ bgImg, bgText, team, images, background }) => {
  // const { ref } = useParallax({ speed: -20 });

  return (
    <>
      <Hero text={bgText} src={bgImg} background={background} />

      <section className="overflow-hidden">
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black flex items-center">
          <div className="w-full max-w-screen-xl mx-auto">
            <InfiniteMovingCards
              items={images}
              type="image"
              pauseOnHover={false}
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section
        className="h-[1000px]  bg-cover bg-center relative"
        style={{ backgroundImage: "url('images/youth.jpg')" }}
      >
        <div className="absolute bg-opacity-30 backdrop-blur-md backdrop-filter w-full h-full flex flex-col items-center justify-center space-y-4">
          <h1 className="text-center">
            <span className="font-bold text-4xl md:text-7xl font-grotesque ">
              Join the {team}
            </span>
          </h1>
          <p className="font-grotesque font-light text-md md:text-xl pb-[50px] px-4 md:px-0 max-w-3xl text-center">
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
