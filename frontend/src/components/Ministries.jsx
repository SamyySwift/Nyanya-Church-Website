import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import React from "react";
import Spotlight from "./ui/spotlight.jsx";
import Hero from "./Hero.jsx";
import ContactForm from "./ContactForm.jsx";

const Ministries = ({
  bgImg,
  bgText,
  msgTitle,
  msgBody,
  title,
  biblePortion,
  team,
  leaderName,
  images,
}) => {
  return (
    <>
      <Hero text={bgText} src={bgImg} />
      {/* Introduction */}
      <section
        className="h-[1500px] md:h-[1000px] flex flex-col items-center justify-center px-2 md:px-0"
        style={{ backgroundColor: "#F5EFE6" }}
      >
        <h1 className="text-4xl md:text-6xl font-grotesque font-bold text-center">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl mt-3 font-light text-black max-w-2xl italic text-center mx-auto">
          {msgTitle}
          <span className="underline font-semibold">{biblePortion}</span>
        </h2>

        <p className="mt-12 text-justify  text-md md:text-xl  max-w-7xl font-poppins leading-[40px] md:leading-[50px] mx-5 lg:mx-0">
          {msgBody}
        </p>
      </section>
      {/* Spotlight */}
      <section>
        <div className="h-screen  w-full pt-10 md:pt-20 flex flex-col items-center md:items-start md:flex-row  justify-center gap-10 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-5  ">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div>
            <img
              src="images/media3.jpg"
              className="w-[300px] h-[300px] object-cover"
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
            <p className="text-white  font-light text-md md:text-lg lg:text-xl">
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
          className="h-[1800px] md:h-[900px] relative"
          style={{ backgroundColor: "#E2DFD0" }}
        >
          <ParallaxBannerLayer speed={-20}>
            <img src={""} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" grid grid-col-1 justify-items-center md:grid-cols-2 gap-10  w-[800px] md:w-[1000px] md:mx-5">
                {images.map((img, idx) => (
                  <img
                    src={`images/${img}`}
                    className="w-[360px] md:w-[400px]  object-cover"
                    key={idx}
                  />
                ))}
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </section>
      {/* Form */}
      <section className="h-[1000px] flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl md:text-7xl font-grotesque text-center">
          Join the {team}
        </h1>
        <p className="font-poppins font-light text-md md:text-xl max-w-2xl text-center mb-8 px-4 md:p-0">
          If you are interested in joining the {team} or talking with someone
          about it, feel free to reach out to the team leader using the form
          below.
        </p>
        <ContactForm team={team} />
      </section>
    </>
  );
};

export default Ministries;
