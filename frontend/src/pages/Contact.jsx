import transition from "../utils/transition";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact | Nyanya Assembly"
        description="Our contact page"
      />
      <HeroSection backgroundVideo="bg.mp4" svg_color="#E5E0D4" />
      <section className="py-20 bg-[#E5E0D4]">
        <div class="container mx-auto px-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Contact Information --> */}
            <div class="flex flex-col justify-center">
              <h3 class="text-3xl md:text-5xl text-black font-alfa">
                Get In Touch
              </h3>
              <p class="mt-4 text-gray-900 font-karla">
                We're here to answer any questions you may have. Fill out the
                form or use one of the contact methods below.
              </p>

              <div class="mt-8 space-y-4">
                <div class="flex items-center">
                  <FaLocationDot />
                  <p class="ml-3 text-gray-900 font-karla">
                    NO. 2, Church Avenue, Nyanya Karu Road Opposite <br /> A.A.
                    Rano Filling Station, Nyanya, Abuja, FCT
                  </p>
                </div>
                <div class="flex items-center">
                  <FaPhone />
                  <p class="ml-3 text-gray-900 font-karla">
                    (+234) 816 725 9757
                  </p>
                </div>
                <div class="flex items-center">
                  <MdEmail />
                  <p class="ml-3 text-gray-900 font-karla">
                    tacnna2024@gmail.com
                  </p>
                </div>
              </div>
              {/* Socials */}
              <h1 className="mt-10 text-3xl font-semibold text-black font-karla">
                Our Socials
              </h1>
              <div className="flex gap-3 mt-3">
                {socials.map((social) => (
                  <Link to={social.link} key={social.name}>
                    <motion.div
                      whileHover={{ translateY: -7, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="p-1 rounded-full border border-black bg-white flex items-center justify-center"
                    >
                      {social.icon}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* <!-- Contact Form --> */}
            <ContactForm team={"Church"} />
          </div>
        </div>
      </section>
    </>
  );
};

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

export default transition(Contact);
