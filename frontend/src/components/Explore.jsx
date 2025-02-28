import { Link } from "react-router-dom";
import GrainyBackground from "./GrainyBackground";

const Explore = () => {
  return (
    <GrainyBackground
      bgImg="images/noise4.jpg"
      content={
        <div
          className="py-[80px] lg:py-[200px] flex flex-col justify-center relative"
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
      }
    />
  );
};

const CardComponent = ({ title, bodyText, btnText, icon, link, src }) => {
  return (
    <div className="max-w-md flex flex-col items-center">
      {/* Card */}
      <Link
        to={link}
        className="h-100 rounded-2xl cursor-pointer transform overflow-hidden duration-500 hover:scale-105"
      >
        <div className="relative">
          <img
            className="w-full h-[480px] object-cover object-center"
            src={src}
            alt={title}
            loading="lazy"
          />
        </div>

        {/* Body Text */}
        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 backdrop-blur-sm bg-black px-5 py-2 flex flex-col items-start z-20">
          <p className="text-white font-karla font-light text-lg">{bodyText}</p>
        </div>
      </Link>

      {/* Lower Button */}

      <Link
        to={link}
        className="mt-6 border font-karla underline underline-offset-8 border-white px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-white hover:text-black flex justify-center w-40"
      >
        {btnText}
      </Link>
    </div>
  );
};

const exploreNav = [
  {
    title: "Events",
    bodyText:
      "Discover exciting events that will uplift your spirit and enrich your journey.",
    btnText: "Explore Events",
    link: "/events",
    src: "images/ue.jpg",
  },
  {
    title: "Teams",
    bodyText: "Explore our diverse church teams, find your place to belong!",
    btnText: "Join A Team",
    link: "/join-a-group",
    src: "images/join.jpg",
  },

  {
    title: "I'm New",
    bodyText:
      "New to our church? Learn more about us and how you can get involved.",
    btnText: "I'm New",
    link: "/welcome",
    src: "images/pastorblack.jpg",
  },
];

export default Explore;
