import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      width: "100vw",
      height: "100vh",
      top: "-19px",
      right: "-30px",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.4, delay: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateX: -20,
      translateY: 90,
    },
    enter: (idx) => ({
      opacity: 1,
      rotateX: 0,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.65,
        delay: 0.6 + idx * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: (idx) => ({
      opacity: 0,
      y: -200,
      transition: {
        duration: 0.6,
        delay: 0.2 + idx * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  // Icons animations
  const slideIn = {
    initial: {
      opacity: 0,
      y: 200,
    },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: (i) => ({
      opacity: 0,
      y: 200,
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-[30px] md:px-12 py-10 lg:py-6 bg-black backdrop-filter backdrop-blur-xs bg-opacity-30">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="hidden lg:block">
            <div className="flex items-baseline gap-6 text-white font-grotesque text-lg font-thin cursor-pointer">
              {desktopLinks.map((navItem, idx) => {
                if (location.pathname !== "/" && navItem.link === "explore") {
                  return null;
                }
                return navItem.action === "scroll" ? (
                  <LinkScroll
                    key={`link=${idx}`}
                    smooth={true}
                    activeClass="active"
                    duration={500}
                    to={navItem.link}
                  >
                    <div className="duration-500 hover:-translate-y-1 hover:scale-105">
                      {navItem.title}
                    </div>
                  </LinkScroll>
                ) : (
                  <Link to={navItem.link} key={`link=${idx}`}>
                    <div
                      className={`duration-500 hover:-translate-y-1 hover:scale-105 ${
                        location.pathname === navItem.link ? "underline" : ""
                      }`}
                    >
                      {navItem.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="absolute top-5 right-[30px] z-50  lg:hidden ">
          <motion.div
            className={`relative ${!isOpen && "rounded-xl"}`}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            style={{ backgroundColor: "#EADBC8" }}
          >
            <div className="h-full pt-[150px] md:pt-[70px] pb-[40px] md:pl-[80px] pl-[40px] flex flex-col space-y-[60px] md:space-y-[70px] max-w-3xl">
              <AnimatePresence>
                {isOpen && (
                  <>
                    <div className="flex flex-col gap-4">
                      {links.map((link, idx) => {
                        return (
                          <div
                            key={idx}
                            style={{
                              perspective: "100px",
                              perspectiveOrigin: "bottom",
                            }}
                          >
                            <motion.div
                              custom={idx}
                              variants={perspective}
                              whileHover={{ translateX: 70 }}
                              animate="enter"
                              exit="exit"
                              initial="initial"
                            >
                              <Link
                                to={link.link}
                                className="text-4xl md:text-5xl lg:text-6xl font-grotesque font-semibold flex items-center"
                                onClick={toggleMenu}
                              >
                                {location.pathname === link.link && (
                                  <div className="mr-3 w-4 h-4 md:w-7 md:h-7 bg-black rounded-full"></div>
                                )}
                                {link.title}
                              </Link>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Footer */}
                    <div className="flex gap-3">
                      {socials.map((social, i) => {
                        return (
                          <motion.div
                            key={`k_${i}`}
                            custom={i}
                            variants={slideIn}
                            whileHover={{ translateY: -10, scale: 1.2 }}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                            className="p-1 rounded-full border border-black bg-white flex items-center justify-center"
                          >
                            <Link to={social.link}>{social.icon}</Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Button */}
          <div
            className="absolute top-0 right-0 h-[40px] w-[100px] rounded-2xl cursor-pointer overflow-hidden"
            onClick={toggleMenu}
          >
            <motion.div
              animate={{ top: isOpen ? "-100%" : "0" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative h-full w-full"
            >
              <div className="flex justify-center items-center gap-2 h-full w-full">
                <p className="font-semibold">MENU</p>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
              <div className="absolute top-full h-full w-full flex justify-center gap-2 items-center bg-black text-white">
                <p className="font-semibold">CLOSE</p>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: isOpen ? 0 : -45 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;

const desktopLinks = [
  { title: "Home", link: "/", action: "route" },
  { title: "Events", link: "/events", action: "route" },
  { title: "About Us", link: "/about", action: "route" },
  { title: "Explore & Connect", link: "explore", action: "scroll" },
  { title: "Plan your visit", link: "/plan-your-visit", action: "route" },
  { title: "Contact Us", link: "footer", action: "scroll" },
];

const links = [
  { title: "Home", link: "/" },
  { title: "Events", link: "/events" },
  { title: "About Us", link: "/about" },
  { title: "Join a Team", link: "/join-a-group" },
  { title: "Plan your visit", link: "/plan-your-visit" },
];

const socials = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d",
    icon: <FaFacebook size={25} className="hover:text-sky-500 rounded-full" />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/tacn_na?igsh=dDhxcmplNzVzZDNw",
    icon: <FaInstagram size={25} className="hover:text-sky-500 rounded-full" />,
  },
  {
    title: "YouTube",
    link: "/",
    icon: <FaYoutube size={25} className="hover:text-sky-500 rounded-full" />,
  },
  {
    title: "Twitter",
    link: "/",
    icon: <FaXTwitter size={25} className="hover:text-sky-500 rounded-full" />,
  },
];
