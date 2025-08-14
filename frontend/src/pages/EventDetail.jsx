import { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarWeek,
  FaClock,
  FaShare,
  FaFacebook,
  FaWhatsapp,
  FaCopy,
  FaEnvelope,
  FaXTwitter,
  FaCalendarPlus,
} from "react-icons/fa6";
import { SiGooglecalendar, SiMicrosoftoutlook } from "react-icons/si";
import { FaYahoo } from "react-icons/fa";
import { google, outlook, yahoo } from "calendar-link";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";

const EventDetail = () => {
  const { eventId } = useParams();

  // Add debugging
  console.log("EventId from URL:", eventId);

  const [showCalendarPopover, setShowCalendarPopover] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Fetch all events and filter by ID
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/events?populate=*"
  );

  // Add more debugging
  console.log("API Response:", { loading, error, data });

  // Find the specific event by ID
  const event = data?.data?.find((evt) => evt.id.toString() === eventId);

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

  // Calendar event object
  const calendarEvent = useMemo(() => {
    if (!event) return null;
    return {
      title: event.title,
      description: event.description,
      start: new Date(`${event.date}T${event.time}+01:00`).toISOString(),
      duration: [event.duration, "hour"],
    };
  }, [event]);

  const googleUrl = calendarEvent ? google(calendarEvent) : "";
  const outlookUrl = calendarEvent ? outlook(calendarEvent) : "";
  const yahooUrl = calendarEvent ? yahoo(calendarEvent) : "";

  // Share functionality
  const currentUrl = window.location.href;
  const shareText = event ? `Check out this event: ${event.title}` : "";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${currentUrl}`
    )}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-anton mb-4">Event Not Found</h1>
        <p className="font-karla text-lg mb-8">
          The event you're looking for doesn't exist.
        </p>
        <Link
          to="/events"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-karla hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageTitle
        title={`${event.title} | Nyanya Assembly`}
        description={event.description}
      />

      {/* Removed HeroSection to eliminate empty space */}

      <section className="pt-[150px] pb-[80px] px-5">
        <div className="max-w-6xl mx-auto">
          {/* Back to Events Link */}
          <Link
            to="/events"
            className="inline-flex items-center text-black mb-8 font-karla transition-colors duration-300"
          >
            ← Back to Events
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Event Image */}
            <div className="order-2 md:order-1">
              <motion.img
                src={event.eventImage?.url}
                alt={event.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Event Details */}
            <div className="order-1 md:order-2">
              <motion.h1
                className="text-3xl md:text-4xl font-anton tracking-wide mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {event.title}
              </motion.h1>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-800">
                  <FaCalendarWeek size={20} />
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2 bg-[#F7F2E9] px-4 py-2 rounded-full text-black">
                  <FaClock size={20} />
                  {convertTimeFormat(event.time)}
                </span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl font-karla text-gray-700 leading-8 md:leading-10 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {event.description}
              </motion.p>

              {/* Action Buttons - Modern Design */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Add to Calendar Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowCalendarPopover(!showCalendarPopover)}
                    className="group px-6 py-3 md:px-6 md:py-3 bg-[#E5E0D4] text-black rounded-2xl font-karla hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <FaCalendarPlus className="text-lg" />
                    <span className="hidden sm:inline">Add to Calendar</span>
                  </button>
                  {showCalendarPopover && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 p-3 bg-white border border-gray-200 shadow-2xl rounded-2xl z-50 min-w-[200px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <a
                        href={googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-colors duration-200"
                      >
                        <SiGooglecalendar className="text-purple-600" /> Google
                        Calendar
                      </a>
                      <a
                        href={outlookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-indigo-50 rounded-xl transition-colors duration-200"
                      >
                        <SiMicrosoftoutlook className="text-indigo-600" />{" "}
                        Outlook
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

                {/* Share Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowSharePopover(!showSharePopover)}
                    className="group px-6 py-3 md:px-6 md:py-3 bg-gradient-to-r from-slate-100 to-white text-gray-800 rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <FaShare className="text-lg" />
                    <span className="hidden sm:inline">Share Event</span>
                  </button>
                  {showSharePopover && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 p-3 bg-white border border-gray-200 shadow-2xl rounded-2xl z-50 min-w-[200px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-colors duration-200"
                      >
                        <FaFacebook className="text-black text-lg" /> Facebook
                      </a>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-indigo-50 rounded-xl transition-colors duration-200"
                      >
                        <FaXTwitter className="text-black text-lg" /> Twitter
                      </a>
                      <a
                        href={shareUrls.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-colors duration-200"
                      >
                        <FaWhatsapp className="text-black text-lg" /> WhatsApp
                      </a>
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl w-full text-left transition-colors duration-200"
                      >
                        <FaCopy className="text-black text-lg" />{" "}
                        {copySuccess ? "Copied!" : "Copy Link"}
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Contact Button - keeping consistent */}
                <Link to="mailto:tacnna2024@gmail.com">
                  <button className="group px-6 py-3 md:px-6 md:py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl font-karla hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                    <FaEnvelope className="text-lg" />
                    <span className="hidden sm:inline">Contact Us</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transition(EventDetail);
