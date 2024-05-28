import { FaClock, FaBoxArchive } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import HoverBorderGradientButton from "./ui/hover-border-gradient";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { SparklesCore } from "./ui/sparkles";
import { Link } from "react-router-dom";

const ChurchServices = () => {
  const { ref } = useParallax({
    speed: -20,
  });
  return (
    <div
      className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
      ref={ref}
    >
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-4xl lg:text-6xl font-semibold text-center text-slate-300 relative z-20 font-grotesque">
        Our Church Services
      </h1>
      <div className="flex md:flex-row  gap-10 mt-10  relative z-20 text-white font-poppins">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-10 md:w-[400px]"
        >
          <h2 className="text-xl md:text-3xl font-extralight underline text-center lg:text-left">
            Weekly Services...
          </h2>

          <div className="flex flex-col items-center md:gap-3 gap-1">
            {/* <FaPlaceOfWorship className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]" /> */}
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">
              SUNDAY SERVICE
            </h1>
            <span className="font-light text-md md:text-xl">
              Sunday Worship
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" />
              <span className="font-light text-md md:text-xl">08 : 00 AM</span>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">
              TUESDAY SERVICE
            </h1>
            <span className="font-light text-md md:text-xl">Bible Study</span>
            <span className="flex items-center gap-1">
              <FaClock className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" />
              <span className="font-light text-md md:text-xl"> 07 : 00 PM</span>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">
              FRIDAY SERVICE
            </h1>
            <span className="font-light text-md md:text-xl">
              Meeting with the lord
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" />
              <span className="font-light text-md md:text-xl"> 09 : 00 AM</span>
            </span>
          </div>
        </motion.div>
        {/* Column 2 */}
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-10 md:w-[400px]"
        >
          <h2 className="text-xl md:text-3xl font-extralight underline text-center lg:text-left ">
            Join Us Online...
          </h2>

          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-bold text-lg md:text-2xl tracking-tight">
              STREAM ONLINE
            </h1>
            <span className="font-light text-sm md:text-xl">
              Sundays & Fridays
            </span>
            <Link to="https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d">
              <HoverBorderGradientButton
                text={"Stream"}
                icon={<CiStreamOn size={22} />}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-bold text-lg md:text-2xl tracking-tight">
              ARCHIVED SERVICES
            </h1>
            <span className="font-light text-md md:text-xl">All Services</span>
            <HoverBorderGradientButton
              text={"Archives"}
              icon={<FaBoxArchive size={20} />}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChurchServices;
