import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCalendarWeek,
  FaClock,
  FaApple,
  FaYahoo,
  FaShare,
  FaArrowUpRightFromSquare,
  FaCalendarPlus,
  FaEnvelope,
} from "react-icons/fa6";
import { SiGooglecalendar, SiMicrosoftoutlook } from "react-icons/si";

import { Link } from "react-router-dom";
import { google, outlook, yahoo } from "calendar-link";

const Card = ({
  i,
  title,
  description,
  color,
  time,
  src,
  duration,
  date,
  link,
  btnType,
  eventImage,
  btnName = "Learn More",
  eventId, // Add eventId prop
}) => {
  // Calculate the dynamic top position based on the index i
  const dynamicTop = `calc(0% + ${i * 20}px)`;

  // Construct an event object
  const event = {
    title,
    description,
    start: new Date(`${date}T${time}+01:00`).toISOString(),
    duration: [duration, "hour"],
  };

  const googleUrl = google(event);
  const outlookUrl = outlook(event);
  const yahooUrl = yahoo(event);

  // Helper function to convert unit time to readable format
  function convertTimeFormat(timeString) {
    if (!timeString) return "";
    let [hours, minutes] = timeString.split(":");
    hours = parseInt(hours, 10);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.padEnd(2, "0");
    return `${formattedHours}:${formattedMinutes}${period}`;
  }

  const [showPopover, setShowPopover] = useState(false);

  return (
    <motion.div
      className="h-auto pt-[90px] md:pt-[110px] flex justify-center items-center sticky top-0"
      style={{ top: dynamicTop }}
    >
      <div
        style={{ backgroundColor: color }}
        className="relative flex flex-col gap-10 md:items-start md:flex-row md:mt-0 md:justify-around lg:justify-between mb-12 md:mb-0 mx-5 h-[680px] sm:w-[1200px] sm:h-[800px] md:min-w-[700px] md:h-[500px] lg:w-[1100px] lg:h-[550px] xl:w-[1200px] xl:h-[650px]  rounded-[40px] px-5 md:px-8 py-5"
      >
        {/* Column 1: Title, Description, and Button*/}
        <div className="flex flex-col justify-between max-w-3xl md:max-w-[400px] lg:max-w-[500px]">
          <h2 className="text-2xl md:text-4xl md:mb-10 lg:mb-10 mb-5 mt-4 font-anton tracking-wide">
            {title}
          </h2>
          <p className="text-md md:text-lg lg:text-xl font-karla text-justify font-light leading-6 lg:leading-loose md:leading-relaxed line-clamp-5">
            {description}
          </p>
          <div className="md:absolute md:bottom-[145px] ">
            {date && (
              <span className="flex items-center gap-2 mt-5 md:mt-10 font-karla font-semibold text-md md:text-lg">
                <FaCalendarWeek size={20} />
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <FaClock size={20} className="ml-3" />
                {convertTimeFormat(time)}
              </span>
            )}
          </div>

          <div className="flex gap-3 mt-5 md:absolute md:bottom-10 relative">
            {btnType === "event" ? (
              <>
                {/* Add to Calendar Button - Modern Design */}
                <div className="relative">
                  <button
                    onClick={() => setShowPopover(!showPopover)}
                    className="group px-6 py-3 md:px-6 md:py-3 bg-gradient-to-r from-slate-100 to-white text-gray-800 rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <FaCalendarPlus className="text-lg" />
                    <span className="hidden sm:inline">{btnName}</span>
                  </button>
                  {showPopover && (
                    <motion.div
                      className="font-karla absolute bottom-full left-0 mb-5 p-3 bg-white border border-gray-200 shadow-2xl rounded-3xl z-50 min-w-[200px]"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <a
                        href={googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors duration-200"
                      >
                        <SiGooglecalendar className="text-blue-600" /> Google
                        Calendar
                      </a>
                      <a
                        href={outlookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors duration-200"
                      >
                        <SiMicrosoftoutlook className="text-blue-800" /> Outlook
                        Calendar
                      </a>
                      <a
                        href={yahooUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-colors duration-200"
                      >
                        <FaYahoo className="text-purple-600" /> Yahoo Calendar
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* View Details Button - Modern Design with Purple Gradient */}
                {eventId && (
                  <Link to={`/events/${eventId}`}>
                    <button className="group px-6 py-3 md:px-6 md:py-3 bg-gradient-to-r from-slate-100 to-white text-gray-800 rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                      <FaArrowUpRightFromSquare className="text-lg" />
                      <span className="hidden sm:inline">View Details</span>
                    </button>
                  </Link>
                )}
              </>
            ) : (
              <Link to={link}>
                <button className="group px-4 py-3 md:px-4 md:py-3 bg-gradient-to-r from-slate-100 to-white text-gray-800 rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 min-w-[120px] justify-center">
                  <FaArrowUpRightFromSquare className="text-lg" />
                  <span className="hidden sm:inline">{btnName}</span>
                </button>
              </Link>
            )}

            {/* Contact Us Button - Modern Design */}
            <Link to="mailto:tacnna2024@gmail.com">
              <button className="group px-6 py-3 md:px-6 md:py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center">
                <FaEnvelope className="text-lg" />
                <span className="hidden sm:inline">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden h-full md:w-[350px] lg:w-[500px] xl:w-[550px]">
          <motion.img
            src={btnType !== "event" ? src : eventImage}
            alt={title}
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
