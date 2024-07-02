import { FaPhone, FaLocationDot, FaArrowUp } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-black py-[140px] flex flex-col pl-6 md:pl-0 md:flex-row pt-20 md:justify-around gap-12 md:gap-0  relative"
      style={{ backgroundColor: "#f7f2e9" }}
      name="footer"
    >
      {/* LOGO */}
      <div className="">
        <div className="h-[100px] w-[100px] md:h-[70px] md:w-[70px] lg:h-[90px] lg:w-[90px] xl:h-[130px] xl:w-[130px] flex flex-col text-center justify-center items-center rounded-full bg-black border text-white font-grotesque leading-none font-semibold">
          <span className="text-xl md:text-sm lg:text-lg xl:text-2xl">
            NYANYA
          </span>
          <span className="text-md md:text-xs lg:text-md xl:text-lg">
            ASSEMBLY
          </span>
        </div>
      </div>
      {/* Contact */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-md md:text-lg lg:text-xl">
          CONTACT US
        </h1>
        <div className="max-w-sm md:max-w-xs lg:max-w-md space-y-3 font-grotesque md:text-lg">
          <p className="">TAC NYANYA ASSEMBLY</p>
          <span className="flex items-center font-light gap-2">
            <MdEmail className="" />
            <span>info@nyanyarea.com</span>
          </span>
          <p className="flex items-center font-light gap-2">
            <FaPhone className="w-4" />
            <span>(+234) 809 670 2056</span>
          </p>
          <p className="flex font-light gap-2">
            <FaLocationDot className="w-4 mt-1" />
            <span>
              NO. 2, Avenue Nyanya Karu Road Opposite <br /> A.A. Rano Filling
              Station, Nyanya, Abuja, FCT
            </span>
          </p>
        </div>
        <hr
          className="mt-7 w-[340px] md:w-[290px] lg:w-[380px]"
          style={{
            backgroundColor: "black",
            height: "1px",
            border: "none",
          }}
        />
        {/* Socials */}
        <div className="flex gap-4 mt-6">
          {socials.map((social) => (
            <Link to={social.link} key={social.name}>
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
        <h1 className="mb-5 font-grotesque text-md md:text-lg lg:text-xl">
          QUICK LINKS
        </h1>
        <div className="flex flex-col gap-2 font-light font-grotesque text-md md:text-lg lg:text-lg">
          {links.map((link) => (
            <Link to={link.href} key={link.name} className="flex items-center">
              {location.pathname === link.href && (
                <div className="mr-3 w-1 h-1 md:w-2 md:h-2 bg-black rounded-full"></div>
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
    name: "About Us",
    href: "/about",
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
