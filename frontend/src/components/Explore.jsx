import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Explore = () => {
  return (
    <div
      className="py-[150px] flex flex-col justify-center bg-black relative"
      name="explore"
    >
      <div className="w-full absolute inset-0 z-0"></div>
      <div className="mx-5 lg:mx-[40px] xl:mx-[80px]">
        {/* <p className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-slate-300 font-grotesque font-semibold text-center md:text-start">
          <span className="">Explore</span> <span className="font-thin">&</span>
          <span className="relative"> Connect</span>
        </p> */}

        <div className="flex flex-col gap-[60px] md:gap-10 md:flex-row md:justify-between">
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
    <div className="relative max-w-sm w-full ">
      <div className="h-80 rounded-2xl cursor-pointer transform  overflow-hidden  duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10"></div>
          <img className="w-full h-96 object-cover " src={src} alt={title} />
          <span className="absolute top-2 left-5 text-3xl text-white font-grotesque font-bold z-10 ">
            {title}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-opacity-20 backdrop-blur-sm bg-black px-5 py-2 flex flex-col items-start z-20">
          <p className="text-white font-grotesque font-light">{bodyText}</p>
          <Link to={link}>
            <button className="flex items-center gap-1 mt-2 bg-black text-white px-2 py-2 font-grotesque font-light min-w-[100px] rounded-2xl z-20">
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
    title: "Upcoming Events",
    bodyText:
      "Discover exciting events that will uplift your spirit and enrich your journey.",
    btnText: "Learn More",
    icon: <BsArrowUpRightCircleFill />,
    link: "/events",
    src: "images/convention.jpg",
  },
  {
    title: "Join a Team",
    bodyText: "Explore our diverse church teams, find your place to belong!",
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
