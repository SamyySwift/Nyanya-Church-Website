import { FaClock } from "react-icons/fa6";
import { GlowingEffect } from "./ui/glowing-effect";
import { AnimatedTestimonials } from "./ui/animated-testimonial";

const ChurchServices = () => {
  return (
    <div className="my-20">
      <h1 className="text-5xl md:text-7xl xl:text-8xl text-black">
        <span className="font-anton">Our Church</span>{" "}
        <span className="font-saol italic">Services</span>
      </h1>
      {/* <ul className="grid grid-cols-1 gap-6 xl:grid-cols-4 xl:max-h-[34rem]">
        {services.map((service, index) => (
          <li key={index} className="flex">
            <GridItem
              icon={
                <FaClock className="h-5 w-5 text-black dark:text-neutral-600" />
              }
              title={service.title}
              day={service.day}
              time={service.time}
              description={service.description}
            />
          </li>
        ))}
      </ul> */}
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

const GridItem = ({ icon, title, day, time, description }) => {
  return (
    <div className="relative flex flex-col w-full h-auto rounded-2xl border p-4 md:p-5 shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D] transform transition-transform duration-300 hover:scale-105">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col gap-4 justify-between font-karla">
        <div className="flex items-center gap-2">
          <div className="w-fit rounded-lg border border-gray-500 p-3">
            {icon}
          </div>
          <p className="text-md font-semibold text-black">
            {day} | {time}
          </p>
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-semibold text-black">
          {title}
        </h3>

        <p className="text-md md:text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Sunday Service",
    time: "9:00 AM - 11:00 AM",
    day: "SUNDAY",
    description:
      "Join us for our Sunday worship service where we come together to praise and worship God through song, prayer, and a powerful sermon.",
  },
  {
    title: "Meeting With The Lord",
    time: "9:00 AM - 2:00 PM",
    day: "FRIDAY",
    description:
      "Experience God's power through prayers and prophetic sessions during our 'Meeting With The Lord'.",
  },
  {
    title: "Midweek Prayer",
    time: "6:30 AM - 7:00 AM",
    day: "WEDNESDAY",
    description:
      "Join us for our mid-week online prayer sessions where we come together to pray earnestly.",
  },

  {
    title: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    day: "TUESDAY",
    description:
      "Deep dive into the scriptures with our midweek Bible study and get an in-depth exploration of God's word.",
  },
];

const testimonials = [
  {
    quote:
      "Join us for our Sunday worship service where we come together to praise and worship God through song, prayer, and a powerful sermon.",
    name: "Sunday Service",
    designation: "SUNDAY: 9:00 AM - 11:00 AM",
    src: "images/welcome-bg-7.webp",
  },
  {
    quote:
      "Deep dive into the scriptures with our midweek Bible study and get an in-depth exploration of God's word.",
    name: "Bible Study",
    designation: "TUESDAY: 7:00 PM - 8:30 PM",
    src: "images/daily.jpg",
  },
  {
    quote:
      "Join us for our mid-week online prayer sessions where we come together to pray earnestly.",
    name: "Mid-Week Prayers",
    designation: "WEDNESDAY: 6:30 AM - 7:00 AM",
    src: "images/about-bg.webp",
  },
  {
    quote:
      "Experience God's power through prayers and prophetic sessions during our 'Meeting With The Lord'.",
    name: "Meeting With The Lord",
    designation: "FRIDAY: 9:00 AM - 2:00 PM",
    src: "images/wsp-img-2.webp",
  },
];

export default ChurchServices;
