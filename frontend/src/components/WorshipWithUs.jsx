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
    "images/wsp-img-1.webp",
    "images/wsp-img-2.webp",
    "images/wsp-img-3.webp",
    "images/wsp-img-4.webp",
    "images/wsp-img-5.webp",
    "images/wsp-img-6.webp",
    // "images/wsp-img-7.JPG",
    "images/wsp-img-8.webp",
    "images/wsp-img-9.webp",
    "images/wsp-img-10.webp",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div className="z-50 flex flex-col justify-center items-center text-white">
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
