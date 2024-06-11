import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Explore = () => {
  const { ref } = useParallax({ speed: -30 });

  return (
    <div
      className="relative h-[2000px] md:h-[1500px] xl:h-[1200px] flex flex-col items-center lg:justify-center"
      ref={ref}
      style={{ backgroundColor: "#000" }}
    >
      <div className="absolute lg:top-[150px] top-[160px] left-8">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-grotesque">
          <span className="">EXPLORE</span>{" "}
          <span className="text-neutral-500 font-thin font-poppins">&</span>
          <span className="relative -left-[10px] top-[30px] sm:top-[50px] md:top-[80px] ">
            {" "}
            CONNECT
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-5  md:gap-10 mt-[350px] md:mt-[370px] lg:mt-[200px] mx-5">
        {exploreNav.map((item, i) => (
          // <CardComponent
          //   title={item.title}
          //   bodyText={item.bodyText}
          //   btnText={item.btnText}
          //   link={item.link}
          //   color={item.color}
          //   key={i}
          // />
          <ProductCard
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
  );
};

const CardComponent = ({ title, bodyText, btnText, link, color }) => {
  return (
    <div
      className="rounded-[40px] hover:bg-black h-[360px] w-[300px] md:h-[400px] md:w-[320px] font-grotesque mx-auto flex flex-col justify-around  items-start px-7 md:py-0  text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
      style={{ backgroundColor: color }}
    >
      <h1 className="font-semibold text-2xl md:text-3xl">{title}</h1>
      <p className="text-md md:text-lg font-light">{bodyText}</p>
      <Link to={link}>
        <button className="border px-4 py-2 min-w-[150px] rounded-2xl border-gray-300  hover:bg-white hover:text-black text-white">
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default Explore;

const ProductCard = ({ title, bodyText, btnText, link, src }) => {
  return (
    <div className="h-[360px] w-[300px] md:h-[400px] md:w-[320px] mx-auto shadow-lg rounded-3xl cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden relative">
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
          <button className="mt-2 bg-gradient-to-br from-white to-blue-600 text-white px-4 py-2 font-grotesque min-w-[100px] rounded-2xl hover:bg-blue-700 transition duration-300">
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
    title: "Join a Group",
    bodyText:
      "Explore our diverse church groups and teams, find your place to belong!",
    btnText: "Learn More",
    link: "/join-a-group",
    color: "#A79277",
    src: "images/jg.jpg",
  },
  {
    title: "Plan Your Visit",
    bodyText: "We cant wait to have you worship with us this sunday.",
    btnText: "Plan Visit",
    link: "/plan-your-visit",
    color: "#AF8260",
    src: "images/pv.jpg",
  },

  {
    title: "Pastoral Care",
    bodyText: "Need prayer support or counseling? Submit request here.",
    btnText: "Email Us",
    link: "mailto:samueludofia94@gmail.com",
    color: "#524C42",
    src: "images/pastor2.jpg",
  },
];
