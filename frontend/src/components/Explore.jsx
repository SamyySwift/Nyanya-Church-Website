import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { SparklesCore } from "./ui/sparkles";
const Explore = () => {
  const { ref } = useParallax({ speed: -20 });

  return (
    <div
      className="py-[100px] flex flex-col justify-center"
      ref={ref}
      style={{ backgroundColor: "#000" }}
      name="explore"
    >
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="mx-auto md:mx-[80px]">
        <p className="text-3xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-9xl text-white font-grotesque">
          <span className="">EXPLORE</span>{" "}
          <span className="text-neutral-500 font-thin font-poppins">&</span>
          <span className="relative"> CONNECT</span>
        </p>

        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap  md:justify-between mt-[80px]">
          {exploreNav.map((item, i) => (
            <CardComponent
              title={item.title}
              bodyText={item.bodyText}
              btnText={item.btnText}
              link={item.link}
              src={item.src}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardComponent = ({ title, bodyText, btnText, link, src }) => {
  return (
    <div className="h-[360px] w-[300px] md:h-[400px] md:w-[320px]  shadow-lg rounded-3xl cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden relative">
      <div className="relative">
        <img
          className="w-full h-full object-cover object-center"
          src={src}
          alt={title}
        />
        <span className="absolute top-3 left-5  text-white text-xl md:text-xl lg:text-2xl font-grotesque font-semibold">
          {title}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full  bg-opacity-30 backdrop-blur-md p-2 md:p-3 flex flex-col items-start">
        <p className="text-white font-grotesque font-extralight">{bodyText}</p>
        <Link to={link}>
          <button className="mt-2 bg-gradient-to-br  from-gray-400 to-black text-white px-4 py-2 font-grotesque min-w-[100px] rounded-2xl hover:bg-blue-700 transition duration-300">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

const exploreNav = [
  {
    title: "Upcoming Events",
    bodyText:
      "Discover exciting events that will uplift your spirit and enrich your journey.",
    btnText: "Learn More",
    link: "/events",
    color: "#D1BB9E",
    src: "images/ue1.jpg",
  },
  {
    title: "Join a Team",
    bodyText:
      "Explore our diverse church groups and teams, find your place to belong!",
    btnText: "Learn More",
    link: "/join-a-group",
    color: "#A79277",
    src: "images/jg.jpg",
  },
  // {
  //   title: "Plan Your Visit",
  //   bodyText: "We cant wait to have you worship with us this sunday.",
  //   btnText: "Plan Visit",
  //   link: "/plan-your-visit",
  //   color: "#AF8260",
  //   src: "images/pv.jpg",
  // },

  {
    title: "Pastoral Care",
    bodyText: "Need prayer support or counseling? Submit request here.",
    btnText: "Email Us",
    link: "mailto:samueludofia94@gmail.com",
    color: "#524C42",
    src: "images/pastor2.jpg",
  },
];

export default Explore;
