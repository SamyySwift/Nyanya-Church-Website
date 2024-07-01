import React from "react";
import { motion } from "framer-motion";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";

const Hero = ({ text, background, src, mainHero = false }) => {
  return (
    <>
      <section className="h-screen  relative">
        {background === "video" ? (
          <video
            className="w-full h-full object-cover object-center"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={src} className="w-full h-full object-cover object-center" />
        )}

        {mainHero ? (
          <div className="absolute bottom-10">
            <InfiniteMovingCards
              direction="left"
              speed="slow"
              type="text"
              // textContent="WELCOME TO THE APOSTOLIC CHURCH - NYANYA ASSEMBLY - "
              pauseOnHover={false}
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <motion.h1
              className={`absolute bottom-10 font-grotesque font-extrabold text-white text-4xl md:text-7xl lg:text-9xl`}
            >
              {text}
            </motion.h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
