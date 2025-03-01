import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { BsFillCameraReelsFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const WorshipWithUs = () => {
  const images = [
    "images/wsp-img-1.webp",
    "images/wsp-img-2.webp",
    "images/wsp-img-3.webp",
    "images/wsp-img-4.webp",
    "images/wsp-img-5.webp",
    "images/wsp-img-8.webp",
  ];
  return (
    <ImagesSlider
      className="h-screen"
      images={images}
      opacity={50}
      duration={13000} // Change duration to 12000 milliseconds (12 seconds)
    >
      <motion.div className="z-50 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-8xl font-light font-vibes text-neutral-300">
          <Typewriter
            options={{
              strings: ["Worship  With  Us"],
              autoStart: true,
              loop: true,
              cursor: "",
              delay: 200,
              deleteSpeed: 100,
            }}
          />
        </h1>

        <a href="https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d">
          <button className="flex items-center mt-8 text-white border border-white hover:bg-[#f7f2e9] hover:text-black py-4 px-10 rounded-xl shadow-md text-sm md:text-base font-karla">
            <BsFillCameraReelsFill className="mr-2" />
            <span> Live Stream</span>
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
};

export default WorshipWithUs;
