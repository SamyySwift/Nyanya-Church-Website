import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";

const Hero = ({ text, background, src, mainHero = false }) => {
  return (
    <>
      <ParallaxBanner className="h-screen relative">
        <ParallaxBannerLayer speed={-20}>
          {background === "video" ? (
            <video
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img src={src} className="w-full h-full object-cover" />
          )}

          <div className="absolute inset-0 bg-black opacity-60"></div>

          {mainHero ? (
            <div className="absolute bottom-[250px]">
              <InfiniteMovingCards
                direction="left"
                speed="slow"
                type="text"
                textContent="WELCOME TO THE APOSTOLIC CHURCH - NYANYA ASSEMBLY - "
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <motion.h1
                className={`absolute bottom-[250px] font-poppins font-extrabold text-white text-4xl md:text-7xl lg:text-[149px]`}
              >
                {text}
              </motion.h1>
            </div>
          )}
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Hero;
