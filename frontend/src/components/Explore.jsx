import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Explore = () => {
  return (
    <div
      className="py-[200px] flex flex-col justify-center bg-black relative"
      name="explore"
    >
      <div className="container mx-auto px-5">
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
    <div className="max-w-sm w-full flex flex-col items-center">
      {/* Card */}
      <Link
        to={link}
        className="h-90 rounded-2xl cursor-pointer transform overflow-hidden duration-500 hover:scale-105"
      >
        <div className="relative">
          {/* Image and Title */}
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent z-10"></div>
          <img className="w-full h-96 object-cover" src={src} alt={title} />
          <span className="absolute top-2 left-5 text-2xl text-white font-grotesque font-semibold z-10">
            {title}
          </span>
        </div>

        {/* Body Text */}
        <div className="absolute bottom-0 left-0 w-full bg-opacity-60 backdrop-blur-sm bg-black px-5 py-2 flex flex-col items-start z-20">
          <p className="text-white font-grotesque font-light">{bodyText}</p>
        </div>
      </Link>

      {/* Lower Button */}

      <Link
        to={link}
        className="mt-6 p-3 rounded-2xl shadow-md z-10"
        style={{ backgroundColor: "#f7f2e9" }}
      >
        <h3 className="flex items-center gap-1 text-md text-center text-black underline underline-offset-8 font-karla">
          {icon}
          {btnText}
        </h3>
      </Link>
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
    src: "images/ue3.jpg",
  },
  {
    title: "Teams",
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
