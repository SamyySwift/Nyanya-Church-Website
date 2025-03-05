import { Link } from "react-router-dom";
import Transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-5">
        <HeroSection />
        <WelcomeSection />
        <Section
          title="Events"
          image="images/welcome-bg-1.webp"
          //   subtitle="Are You New?"
          link="/welcome"
          btnName="Explore Events"
          bgColor="#F7F2E9"
          subtitle="Upcoming Events"
          content="Discover exciting events that will uplift your spirit and enrich your journey."
        />

        <Section
          title=" Teams"
          image="images/join.jpg"
          subtitle="Our Teams"
          link="/join-a-group"
          bgColor="#F7F2E9"
          btnName="Join a Team"
          content="Explore our diverse church teams, find your place to belong!"
        />
        <GivingSection />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full my-[100px] md:my-[200px] h-[700px] md:h-[900px] flex items-center justify-left text-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-xl px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          For God.
          <br />
          For People.
          <br />
          For the City.
          <br />
          For the World.
        </h1>
        <p className="mt-4 text-lg md:text-xl font-karla font-extralight">
          Welcome to a place where the gospel is central and Jesus is always the
          lead story. We are a Jesus church and want to gather in worship and
          scatter to shine His light and love throughout the city and beyond.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Section = ({
  title,
  content,
  image,
  subtitle,
  link,
  btnName,
  bgColor,
}) => {
  return (
    <div
      className="relative h-[700px] md:h-[1000px] lg:h-[600px] max-w-7xl mx-auto flex flex-col items-start lg:flex-row px-[30px] lg:px-[50px] xl:px-[70px] rounded-2xl mb-[300px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 xl:max-w-lg">
        <h2 className="absolute -top-5 md:-top-7 text-5xl md:text-7xl lg:text-8xl font-anton text-black">
          {title}
        </h2>
        <h3 className="mt-[80px] lg:mt-[150px] lg:ml-10 text-3xl md:text-5xl lg:text-7xl italic text-black font-karla">
          {subtitle}
        </h3>
        <p className="mt-5 lg:ml-10 text-black font-light md:max-w-2xl lg:max-w-xs xl:max-w-md font-karla text-lg md:text-xl">
          {content}
        </p>
        <Link to={link}>
          <button className="my-10 lg:ml-10 md:mt-10 px-7 py-4 bg-black text-white font-light rounded-xl text-lg lg:text-xl font-karla w-50">
            {btnName}
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="lg:absolute lg:-top-8 lg:right-0 lg:w-[450px] xl:w-[600px] lg:mr-[50px] xl:mr-[70px] h-full  mb-5">
        <img
          src={image}
          alt="Church gathering"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 mb-[150px] lg:mb-[300px] ">
      {/* Image */}
      <div className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px]">
        <img
          src="images/hug.jpg"
          alt="People hugging"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full text-left">
        <h2 className="text-4xl lg:text-7xl xl:text-9xl font-anton text-black">
          Welcome
        </h2>
        <p className="text-black font-light mt-8 font-karla lg:leading-loose text-lg xl:text-xl text-justify xl:max-w-2xl">
          {
            <>
              The Apostolic Church Nigeria, Nyanya Assembly is a {""}
              <FlipWords words={words} /> church in the beautiful city of Abuja.
              We are a community that loves Jesus and loves people. Whether
              you're new to the area or looking for a place to call home, we'd
              love to welcome you with open arms. Join us for worship and
              experience the warmth and love of our congregation. We can't wait
              to meet you!
            </>
          }
        </p>

        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-3xl mt-8 font-karla text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

const GivingSection = () => {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 mb-[150px] lg:mb-[300px] max-w-7xl mx-auto ">
      {/* Text Content */}
      <div className="w-full text-left">
        <h2 className="text-4xl lg:text-7xl xl:text-9xl font-anton text-black">
          Giving
        </h2>
        <p className="text-black font-light mt-8 font-karla lg:leading-loose text-lg xl:text-xl text-justify ">
          We believe Jesus is a giver and not a taker. Not only has He given us
          life and breath, but by His death and resurrection, He defeated the
          sin that would rob us of both. So, when it comes to giving, we believe
          percentages are a thing of the past, and obligation is the wrong
          approach.
        </p>
        <Link to="/giving">
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-3xl mt-8 font-karla text-lg">
            Give Now
          </button>
        </Link>
      </div>
      {/* Image */}
      <div className="w-full xl:max-w-xl mb-6 h-[450px] lg:h-[600px] xl:h-[700px]">
        <img
          src="images/hug.jpg"
          alt="People hugging"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default Transition(Home);
