import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCalendarWeek, FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { google } from "calendar-link";

const Card = ({
  i,
  title,
  description,
  src,
  color,
  time,
  duration,
  date,
  link,
  btnType,
  eventImage,
  btnName = "Learn More",
}) => {
  const container = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });
  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Calculate the dynamic top position based on the index i
  const dynamicTop = `calc(0% + ${i * 20}px)`;

  // Construct an event object
  const event = {
    title,
    description,
    start: `${date} ${time} +0100`,
    duration: [duration, "hour"],
  };

  // create parametized google event link
  const googleUrl = google(event);

  // Helper function to convert unit time to readable format
  function convertTimeFormat(timeString) {
    // Extract hours, minutes, and seconds
    let [hours, minutes] = timeString.split(":");

    // Convert hours to a number
    hours = parseInt(hours, 10);

    // Determine AM/PM suffix
    const period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert '0' or '12' to '12'

    // Format hours and minutes with leading zeros if necessary
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.padEnd(2, "0");

    // Combine the parts into the desired format
    return `${formattedHours}:${formattedMinutes}${period}`;
  }

  return (
    <motion.div
      className="h-[900px] md:h-screen flex justify-center items-center sticky top-0"
      ref={container}
      style={{ top: dynamicTop }}
    >
      <div
        style={{ backgroundColor: color }}
        className="relative flex flex-col gap-10 md:items-start md:flex-row md:mt-0 md:justify-around lg:justify-between mb-12 md:mb-0 mx-10 h-[650px] sm:w-[1200px] sm:h-[800px] md:w-[1200px] md:h-[550px] rounded-[40px] p-5"
      >
        {/* Column 1: Title, Description, and Button*/}
        <div className="flex flex-col justify-between max-w-2xl md:max-w-sm lg:max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold md:mb-10 lg:mb-10 mb-5 mt-5 font-grotesque">
            {title}
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl font-grotesque font-light lg:leading-loose md:leading-relaxed">
            {description}
          </p>
          {date && (
            <span className="flex items-center gap-2 mt-10 font-grotesque font-light  text-md md:text-lg">
              <FaCalendarWeek size={23} />
              {date}
              <FaClock size={22} className="ml-3" />
              {convertTimeFormat(time)}
            </span>
          )}

          <div className="flex gap-3 mt-6 md:absolute md:bottom-10">
            <Link to={btnType === "event" ? googleUrl : link}>
              <button className=" px-3 py-4 max-w-[150px] rounded-2xl font-grotesque bg-white  hover:bg-black hover:text-white text-black">
                {btnName}
              </button>
            </Link>

            <Link to="mailto:samueludofia94@gmail.com">
              <button className=" px-3 py-4 max-w-[150px] rounded-2xl font-grotesque bg-black  hover:bg-white hover:text-black text-white">
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
