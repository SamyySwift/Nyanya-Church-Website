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
      className="relative py-20 md:h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
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
      <h1 className="md:text-7xl text-4xl lg:text-6xl mb-20 font-semibold text-center text-slate-300 relative font-grotesque">
        Our Church Services
      </h1>
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-5">
                <div className="flex items-center mb-4 font-grotesque">
                  <div className="bg-black h-10 w-10 mr-2 flex items-center justify-center text-white rounded-xl font-extralight">
                    {service.day.substring(0, 3)}
                  </div>
                  <h3 className="text-xl  font-semibold text-gray-800 tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <hr
                  className="w-full mb-1"
                  style={{
                    height: "1px",
                  }}
                />
                <div className="flex items-center mb-2 text-md py-2">
                  <FaClock className="text-xl text-gray-500 mr-2" />

                  <p className="text-gray-600 font-grotesque font-light">
                    {service.time}
                  </p>
                </div>
                <hr
                  className="w-full"
                  style={{
                    height: "1px",
                  }}
                />
                <p className="text-gray-800 font-grotesque font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Sunday Worship",
    time: "9:00 AM - 11:00 AM",
    day: "SUNDAY",
    description: "Join us for our weekly Sunday worship service.",
  },
  {
    title: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    day: "TUESDAY",
    description: "Deep dive into the scriptures with our midweek Bible study.",
  },
  {
    title: "Meeting With The Lord",
    time: "9:00 AM - 2:00 PM",
    day: "FRIDAY",
    description:
      "Experience God's power through prayers and prohetic sessions.",
  },
];

export default ChurchServices;
