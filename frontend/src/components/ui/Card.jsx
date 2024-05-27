import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCalendarWeek } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ i, title, description, src, color, date, link }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Calculate the dynamic top position based on the index i
  const dynamicTop = `calc(0% + ${i * 20}px)`;

  return (
    <motion.div
      className="h-[900px] md:h-screen flex justify-center items-center sticky top-0"
      ref={container}
      style={{ top: dynamicTop }}
    >
      <div
        style={{ backgroundColor: color }}
        className="flex flex-col gap-10 md:items-start md:flex-row md:mt-0 md:justify-around lg:justify-between mb-12 md:mb-0 mx-10 h-[650px] sm:w-[1200px] sm:h-[800px] md:w-[1200px] md:h-[550px] rounded-[40px] p-5"
      >
        {/* Column 1: Title, Description, and Button*/}
        <div className="flex flex-col justify-between max-w-2xl md:max-w-sm lg:max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold md:mb-20 mb-5 mt-5 font-grotesque">
            {title}
          </h2>
          <p className="text-sm sm:text-md md:text-lg font-poppins font-light">
            {description}
          </p>
          {date && (
            <span className="flex items-center gap-1 mt-5  text-md md:text-lg">
              <FaCalendarWeek size={22} />
              {date}
            </span>
          )}

          <div className="flex gap-3 mt-7 md:mt-20">
            <Link to={link}>
              <button className=" px-4 py-4 max-w-[150px] rounded-2xl bg-white  hover:bg-black hover:text-white text-black">
                Learn More
              </button>
            </Link>

            <Link to="mailto:samueludofia94@gmail.com">
              <button className=" px-4 py-4 max-w-[150px] rounded-2xl bg-black  hover:bg-white hover:text-black text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden md:mt-1 w-full h-full">
          <motion.img
            // style={{ scale }}
            // src={`http://localhost:1337${eventImage.data.attributes.url}`}
            src={src}
            alt={title}
            className="h-full w-full  md:h-[500px]  object-cover rounded-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
