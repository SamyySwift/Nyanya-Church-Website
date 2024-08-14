import { motion } from "framer-motion";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";

const Hero = ({ text, background, src, mainHero = false }) => {
  return (
    <section className="">
      <div className="h-screen relative">
        {background === "video" ? (
          <video
            className="w-full h-full object-cover object-center absolute inset-0"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={src} type="video/webm" />
          </video>
        ) : (
          <img
            src={src}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div>
          {mainHero ? (
            <div className="absolute bottom-[30px] md:bottom-10 left-5 md:left-8 xl:left-[80px] flex space-x-4">
              <button className="flex items-center bg-[#f7f2e9] text-black p-4 rounded-2xl shadow-md text-sm md:text-base font-grotesque">
                <BsFillCameraReelsFill className="mr-2" />
                <span> Live Stream</span>
              </button>
              <button className="flex items-center bg-[#f7f2e9] text-black py-2 px-4 rounded-2xl shadow-md text-sm md:text-base font-grotesque">
                <GiReceiveMoney className="mr-2" />
                <span>Give Offerings</span>
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <motion.h1 className="absolute bottom-[70px] md:bottom-10 font-grotesque font-extrabold text-white text-4xl md:text-7xl lg:text-9xl">
                {text}
              </motion.h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
