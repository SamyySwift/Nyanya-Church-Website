import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarWeek, FaClock, FaApple, FaYahoo } from "react-icons/fa6";
import { SiGooglecalendar, SiMicrosoftoutlook } from "react-icons/si";

import { Link } from "react-router-dom";
import { google, outlook, ics, yahoo } from "calendar-link";

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
}) => {
  // Calculate the dynamic top position based on the index i
  const dynamicTop = `calc(0% + ${i * 20}px)`;

  // Construct an event object
  const event = {
    title,
    description,
    start: `${date} ${time} +0100`,
    duration: [duration, "hour"],
  };

  // create parameterized calendar event links
  const googleUrl = google(event);
  const outlookUrl = outlook(event);
  const icsUrl = ics(event);
  const yahooUrl = yahoo(event);

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
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-karla text-justify font-light leading-6 lg:leading-loose md:leading-relaxed">
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
                <button
                  onClick={() => setShowPopover(!showPopover)}
                  className="px-3 py-4 max-w-[150px] rounded-2xl font-karla bg-white"
                >
                  {btnName}
                </button>
                {showPopover && (
                  <motion.div
                    className="font-karla absolute bottom-full left-0 mb-5 p-3 bg-white border border-gray-300 shadow-md rounded-3xl z-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* <a
                      href={icsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3 text-black hover:bg-gray-100"
                    >
                      <FaApple /> Apple Calendar
                    </a> */}
                    <a
                      href={googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3 text-black hover:bg-gray-100"
                    >
                      <SiGooglecalendar /> Google Calendar
                    </a>
                    <a
                      href={outlookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3 text-black hover:bg-gray-100"
                    >
                      <SiMicrosoftoutlook /> Outlook Calendar
                    </a>
                    <a
                      href={yahooUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3 text-black hover:bg-gray-100"
                    >
                      <FaYahoo /> Yahoo Calendar
                    </a>
                  </motion.div>
                )}
              </>
            ) : (
              <Link to={link}>
                <button className="px-3 py-4 max-w-[150px] rounded-2xl font-grotesque bg-white hover:bg-black hover:text-white text-black">
                  {btnName}
                </button>
              </Link>
            )}

            <Link to="mailto:tacnna2024@gmail.com">
              <button className="px-3 py-4 max-w-[150px] rounded-2xl font-grotesque bg-black text-white">
                Contact Us
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
