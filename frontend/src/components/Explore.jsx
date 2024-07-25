import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
// import { SparklesCore } from "./ui/sparkles";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Explore = () => {
  const { ref } = useParallax({ speed: -15 });

  return (
    <div
      className="py-[100px] flex flex-col justify-center"
      ref={ref}
      style={{ backgroundColor: "#000" }}
      name="explore"
    >
      <div className="w-full absolute inset-0"></div>

      <div className="mx-auto md:mx-5 lg:mx-[40px] xl:mx-[80px]">
        <p className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-slate-300 font-grotesque font-semibold text-center md:text-start">
          <span className="">Explore</span> <span className="font-thin">&</span>
          <span className="relative"> Connect</span>
        </p>

        <div className="flex flex-col gap-10 md:gap-5 md:flex-row md:justify-between mt-[80px]">
          {exploreNav.map((item, i) => (
            <CardComponent
              title={item.title}
              bodyText={item.bodyText}
              btnText={item.btnText}
              icon={item.icon}
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

const CardComponent = ({ title, bodyText, btnText, icon, link, src }) => {
  return (
    <div className="max-w-xs w-full relative">
      <div className="h-96 rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden relative">
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <img
            className="w-full h-[400px] object-cover object-center"
            src={src}
            alt={title}
          />
          <span className="absolute top-2 left-5 text-3xl text-white font-grotesque font-bold">
            {title}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full  bg-opacity-20 backdrop-blur-md bg-black px-5 py-2 flex flex-col items-start">
          <p className="text-white font-grotesque font-extralight">
            {bodyText}
          </p>
          <Link to={link}>
            <button className="flex items-center gap-1 mt-2 bg-black text-white px-2 py-2 font-grotesque font-light min-w-[100px] rounded-2xl">
              {icon}
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const exploreNav = [
  {
    title: "Events",
    bodyText:
      "Discover exciting events that will uplift your spirit and enrich your journey.",
    btnText: "Learn More",
    icon: <BsArrowUpRightCircleFill />,
    link: "/events",
    src: "images/iyc.jpg",
  },
  {
    title: "Join A Team",
    bodyText:
      "Explore our diverse church groups and teams, find your place to belong!",
    btnText: "Learn More",
    icon: <BsArrowUpRightCircleFill />,
    link: "/join-a-group",
    src: "images/welcome-bg-8.webp",
  },

  {
    title: "Pastoral Care",
    bodyText: "Need prayer support or counseling? Submit request here.",
    btnText: "Email Us",
    icon: <MdEmail />,
    link: "mailto:tacnna2024@gmail.com",
    src: "images/pastor.webp",
  },
];

export default Explore;
