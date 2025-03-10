import { Link } from "react-router-dom";
import Transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";
import { ImagesSlider } from "../components/ui/images-slider";
import { motion } from "framer-motion";
import { BsFillCameraReelsFill } from "react-icons/bs";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: 1000 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-5">
        <HeroSection />
        <WelcomeSection />
        <Section
          title="Teams"
          image="images/join.jpg"
          subtitle="Our Teams"
          link="/join-a-group"
          bgColor="#E2E3DA"
          btnName="Join a Team"
          content="Explore our diverse church teams and find your place to belong! Whether you're passionate about music, or outreach, there's a team for you."
        />
        <Section
          title="Events"
          image="images/ue.jpg"
          link="/welcome"
          btnName="Explore Events"
          bgColor="#E2E3DA"
          subtitle="Upcoming Events"
          content="Discover exciting events that will uplift your spirit and enrich your journey. Join us for worship services, community gatherings, and special events."
        />

        <GivingSection />

        <WorshipWithUs />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full my-[100px] md:my-[200px] h-[700px] md:h-[900px] flex items-center justify-left text-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65  to-black/10"></div>
      </div>

      <div className="relative max-w-2xl px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-anton">
          Welcome
          <br />
          To Tacn
          <br />
          Nyanya
          <br />
          Assembly
          <br />
        </h1>
        <p className="mt-8 text-xl md:text-2xl font-karla font-light max-w-md">
          We can't wait to meet with you!
        </p>
        <Link to="/welcome">
          <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-600 text-black rounded-full mt-8 font-karla text-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  const words = ["vibrant", "friendly", "beautiful", "modern"];
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[150px] lg:mb-[250px] max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="w-full text-left">
        <motion.h2
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl lg:text-7xl xl:text-[110px]  text-black"
        >
          <span className="font-anton">
            Worship With <br />
          </span>{" "}
          <span className="italic font-saol"> Us Today</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-black mt-5 font-karla  text-justify xl:leading-relaxed text-xl xl:text-2xl xl:max-w-3xl"
        >
          {
            <>
              The Apostolic Church Nigeria, Nyanya Assembly is a {""}
              <FlipWords words={words} /> church in the beautiful city of Abuja.
              Whether you're new to the area or looking for a place to call
              home, we'd love to welcome you with open arms. Join us for worship
              and experience the warmth and love of our congregation. We can't
              wait to meet you!
              <br />
            </>
          }
        </motion.p>
      </div>
      {/* Image */}
      <ImagesSlider
        images={images}
        // opacity={90}

        className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px] rounded-lg shadow-lg"
      />
    </div>
  );
};

const Section = ({ title, content, image, link, btnName, bgColor }) => {
  return (
    <div
      className="relative h-[650px] md:h-[1000px] lg:h-[600px] max-w-7xl mx-auto flex flex-col items-start lg:flex-row-reverse px-[30px] lg:px-[50px] xl:px-[70px] rounded-2xl mb-[150px] lg:mb-[250px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Image */}
      <div className="lg:absolute lg:-top-[40px] lg:-mt-0 -mt-[40px] lg:right-0 lg:w-[450px] xl:w-[600px] lg:mr-[50px] xl:mr-[70px] md:h-full">
        <img
          src={image}
          alt="Church gathering"
          className="rounded-lg shadow-lg w-full h-[350px] md:h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 xl:max-w-lg text-left lg:absolute lg:left-12 xl:left-20 lg:space-y-[200px]">
        <h2 className="mt-7 lg:mt-0 lg:absolute lg:-top-10 text-5xl md:text-6xl lg:text-9xl font-anton tracking-tight text-black">
          {title}
        </h2>
        {/* <h3 className="md:mt-[80px] lg:mt-[150px] lg:ml-10 text-3xl md:text-5xl lg:text-7xl italic text-black font-karla">
          {subtitle}
        </h3> */}
        <p className="mt-5 text-black font-light text-justify lg:max-w-xs xl:max-w-md font-karla lg:leading-loose text-xl lg:text-2xl">
          {content}
        </p>
        <Link to={link}>
          <button className="absolute bottom-5 md:bottom-0 md:relative md:my-5 lg:my-20 md:mt-10 px-7 py-4 bg-cyan-500 text-black rounded-full text-lg lg:text-xl font-karla w-50">
            {btnName}
          </button>
        </Link>
      </div>
    </div>
  );
};

const GivingSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[200px] lg:mb-[220px] max-w-6xl mx-auto ">
      {/* Image */}
      <div className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px]">
        <img
          src="images/p.jpeg"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="w-full text-left">
        <motion.h2
          variants={slideIn}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl xl:text-9xl font-anton text-black"
        >
          Giving
        </motion.h2>
        <p className="text-black mt-8 font-karla lg:leading-loose text-lg xl:text-xl text-justify ">
          We believe Jesus is a giver and not a taker. Not only has He given us
          life and breath, but by His death and resurrection, He defeated the
          sin that would rob us of both.
        </p>
        <Link to="/giving">
          <button className="absolute -bottom-30 md:relative px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-black rounded-full mt-10 font-karla text-lg w-full">
            Give Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const WorshipWithUs = () => {
  return (
    <>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-5xl lg:text-7xl xl:text-9xl text-black"
      >
        <span className="font-anton">Join Us</span>{" "}
        <span className="font-saol italic">This Sunday</span>
      </motion.h1>
      <div className="relative w-full mt-10 md:mt-20 mb-10 h-[700px] md:h-[900px] text-white rounded-2xl">
        <ImagesSlider
          images={worshipImages}
          duration={6000}
          opacity={0}
          className="w-full rounded-lg shadow-lg"
        />
        {/* <h3 className="absolute inset-0 top-1/2 text-5xl md:text-8xl font-light font-saol text-center">
          Worship With Us
        </h3> */}
      </div>
    </>
  );
};

const images = [
  "images/welcome-bg-1.webp",
  "images/welcome-bg-2.webp",
  "images/welcome-bg-3.webp",
  "images/welcome-bg-4.webp",
  "images/welcome-bg-5.webp",
  "images/welcome-bg-8.webp",
];

const worshipImages = [
  "images/wsp-img-1.webp",
  "images/wsp-img-2.webp",
  "images/wsp-img-3.webp",
  "images/wsp-img-4.webp",
  "images/wsp-img-5.webp",
  "images/wsp-img-8.webp",
];

export default Transition(Home);
