import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Spotlight from "./ui/spotlight.jsx";
import Hero from "./Hero.jsx";
import ContactForm from "./ContactForm.jsx";

const Ministries = ({
  bgImg,
  bgText,
  team,
  leaderName,
  images,
  background,
}) => {
  return (
    <>
      <Hero text={bgText} src={bgImg} background={background} />

      <section>
        <div className="h-[1000px] md:h-[800px] w-full pt-10 md:pt-20 flex flex-col items-center md:items-start md:flex-row  justify-center gap-10 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-5  ">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div>
            <img
              src="images/media3.jpg"
              className="w-[300px] h-[300px] object-cover rounded-xl"
            />
          </div>
          <div className="max-w-lg font-poppins">
            <h1 className="text-white mb-3">
              <span className="font-semibold text-2xl md:text-2xl lg:text-3xl">
                Team Leader -
              </span>{" "}
              <span className="text-xl md:text-2xl font-light">
                {leaderName}
              </span>
            </h1>
            <p className="text-white  font-extralight text-md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus totam nobis nam placeat ab libero repellendus
              perspiciatis, reiciendis eaque necessitatibus quibusdam quas
              cumque, ratione suscipit cupiditate. Sed totam quo ad? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. <br /> <br />
              Voluptatibus totam nobis nam placeat ab libero repellendus
              perspiciatis, reiciendis eaque necessitatibus quibusdam quas
              cumque, ratione suscipit cupiditate. Sed totam quo ad? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Voluptatibus totam
              nobis nam placeat ab libero repellendus perspiciatis, reiciendis
              eaque necessitatibus quibusdam quas cumque, ratione suscipit
              cupiditate. Sed totam quo ad?
            </p>
          </div>
        </div>
      </section>
      {/* Images */}
      <section>
        <ParallaxBanner
          className="h-[1500px] md:h-[900px] relative"
          style={{ backgroundColor: "#E2DFD0" }}
        >
          <ParallaxBannerLayer speed={-20}>
            <img src={""} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" grid grid-col-1 justify-items-center md:grid-cols-2 gap-10  w-[800px] md:w-[1000px] md:mx-5">
                {images.map((img, idx) => (
                  <img
                    src={`images/${img}`}
                    className="w-[360px] h-[300px] md:w-[400px]  object-cover rounded-xl"
                    key={idx}
                  />
                ))}
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </section>
      {/* Form */}
      <section
        className="h-[1000px]  bg-cover bg-center relative"
        style={{ backgroundImage: "url('images/youth.jpg')" }}
      >
        <div className="absolute bg-gray-500 bg-opacity-30 backdrop-blur-md backdrop-filter w-full h-full flex flex-col items-center justify-center space-y-4">
          <h1 className="text-center">
            <span className="font-bold text-4xl md:text-7xl font-grotesque ">
              Join the {team}
            </span>
          </h1>
          <p className="font-poppins font-light text-md md:text-xl mb-8 px-4 md:px-0 max-w-3xl text-center">
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
