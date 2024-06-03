import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What can I expect if I visit Nyanya?",
      answer:
        "Nyanya Assembly is a community-based organization that focuses on uplifting and empowering individuals through various programs and activities.",
    },
    {
      question: "How can I join a group?",
      answer:
        "You can join a group by visiting our 'Join a Group' page and filling out the necessary information. Our team will get in touch with you soon.",
    },
    {
      question: "When are the upcoming events?",
      answer:
        "Our upcoming events are listed on the 'Events' page. We update it regularly to keep you informed about the latest happenings.",
    },
    {
      question: "How can I get pastoral care?",
      answer:
        "For pastoral care, please visit our 'Pastoral Care' page or contact us via email. Our dedicated team is always here to support you.",
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
    <div className="max-w-2xl mx-auto p-6">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-black">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg font-medium font-grotesque">
              {faq.question}
            </span>
            <span className="ml-4">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-180 transition-transform duration-200"
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
                  className="h-6 w-6 transition-transform duration-200"
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
                <div className="py-2 text-gray-600 font-grotesque font-light">
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
