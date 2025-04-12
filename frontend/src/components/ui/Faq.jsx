import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I join a group?",
      answer: (
        <>
          You can join a group by visiting our{" "}
          <Link to="/join-a-group" className="font-bold">
            Join a Group
          </Link>{" "}
          page and filling out the necessary information. Our team will get in
          touch with you soon.
        </>
      ),
    },

    {
      question: "When are the upcoming events?",
      answer: (
        <>
          Our upcoming events are listed on the{" "}
          <Link to="/events" className="font-bold">
            Events Page
          </Link>
          . We update it regularly to keep you informed about the latest
          happenings.
        </>
      ),
    },

    {
      question: "What are our different church service times?",
      answer: (
        <>
          Our different church service times can be found on the{" "}
          <Link to="/" className="font-bold">
            Home Page.
          </Link>{" "}
          Please visit it for detailed information.
        </>
      ),
    },

    {
      question: "What pastoral care services does the church offer?",
      answer:
        "Our church provides a range of pastoral care services, including counseling, prayer support, hospital visits, and more. Please reach out to our pastoral care team for assistance.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg md:text-xl font-karla text-white">
              {faq.question}
            </span>
            <span className="ml-4">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-180 transition-transform duration-200 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform duration-200 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="py-2 text-lg text-white font-karla font-light">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
