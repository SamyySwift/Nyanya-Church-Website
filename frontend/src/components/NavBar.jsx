import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      width: "100vw",
      height: "100vh",
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      transition: { duration: 0.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
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
        duration: 0.5,
        delay: 0.5 + idx * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: (idx) => ({
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        delay: 0.2 + idx * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

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
    <nav className="absolute w-full top-0 z-50 bg-gradient-to-b from-black to-black/0 backdrop-filter backdrop-blur-xs bg-opacity-30">
      <div className="container mx-auto px-5 md:px-8 xl:px-[80px] py-6 flex justify-between items-center">
        <Link to="/">
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-10" /> */}
          {/* <div class="text-white border border-1 border-white rounded-full flex justify-center items-center text-sm md:w-15 md:h-15 md:text-xs sm:w-16 sm:h-16 sm:text-xs">
            <span>
              Nyanya <br />
              Assembly
            </span>
          </div> */}
        </Link>
        <div className="hidden xl:flex items-baseline gap-5  text-white font-grotesque text-md font-thin cursor-pointer">
          {navLinks.map((navItem, idx) => {
            if (location.pathname !== "/" && navItem.link === "explore") {
              return null;
            }
            return navItem.scroll ? (
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
                    location.pathname === navItem.link
                      ? "underline font-thin"
                      : ""
                  }`}
                >
                  {navItem.title}
                </div>
              </Link>
            );
          })}
        </div>

        <div
          className="block xl:hidden relative h-[40px] w-[100px] rounded-2xl cursor-pointer overflow-hidden z-50"
          onClick={toggleMenu}
          style={{ backgroundColor: "#FFFF" }}
        >
          <motion.div
            animate={{ top: isOpen ? "-100%" : "0" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative h-full w-full"
          >
            <div className="flex relative justify-center items-center gap-1 h-full w-full">
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
            <div className="absolute top-full h-full w-full flex justify-center gap-1 items-center bg-black text-white">
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
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed top-0 right-0 z-40 ${!isOpen && ""}`}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            style={{ backgroundColor: "#f7f2e9" }}
          >
            <div className="relative h-full md:pl-[80px] pl-[40px] flex flex-col justify-center max-w-3xl">
              <div className="flex flex-col gap-2 md:gap-5 lg:gap-7">
                {navLinks.map((navItem, idx) => {
                  if (location.pathname !== "/" && navItem.link === "explore") {
                    return null; // Skip rendering for "explore" link when pathname is not "/"
                  }

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
                        animate="enter"
                        exit="exit"
                        initial="initial"
                      >
                        {navItem.scroll ? (
                          <LinkScroll
                            smooth={true}
                            activeClass="active"
                            duration={500}
                            to={navItem.link}
                            className="text-3xl lg:text-5xl font-grotesque font-semibold  flex items-center"
                            onClick={toggleMenu}
                          >
                            {location.pathname === navItem.link && (
                              <div className="mr-3 w-4 h-4 md:w-7 md:h-7 bg-black rounded-full"></div>
                            )}
                            {navItem.title}
                          </LinkScroll>
                        ) : (
                          <Link
                            to={navItem.link}
                            className="text-3xl lg:text-5xl font-grotesque font-semibold flex items-center duration-500 xl:hover:-translate-y-1 xl:hover:scale-105"
                            onClick={toggleMenu}
                          >
                            {location.pathname === navItem.link && (
                              <div className="mr-2 w-2 h-2 md:w-4 md:h-4 bg-black rounded-full"></div>
                            )}
                            {navItem.title}
                          </Link>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 absolute bottom-[160px]">
                {socials.map((social, i) => (
                  <motion.div
                    key={`k_${i}`}
                    custom={i}
                    variants={slideIn}
                    whileHover={{ translateY: -10, scale: 1.2 }}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    className="p-1 rounded-full border border-black bg-white flex items-center justify-center "
                  >
                    <Link to={social.link}>{social.icon}</Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Events", link: "/events" },
  { title: "Sermons", link: "/sermons" },
  {
    title: "Explore",
    link: "explore",
    scroll: true,
  },
  { title: "About Us", link: "/about" },
  { title: "Contact Us", link: "footer", scroll: true },
  { title: "Plan Your Visit", link: "/plan-your-visit" },
];

export default Navbar;

const socials = [
  {
    icon: <FaFacebook size={28} />,
    link: "https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d",
  },
  {
    icon: <FaInstagram size={28} />,
    link: "https://www.instagram.com/tacn_na?igsh=dDhxcmplNzVzZDNw",
  },
  { icon: <FaYoutube size={28} />, link: "#" },
];
