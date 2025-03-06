import { Link } from "react-router-dom";
import Transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";
import { ImagesSlider } from "../components/ui/images-slider";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-5">
        <HeroSection />
        <WelcomeSection />
        <Section
          title="Events"
          image="images/ue.jpg"
          link="/welcome"
          btnName="Explore Events"
          bgColor="#F7F2E9"
          subtitle="Upcoming Events"
          content="Discover exciting events that will uplift your spirit and enrich your journey. Join us for worship services, community gatherings, and special events."
        />

        <Section
          title="Join Us"
          image="images/join.jpg"
          subtitle="Our Teams"
          link="/join-a-group"
          bgColor="#F7F2E9"
          btnName="Join a Team"
          content="Explore our diverse church teams and find your place to belong! Whether you're passionate about music, or outreach, there's a team for you."
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80  to-transparent"></div>
      </div>

      <div className="relative max-w-xl px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-helvetica">
          For God.
          <br />
          For People.
          <br />
          For the City.
          <br />
          For the World.
        </h1>
        <p className="mt-4 text-lg md:text-xl font-karla font-extralight max-w-xs">
          Welcome to a place where the gospel is central and Jesus is always the
          lead story.
        </p>
        <button className="mt-6 px-7 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-karla rounded-full">
          Live Stream
        </button>
      </div>
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
        <h2 className="mt-7 lg:mt-0 lg:absolute lg:-top-9 text-5xl md:text-6xl lg:text-[150px]  font-helvetica tracking-tighter text-black">
          {title}
        </h2>
        {/* <h3 className="md:mt-[80px] lg:mt-[150px] lg:ml-10 text-3xl md:text-5xl lg:text-7xl italic text-black font-karla">
          {subtitle}
        </h3> */}
        <p className="mt-5 text-black text-justify lg:max-w-xs xl:max-w-md font-owners font-light text-lg lg:text-xl">
          {content}
        </p>
        <Link to={link}>
          <button className="absolute bottom-5 md:bottom-0 md:relative md:my-5 lg:my-20 md:mt-10 px-7 py-4 bg-black text-white rounded-full text-lg lg:text-xl font-karla w-50">
            {btnName}
          </button>
        </Link>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[150px] lg:mb-[250px] max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="w-full text-left">
        <h2 className="text-4xl lg:text-7xl xl:text-7xl  text-black">
          <span className="font-helvetica font-bold">welcome to </span>{" "}
          <span className="italic font-saol">Church</span>
        </h2>
        <p className="text-black mt-3 font-owners text-justify font-light xl:leading-relaxed text-xl xl:text-2xl xl:max-w-2xl">
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
        </p>
        {/* <Link to="/welcome">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full mt-8 font-karla text-lg w-full">
            Get Started
          </button>
        </Link> */}
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

const GivingSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-10 xl:gap-20 mb-[150px] lg:mb-[300px] max-w-6xl mx-auto ">
      {/* Image */}
      <div className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px]">
        <img
          src="images/hug.jpg"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="w-full text-left">
        <h2 className="text-5xl lg:text-7xl xl:text-9xl font-helvetica tracking-tighter text-black">
          Giving
        </h2>
        <p className="text-black mt-8 font-owners font-light lg:leading-loose text-lg xl:text-xl text-justify ">
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
    <div className="relative w-full my-[200px] md:my-[200px] h-[700px] md:h-[900px]  text-white rounded-2xl overflow-hidden">
      <ImagesSlider
        images={worshipImages}
        duration={10000}
        opacity={40}
        className="w-full  rounded-lg shadow-lg"
      />
    </div>
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
