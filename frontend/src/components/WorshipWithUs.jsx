// import { ParallaxBanner } from "react-scroll-parallax";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { BsFillCameraReelsFill } from "react-icons/bs";

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
    // "images/wsp-img-4.webp",
    // "images/wsp-img-5.webp",
    // "images/wsp-img-6.webp",
    // "images/wsp-img-8.webp",
    // "images/wsp-img-10.webp",
  ];
  return (
    <ImagesSlider
      className="h-screen"
      images={images}
      opacity={50}
      duration={120000}
    >
      <motion.div className="z-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-8xl font-light font-vibes">
          Worship With Us <br />
        </h1>
        {/* <span className="font-grotesque text-2xl md:text-4xl font-light">
          and experience God's <FlipWords words={words} />
        </span> */}
        <a href="https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d">
          <button className="flex items-center mt-8 bg-[#f7f2e9] text-black py-4 px-8 rounded-xl shadow-md text-sm md:text-base font-karla">
            <BsFillCameraReelsFill className="mr-2" />
            <span> Live Stream</span>
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
};

export default WorshipWithUs;
