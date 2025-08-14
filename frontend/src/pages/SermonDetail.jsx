import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCopy,
  FaEnvelope,
  FaClock,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";

const SermonDetail = () => {
  const { sermonId } = useParams();

  const [showSharePopover, setShowSharePopover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Fetch all sermons and filter by ID
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/sermons?populate=*"
  );

  // Find the specific sermon by ID
  const sermon = data?.data?.find((serm) => serm.id.toString() === sermonId);

  // Loading and error states
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (error || !sermon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-anton mb-4">Sermon Not Found</h1>
          <p className="font-karla text-gray-600 mb-6">
            The sermon you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/daily-word"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-karla"
          >
            Back to Sermons
          </Link>
        </div>
      </div>
    );
  }

  // Share functionality - moved after sermon data validation
  const currentUrl = window.location.href;
  const shareText = `Check out this sermon: ${sermon.title} by ${sermon.preacher}`;

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
      sermon.title
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <PageTitle
        title={`${sermon.title} | Nyanya Assembly`}
        description={`Listen to ${sermon.title} by ${sermon.preacher} - A sermon from Nyanya Assembly`}
      />

      <section className="pt-[150px] pb-[80px] px-5">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/daily-word"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 font-karla"
            >
              ← Back to Sermons
            </Link>
          </motion.div>

          {/* Sermon Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton text-gray-900 mb-6 leading-tight">
              {sermon.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 font-karla">
              <div className="flex items-center gap-2">
                <BsPersonCircle className="text-purple-600" size={20} />
                <span className="text-lg">{sermon.preacher}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-purple-600" size={18} />
                <span className="text-lg">{formatDate(sermon.date)}</span>
              </div>
            </div>
          </motion.div>

          {/* Sermon Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={sermon.image.url}
                alt={sermon.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* Listen to Sermon Button */}
            <a
              href={sermon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-karla text-lg"
            >
              <FaArrowUpRightFromSquare size={20} />
              Listen to Sermon
            </a>

            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShowSharePopover(!showSharePopover)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-100 to-white text-gray-700 border border-gray-200 rounded-xl hover:from-gray-50 hover:to-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-karla text-lg"
              >
                <FaShare size={18} />
                Share Sermon
              </button>

              {/* Share Popover */}
              {showSharePopover && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[280px]"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                    >
                      <FaFacebook size={20} className="text-blue-600" />
                      <span className="font-karla text-sm">Facebook</span>
                    </a>
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                    >
                      <FaTwitter size={20} className="text-sky-500" />
                      <span className="font-karla text-sm">Twitter</span>
                    </a>
                    <a
                      href={shareUrls.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                    >
                      <FaWhatsapp size={20} className="text-green-500" />
                      <span className="font-karla text-sm">WhatsApp</span>
                    </a>
                    <a
                      href={shareUrls.email}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600"
                    >
                      <FaEnvelope size={20} className="text-gray-600" />
                      <span className="font-karla text-sm">Email</span>
                    </a>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-gray-700 hover:text-purple-600 w-full"
                    >
                      <FaCopy size={18} className="text-gray-500" />
                      <span className="font-karla text-sm">
                        {copySuccess ? "Copied!" : "Copy Link"}
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sermon Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-anton text-gray-900 mb-6">
              About This Sermon
            </h2>
            <div className="space-y-4 font-karla text-gray-700 leading-relaxed">
              <p className="text-lg">
                Join us as <strong>{sermon.preacher}</strong> shares an inspiring message titled "{sermon.title}" delivered on {formatDate(sermon.date)}.
              </p>
              <p className="text-lg">
                This sermon offers spiritual guidance, inspiration, and encouragement to help deepen your faith and strengthen your relationship with God.
              </p>
              <p className="text-lg">
                We invite you to listen, reflect, and be blessed by this powerful message from our church community.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-anton text-gray-900 mb-4">
                Want to Learn More?
              </h3>
              <p className="font-karla text-gray-600 mb-6">
                Connect with us for more spiritual guidance and community fellowship.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 font-karla"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Transition(SermonDetail);