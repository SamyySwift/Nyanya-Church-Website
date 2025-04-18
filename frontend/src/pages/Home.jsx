import { Link } from "react-router-dom";
import Transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";
import { ImagesSlider } from "../components/ui/images-slider";
import ChurchServices from "../components/ChurchServices";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const slideInUp = {
  hidden: { opacity: 0, x: -100 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 * index, ease: "easeInOut" },
  }),
};

const Home = () => {
  return (
    <>
      <PageTitle
        title="Home | Nyanya Assembly"
        description="Nyanya Assembly Home Page "
      />
      <div className="bg-white">
        <div className="container mx-auto px-5">
          <HeroSection />
          <WelcomeSection />
          <Section
            title="Teams"
            image="images/join.jpg"
            link="/join-a-group"
            bgColor="#E5E0D4"
            btnName="Join a Team"
            content="Explore our diverse church teams and find your place to belong! Whether you're passionate about music, or outreach, there's a team for you."
          />
          <Section
            title="Events"
            image="images/ue.jpg"
            link="/events"
            btnName="Explore Events"
            bgColor="#E5E0D4"
            content="Discover exciting events that will uplift your spirit and enrich your journey. Join us for worship services, community gatherings, and special events."
          />

          <GivingSection />
          <ChurchServices />
          {/* Motto */}
          <section className="max-w-8xl mx-auto mb-40">
            <div className="p-6 md:p-20 xl:p-28 text-center rounded-2xl shadow-lg bg-gradient-to-r from-gray-800  to-blue-200 text-white">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl md:text-6xl font-anton">
                  OUR MOTTO FOR THE YEAR
                </h1>
                <p className="text-2xl md:text-4xl lg:text-5xl mt-4 md:max-w-3xl p-3 font-saol">
                  Help us, oh God of our salvation, for the glory of thy name:
                  and deliver us! <br />{" "}
                  <span className="font-bold underline underline-offset-4">
                    Psalm 79:9
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  const words = ["Welcome", "To   Tacn", "Nyanya", "Assembly"];
  return (
    <div className="relative w-full my-[100px] md:my-[200px] h-[700px] md:h-[890px] flex items-center justify-left text-white rounded-2xl overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80  to-black/0"></div>
      </div>

      <div className="relative max-w-2xl px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-anton space-y-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="block"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {/* <p className="mt-8 text-xl md:text-2xl font-karla font-light max-w-md">
          We can't wait to meet with you!
        </p> */}
        <Link to="/welcome">
          <button className="px-10 py-4 bg-[#E5E0D4] hover:opacity-60 text-black rounded-full mt-12 font-karla text-lg">
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
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[150px] lg:mb-[200px] max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="w-full text-left">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl xl:text-9xl  text-black"
        >
          <span className="font-anton tracking-tight">
            Welcome <br />
          </span>{" "}
          {/* <span className="italic font-saol"> Us Today</span> */}
        </motion.h2>
        <motion.p
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-black mt-7 font-karla text-justify xl:leading-relaxed text-xl xl:text-2xl xl:max-w-3xl"
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
      className="relative h-[650px] md:h-[1000px] lg:h-[600px] max-w-7xl mx-auto flex flex-col items-start lg:flex-row-reverse px-[30px] lg:px-[50px] xl:px-[70px] rounded-2xl mb-[150px] lg:mb-[190px]"
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
        <h2 className="mt-7 lg:mt-0 lg:absolute lg:-top-8 text-4xl md:text-6xl lg:text-9xl font-anton tracking-tight text-black">
          {title}
        </h2>

        <p className="mt-5 text-black font-light text-justify lg:max-w-xs xl:max-w-md font-karla  text-xl lg:text-2xl">
          {content}
        </p>
        <Link to={link}>
          <button className="absolute bottom-5 md:bottom-0 md:relative md:my-5 lg:my-20 md:mt-10 px-7 py-4 border border-black  text-black hover:bg-black hover:text-white rounded-full text-lg lg:text-xl font-karla w-50">
            {btnName}
          </button>
        </Link>
      </div>
    </div>
  );
};

const GivingSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[200px] max-w-6xl mx-auto ">
      {/* Image */}
      <div className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px]">
        <img
          src="images/giving.jpg"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="w-full text-left">
        <motion.h2
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl xl:text-9xl font-anton text-black"
        >
          Giving
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-black mt-8 font-karla lg:leading-loose text-lg xl:text-xl text-justify font-light"
        >
          We believe Jesus is a giver and not a taker. Not only has He given us
          life and breath, but by His death and resurrection, He defeated the
          sin that would rob us of both.
        </motion.p>
        <Link to="/giving">
          <button className="absolute -bottom-30 md:relative px-8 py-4 bg-[#E5E0D4] hover:opacity-60 text-black rounded-full mt-10 font-karla text-xl w-full">
            Give Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const images = [
  "images/pastor.webp",
  "images/welcome-bg-1.webp",
  "images/p.jpeg",
  "images/wsp-img-5.webp",
  "images/welcome-bg-4.jpg",
  "images/welcome11.jpeg",
  "images/welcome-bg-10.jpg",
  "images/welcome-bg-2.webp",
  "images/welcome-bg-3.webp",
  "images/wsp-img-1.webp",
  "images/welcome-bg-9.jpg",
  "images/welcome-bg-8.webp",
  "images/wsp-img-2.webp",
  "images/welcome-bg-5.webp",
];

export default Transition(Home);
