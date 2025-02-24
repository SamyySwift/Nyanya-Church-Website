import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen ? enablePageScroll() : disablePageScroll();
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black backdrop-filter backdrop-blur-xs bg-opacity-50">
      <div className="container mx-auto px-5 py-3 md:py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="images/logo.jpg"
            alt="Logo"
            className="h-8 md:h-12 rounded-full"
          />
          {/* <div className="flex flex-col text-white font-karla">
            <span className="text-[10px] md:text-xs font-bold hidden md:block">
              The Apostolic Church Nigeria <br /> Nyanya Assembly
            </span>
          </div> */}
        </Link>
        {/* Desktop Navigation with Social Icons  */}
        <div className="hidden xl:flex items-center gap-5 text-neutral-300 font-karla text-lg lg:text-xl font-extralight cursor-pointer">
          {navLinks.map((navItem, idx) =>
            location.pathname !== "/" &&
            navItem.link === "explore" ? null : navItem.scroll ? (
              <LinkScroll
                key={idx}
                smooth={true}
                duration={500}
                to={navItem.link}
                className={`hover:-translate-y-1 hover:scale-105 duration-500 ${
                  location.pathname === navItem.link ? "underline" : ""
                }`}
              >
                {navItem.title}
              </LinkScroll>
            ) : (
              <Link
                to={navItem.link}
                key={idx}
                className={`hover:-translate-y-1 hover:scale-105 duration-500 ${
                  location.pathname === navItem.link
                    ? "underline underline-offset-4 decoration-[1px]"
                    : ""
                }`}
              >
                {navItem.title}
              </Link>
            )
          )}
          {/* Social Icons in Navbar */}
          <div className="flex gap-4 ml-5">
            {navSocials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="block xl:hidden z-50" onClick={toggleMenu}>
          <motion.div
            className="space-y-2 relative"
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="h-[1px] w-8 bg-white"
              animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="h-[1px] w-8 bg-white"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 z-40 w-full h-full bg-white"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-5">
              {navLinks.map((navItem, idx) => (
                <Link
                  key={idx}
                  to={navItem.link}
                  onClick={toggleMenu}
                  className="text-2xl font-bold"
                >
                  {navItem.title}
                </Link>
              ))}
              {/* Social Icons in Mobile Menu */}
              <div className="flex gap-4 mt-6">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:scale-110 transition-transform"
                  >
                    {social.icon}
                  </a>
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
  { title: "Explore", link: "explore", scroll: true },
  { title: "Giving", link: "/giving" },
  { title: "About us", link: "/about" },
  { title: "Join a team", link: "/join-a-group" },
  { title: "Plan your visit", link: "/plan-your-visit" },
];

const socials = [
  {
    icon: <FaFacebook size={28} />,
    link: "https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d",
  },
  {
    icon: <RiInstagramFill size={28} />,
    link: "https://www.instagram.com/tacn_na?igsh=dDhxcmplNzVzZDNw",
  },
  { icon: <FaYoutube size={28} />, link: "https://www.youtube.com/@TACN_NA" },
];
const navSocials = [
  {
    icon: <FaInstagram size={20} />,
    link: "https://www.instagram.com/tacn_na?igsh=dDhxcmplNzVzZDNw",
  },
  {
    icon: <FaFacebookF size={20} />,
    link: "https://www.facebook.com/profile.php?id=100068068014989&mibextid=LQQJ4d",
  },

  { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/@TACN_NA" },
];
export default Navbar;
