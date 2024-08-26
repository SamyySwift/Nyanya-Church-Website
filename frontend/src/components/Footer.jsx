import { FaPhone, FaLocationDot, FaArrowUp } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
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
      className="text-black py-[140px] flex flex-col pl-6 md:pl-0 md:flex-row pt-20 md:justify-around gap-12 md:gap-0 relative"
      style={{ backgroundColor: "#f7f2e9" }}
      name="footer"
    >
      {/* LOGO */}
      <div className="">
        <Link to="/">
          <img
            src="images/logo.jpg"
            alt="Logo"
            className="h-[100px] md:h-[150px] rounded-full"
          />
        </Link>
      </div>
      {/* Contact */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-md md:text-lg lg:text-xl">
          CONTACT US
        </h1>
        <div className="max-w-sm md:max-w-xs lg:max-w-sm space-y-3 font-grotesque md:text-md">
          <p className="">TAC NYANYA ASSEMBLY</p>
          <span className="flex items-center font-light gap-2">
            <MdEmail className="" />
            <span>tacnna2024@gmail.com</span>
          </span>
          <p className="flex items-center font-light gap-2">
            <FaPhone className="w-4" />
            <span>(+234) 816 725 9757</span>
          </p>
          <p className="flex font-light gap-[6px]">
            <FaLocationDot className="w-8 mt-1" />
            <span>
              NO. 2, Church Avenue, Nyanya Karu Road Opposite A.A. Rano Filling
              Station, Nyanya,
              <br /> Abuja, FCT
            </span>
          </p>
        </div>
        <hr
          className="mt-7 w-[340px] md:w-[290px] lg:w-[330px]"
          style={{
            backgroundColor: "black",
            height: "1px",
            border: "none",
          }}
        />
        {/* Socials */}
        <div className="flex gap-4 mt-6">
          {socials.map((social) => (
            <Link to={social.link} key={social.title}>
              <motion.div
                whileHover={{ translateY: -10, scale: 1.3 }}
                transition={{ duration: 0.4 }}
                className="p-1 rounded-full border border-black bg-white flex items-center justify-center"
              >
                {social.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-md md:text-lg">QUICK LINKS</h1>
        <div className="flex flex-col gap-2 font-light font-grotesque text-md md:text-md">
          {links.map((link) => (
            <Link to={link.href} key={link.name} className="flex items-center">
              {location.pathname === link.href && (
                <div className="mr-1 w-1 h-1 md:w-2 md:h-2 bg-black rounded-full"></div>
              )}
              <p className="hover:underline hover:scale-105 duration-500">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5">
        <p className="font-grotesque">
          &copy; 2024 Nyanya Assembly. All Rights Reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-20 right-8 p-3 rounded-full bg-black text-white hover:bg-gray-700 transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>
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
    name: "Events",
    href: "/events",
  },
  {
    name: "Sermons",
    href: "/sermons",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Join a group",
    href: "/join-a-group",
  },
  {
    name: "Plan your visit",
    href: "/plan-your-visit",
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
    icon: <FaInstagram size={25} className="hover:text-sky-500 rounded-full" />,
  },
  {
    title: "YouTube",
    link: "/",
    icon: <FaYoutube size={25} className="hover:text-sky-500 rounded-full" />,
  },
];
