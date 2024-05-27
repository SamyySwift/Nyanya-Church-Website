import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const Explore = () => {
  const { ref } = useParallax({ speed: -30 });

  return (
    <div
      className="relative h-[2000px] md:h-[1500px] xl:h-[1200px] flex flex-col items-center lg:justify-center"
      ref={ref}
      style={{ backgroundColor: "#F7EEDD" }}
    >
      <div className="absolute lg:top-[150px] top-[160px] left-10">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-poppins">
          <span className="">EXPLORE</span>{" "}
          <span className="text-neutral-500 font-thin">&</span>
          <span className="relative -left-[10px] top-[30px] sm:top-[50px] md:top-[80px] ">
            {" "}
            CONNECT
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-5  md:gap-10 mt-[350px] md:mt-[370px] lg:mt-[200px] mx-5">
        {exploreNav.map((item, i) => (
          <CardComponent
            title={item.title}
            bodyText={item.bodyText}
            btnText={item.btnText}
            link={item.link}
            color={item.color}
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
      className="rounded-[40px] hover:bg-black h-[360px] w-[300px] md:h-[400px] md:w-[320px] font-grotesque mx-auto flex flex-col justify-around  items-start px-7 md:py-0  text-white cursor-pointer"
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

const exploreNav = [
  {
    title: "Upcoming Events",
    bodyText:
      "Discover exciting events that will uplift your spirit and enrich your journey. Don't miss out on our latest upcoming experiences!",
    btnText: "Learn More",
    link: "/events",
    color: "#75A47F",
  },
  {
    title: "Join a Group",
    bodyText:
      "Explore our diverse church groups and teams, find your place to belong! We encourage your participation in our teams",
    btnText: "Learn More",
    link: "/join-a-group",
    color: "#D8AE7E",
  },
  {
    title: "Plan Your Visit",
    bodyText:
      "We are very welcoming. we cant wait to have you worship with us this sunday. We are very welcoming. we cant wait to have you worship with us this sunday",
    btnText: "Plan Visit",
    link: "/plan-your-visit",
    color: "#524C42",
  },

  {
    title: "Pastoral Care",
    bodyText:
      "Need prayer support or counseling? Our dedicated team is always here to pray with you. Submit your prayer request here.",
    btnText: "Email Us",
    link: "mailto:samueludofia94@gmail.com",
    color: "#3C5B6F",
  },
];
