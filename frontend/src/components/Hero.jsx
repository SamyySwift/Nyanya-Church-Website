import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";

const Hero = ({ text, background, src, mainHero = false }) => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start 0.2", "end 0.8"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      <ParallaxBanner className="h-screen relative">
        <ParallaxBannerLayer speed={-20}>
          {background === "video" ? (
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img src={src} className="w-full h-full object-cover" />
          )}

          <div className="absolute inset-0 bg-black opacity-60"></div>

          {mainHero ? (
            // <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            //   <motion.div
            //     initial={{ x: -1000, opacity: 0, scale: 0.5 }}
            //     animate={{ x: 0, opacity: 1, scale: 1 }}
            //     transition={{ duration: 2 }}
            //   >
            //     <motion.h1 className="font-serif text-center">
            //       <span className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
            //         Welcome To The Apostolic Church <br />
            //       </span>

            //       <span className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            //         Nyanya Assembly
            //       </span>
            //     </motion.h1>
            //     {/* <motion.p className="font-poppins text-sm font-light  md:text-2xl md:font-extralight text-white text-center">
            //       Know God <span className="">•</span> Find Freedom{" "}
            //       <span className="">•</span> Discover Purpose{" "}
            //       <span className="">•</span> Make a Difference
            //     </motion.p> */}
            //   </motion.div>
            // </div>
            <div className="absolute bottom-[200px]">
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
                className={`absolute bottom-[220px] font-poppins font-bold text-white text-5xl md:text-7xl lg:text-[149px]`}
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
