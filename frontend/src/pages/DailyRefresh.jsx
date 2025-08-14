import HeroSection from "../components/HeroSection";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import customFetch from "../hooks/customFetch";
import { Link } from "react-router-dom";
import { RenderText } from "../components/RenderRichText";
import { LazyLoadedComponent } from "../components/LazyLoadComponent";
import { useState } from "react";
import {
  FaShare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCopy,
  FaEnvelope,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const DailyCard = ({ message }) => {
  const [showSharePopover, setShowSharePopover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Share functionality - use message attributes for URL
  const messageId =
    message.id ||
    message.documentId ||
    message.slug ||
    encodeURIComponent(message.title);
  const currentUrl = `${window.location.origin}/read-more?id=${messageId}`;
  const shareText = `Check out this daily word: ${message.title} by ${message.preacher}`;

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
    email: `mailto:?subject=${encodeURIComponent(
      message.title
    )}&body=${encodeURIComponent(`${shareText} ${currentUrl}`)}`,
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

  // Debug: Log the message object to see its structure
  console.log("Message object:", message);

  return (
    <div className="flex flex-col md:flex-row mb-20 font-karla relative">
      <img
        src={message.image.url}
        alt={message.title}
        className="md:min-w-[300px] lg:w-[500px] h-[350px] object-cover"
      />
      <div className="flex flex-col items-start md:px-8 mt-5 md:mt-0 max-w-3xl">
        {/* Share Button - positioned at top right of content */}
        <div className="absolute top-3 right-3 md:top-5 md:right-5 z-50">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowSharePopover(!showSharePopover);
            }}
            className="p-2 bg-cyan-500 hover:bg-cyan-700 rounded-full transition-all duration-200 shadow-lg"
          >
            <FaShare className="text-white text-sm" />
          </button>

          {/* Share Popover */}
          {showSharePopover && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 z-50 min-w-[200px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-2">
                <a
                  href={shareUrls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                >
                  <FaFacebook size={16} className="text-blue-600" />
                  <span className="font-karla text-sm">Facebook</span>
                </a>
                <a
                  href={shareUrls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                >
                  <FaTwitter size={16} className="text-sky-500" />
                  <span className="font-karla text-sm">Twitter</span>
                </a>
                <a
                  href={shareUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                >
                  <FaWhatsapp size={16} className="text-green-500" />
                  <span className="font-karla text-sm">WhatsApp</span>
                </a>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600 w-full text-left"
                >
                  <FaCopy size={16} className="text-gray-600" />
                  <span className="font-karla text-sm">
                    {copySuccess ? "Copied!" : "Copy Link"}
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <h2 className="text-2xl md:text-3xl font-anton">{message.title}</h2>

        <p className="text-xl mt-3 font-light">
          <span className="font-normal">Preacher: </span>
          {message.preacher}
        </p>
        <p className="text-xl font-light">
          <span className="font-normal">Bible Portion: </span> {message.portion}
        </p>

        <p className="text-xl md:text-2xl mt-4 line-clamp-2">
          <RenderText content={message.content} />
        </p>

        <Link
          to={"/read-more"}
          state={{ message }}
          className="text-[#F2A83C] hover:underline mt-5 text-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const DailyRefresh = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/daily-words?populate=*"
  );

  return (
    <>
      <PageTitle
        title="Daily Word | Nyanya Assembly"
        description="page containing all church daily words"
      />
      <HeroSection backgroundImage="images/bible.webp" svg_color="#F7F2E9" />
      <div className="bg-[#F7F2E9] py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl mb-10 lg:text-7xl xl:text-8xl">
            <span className="font-anton">Church</span>{" "}
            <span className="font-thin italic font-saol">Sermons</span>
          </h2>
          <p className="font-karla text-neutral-700 font-light mb-[90px] text-xl text-justify max-w-2xl">
            Explore our collection of sermons that offer spiritual guidance,
            inspiration, and encouragement. Stay connected with our community
            and deepen your faith through these powerful messages.
          </p>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="loader"></span>
            </div>
          ) : error ? (
            <div className="py-20">
              <h1 className="flex justify-center  text-center text-xl  py-[100px] font-karla">
                Could not retrieve daily words, try again.
              </h1>
            </div>
          ) : (
            <div>
              {data?.data?.length > 0 ? (
                data.data.map((message, index) => (
                  <LazyLoadedComponent key={index}>
                    <DailyCard message={message} />
                  </LazyLoadedComponent>
                ))
              ) : (
                <p className="flex justify-center  text-center text-xl  py-[100px] font-karla">
                  No Daily Words at the moment. Try again later
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Transition(DailyRefresh);
