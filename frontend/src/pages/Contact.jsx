import transition from "../utils/transition";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Hero text="Our Contact " background="video" src="/bg.webm" />
      <section className="py-20">
        <div class="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 font-grotesque">
              Contact Us
            </h2>
            <p class="mt-4 text-lg md:text-xl text-gray-700 font-grotesque">
              We’d love to hear from you! Reach out with any questions or prayer
              requests.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Contact Information --> */}
            <div class="flex flex-col justify-center">
              <h3 class="text-3xl font-semibold text-black font-grotesque">
                Get In Touch
              </h3>
              <p class="mt-4 text-gray-700 font-grotesque">
                We're here to answer any questions you may have. Fill out the
                form or use one of the contact methods below.
              </p>

              <div class="mt-8 space-y-4">
                <div class="flex items-center">
                  <FaLocationDot />
                  <p class="ml-3 text-gray-700 font-grotesque">
                    NO. 2, Church Avenue, Nyanya Karu Road Opposite <br /> A.A.
                    Rano Filling Station, Nyanya, Abuja, FCT
                  </p>
                </div>
                <div class="flex items-center">
                  <FaPhone />
                  <p class="ml-3 text-gray-700 font-grotesque">
                    (+234) 816 725 9757
                  </p>
                </div>
                <div class="flex items-center">
                  <MdEmail />
                  <p class="ml-3 text-gray-700 font-grotesque">
                    tacnna2024@gmail.com
                  </p>
                </div>
              </div>
              {/* Socials */}
              <h1 className="mt-10 text-2xl text-black font-grotesque">
                Follow Our Socials
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
