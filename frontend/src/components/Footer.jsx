import { FaPhone, FaLocationDot, FaArrowUp } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();

  return (
    <footer
      className=" bg-black py-[70px] md:py-[170px] relative text-white"
      // style={{ backgroundColor: "#0000" }}
      name="footer"
    >
      <div className="container mx-auto px-5 lg:px-[100px] flex flex-col gap-10  md:flex-row md:justify-between">
        {/* LOGO */}
        <div className="flex flex-col items-start gap-2">
          <Link to="/">
            <img
              src="images/logo.jpg"
              alt="Logo"
              className="h-[80px] md:h-[100px] rounded-xl"
            />
          </Link>
          <h2 className="font-anton text-2xl md:text-3xl max-w-sm text-neutral-200">
            TACN <br /> Nyanya <br /> Assembly
          </h2>
        </div>
        {/* Contact */}
        <div className="flex flex-col">
          <h1 className="mb-5 font-anton text-lg md:text-xl lg:text-2xl underline underline-offset-8">
            Contact Us
          </h1>
          <div className="max-w-sm md:max-w-xs lg:max-w-sm space-y-3 font-karla text-lg  md:text-xl lg:text-2xl">
            {/* <p className="">TACN Nyanya Assembly</p> */}
            <span className="flex items-center font-light gap-2">
              <MdEmail className="" />
              <span>tacnna2024@gmail.com</span>
            </span>
            <p className="flex items-center font-light gap-2">
              <FaPhone className="w-4" />
              <span>(+234) 816 725 9757</span>
            </p>
            <p className="flex font-light gap-[6px] text-justify">
              <FaLocationDot className="w-8 mt-1" />
              <span>
                NO. 2, Church Avenue, Nyanya Karu Road Opposite A.A. Rano Fuel
                Station, Nyanya, Abuja, FCT
              </span>
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="items-center max-w-[250px]">
          <h1 className="mb-5 font-anton text-lg md:text-xl lg:text-2xl underline underline-offset-8">
            Quick Links
          </h1>
          <div className="grid grid-cols-2 gap-0 font-light font-karla text-lg md:text-xl lg:text-2xl">
            {links.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                className="flex items-center"
              >
                {location.pathname === link.href && (
                  <div className="mr-1 w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
                )}
                <p className="hover:underline hover:scale-105 duration-500">
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="items-center">
          <h1 className="mb-5 font-anton text-lg md:text-xl lg:text-2xl underline underline-offset-8">
            Follow Our Socials
          </h1>
          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link to={social.link} key={social.title}>
                <motion.div
                  whileHover={{ translateY: -6, scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                  className="p-1 rounded-full border border-white text-black bg-white flex items-center justify-center"
                >
                  {social.icon}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-0 inset-0 flex justify-center items-end py-5">
          <p className="font-karla">
            &copy; 2025 Nyanya Assembly. All Rights Reserved.
          </p>
        </div> */}
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-3 p-3 rounded-full bg-white text-black hover:bg-gray-700 transition duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "I'm New",
    href: "/welcome",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Sermons",
    href: "/daily-words",
  },
  {
    name: "Giving",
    href: "/giving",
  },

  {
    name: "Teams",
    href: "/join-a-group",
  },
  {
    name: "Visit Us",
    href: "/plan-your-visit",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
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
    icon: (
      <RiInstagramFill size={25} className="hover:text-sky-500 rounded-full" />
    ),
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/@TACN_NA",
    icon: <FaYoutube size={25} className="hover:text-sky-500 rounded-full" />,
  },
];
