import { motion } from "framer-motion";
import { BsCameraReelsFill } from "react-icons/bs";

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
            <div>
              <h1 className="absolute bottom-[80px] md:bottom-10 left-5 md:left-8  xl:left-[80px] text-white text-center font-extrabold text-3xl  max-w-lg md:max-w-xl">
                {text}
              </h1>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <motion.h1 className="absolute bottom-[80px] md:bottom-10 font-grotesque font-extrabold text-white text-4xl md:text-7xl lg:text-9xl">
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
