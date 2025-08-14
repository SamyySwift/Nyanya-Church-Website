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
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 md:py-20 relative text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-5 lg:px-[100px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* LOGO & Brand */}
          <motion.div
            className="flex flex-col items-start gap-4 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="group">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-[80px] md:h-[90px] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <div>
              <h2 className="font-anton text-2xl md:text-3xl text-white leading-tight">
                TACN <br />
                <span className="text-[#E5E0D4]">Nyanya</span> <br />
                Assembly
              </h2>
              <p className="font-karla text-gray-300 mt-2 text-sm">
                One Fold, One Shepherd.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 font-anton text-xl md:text-2xl text-[#E5E0D4] relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E5E0D4]" />
            </h3>
            <div className="space-y-4 font-karla">
              <a
                href="mailto:tacnna2024@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#E5E0D4] transition-colors duration-300 group"
              >
                <div className="p-2 bg-[#E5E0D4]/10 rounded-lg group-hover:bg-[#E5E0D4]/20 transition-colors duration-300">
                  <MdEmail className="text-[#E5E0D4]" />
                </div>
                <span className="text-sm md:text-base">
                  tacnna2024@gmail.com
                </span>
              </a>
              <a
                href="tel:+2348167259757"
                className="flex items-center gap-3 text-gray-300 hover:text-[#E5E0D4] transition-colors duration-300 group"
              >
                <div className="p-2 bg-[#E5E0D4]/10 rounded-lg group-hover:bg-[#E5E0D4]/20 transition-colors duration-300">
                  <FaPhone className="text-[#E5E0D4]" />
                </div>
                <span className="text-sm md:text-base">
                  (+234) 816 725 9757
                </span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <div className="p-2 bg-[#E5E0D4]/10 rounded-lg mt-1">
                  <FaLocationDot className="text-[#E5E0D4]" />
                </div>
                <span className="text-sm md:text-base leading-relaxed">
                  NO. 2, Church Avenue, Nyanya Karu Road Opposite A.A. Rano Fuel
                  Station, Nyanya, Abuja, FCT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 font-anton text-xl md:text-2xl text-[#E5E0D4] relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E5E0D4]" />
            </h3>
            <div className="grid grid-cols-2 gap-2 font-karla">
              {links.map((link, index) => (
                <Link
                  to={link.href}
                  key={link.name}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#E5E0D4] transition-all duration-300 py-1 group"
                >
                  {location.pathname === link.href && (
                    <div className="w-2 h-2 bg-[#E5E0D4] rounded-full" />
                  )}
                  <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 font-anton text-xl md:text-2xl text-[#E5E0D4] relative">
              Follow Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E5E0D4]" />
            </h3>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <Link to={social.link} key={social.title}>
                  <motion.div
                    whileHover={{ translateY: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-2xl bg-[#E5E0D4] text-gray-800 shadow-lg hover:shadow-xl hover:shadow-[#E5E0D4]/25 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <p className="text-gray-300 text-sm mb-3">
                Stay connected with us
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#E5E0D4] transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-[#E5E0D4] text-gray-800 rounded-lg text-sm hover:bg-[#E5E0D4]/90 transition-all duration-300">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-karla text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 TACN Nyanya Assembly. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <Link
              to="/privacy"
              className="hover:text-[#E5E0D4] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/terms"
              className="hover:text-[#E5E0D4] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-[#E5E0D4] text-gray-800 shadow-lg hover:shadow-xl hover:shadow-[#E5E0D4]/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
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
    href: "/daily-word",
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
