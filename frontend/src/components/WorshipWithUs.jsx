// import { ParallaxBanner } from "react-scroll-parallax";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

const WorshipWithUs = () => {
  const words = [
    "Power",
    "Healing",
    "Miracle",
    "Deliverance",
    "Restoration",
    "Blessing",
  ];

  const images = [
    "images/wsp-bg-1.jpg",
    "images/wsp-bg-2.jpg",
    "images/wsp-bg-3.JPG",
    "images/wsp-bg-4.JPG",
    "images/wsp-bg-5.JPG",
    "images/wsp-bg-6.jpg",
    "images/wsp-bg-7.JPG",
    "images/wsp-bg-8.JPG",
    "images/wsp-bg-9.JPG",
    "images/wsp-bg-10.jpg",
  ];
  return (
    // <ParallaxBanner
    //   layers={[
    //     { image: "/images/worship-bg-1.JPG", speed: -15 },
    //     gradientOverlay,
    //   ]}
    //   className="h-screen"
    // >
    //   {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    //     <h1 className="text-5xl md:text-8xl font-light font-vibes ">
    //       Worship With Us <br />
    //     </h1>
    //     <span className="font-poppins text-2xl md:text-4xl font-thin">
    //       and experience God's <FlipWords words={words} />
    //     </span>
    //   </div>
    // </ParallaxBanner>

    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="z-50 flex flex-col justify-center items-center text-white"
      >
        <h1 className="text-5xl md:text-8xl font-light font-vibes">
          Worship With Us <br />
        </h1>
        <span className="font-grotesque text-2xl md:text-4xl font-thin">
          and experience God's <FlipWords words={words} />
        </span>
      </motion.div>
    </ImagesSlider>
  );
};

export default WorshipWithUs;
