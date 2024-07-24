import { motion } from "framer-motion";

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
            <source src={src} type="video/mp4" />
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
              <h1 className="absolute bottom-10 left-5 md:left-8  xl:left-[80px] text-white font-extrabold text-4xl md:text-6xl lg:text-8xl  max-w-xs md:max-w-lg">
                {text}
              </h1>
              {/* 
              <button className="absolute bottom-[50px] right-[10px] md:right-[80px] xl:right-[600px] bg-white hover:bg-gray-300 font-grotesque text-lg md:text-xl text-black rounded-xl p-4">
                Live Stream
              </button> */}
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <motion.h1 className="absolute bottom-20 md:bottom-10 font-grotesque font-extrabold text-white text-4xl md:text-7xl lg:text-9xl">
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
