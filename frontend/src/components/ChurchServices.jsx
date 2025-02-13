import { FaClock } from "react-icons/fa6";
import { GlowingEffect } from "./ui/glowing-effect";

const ChurchServices = () => {
  return (
    <ul className="container mx-auto px-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6 xl:max-h-[34rem]">
      {services.map((service, index) => (
        <li key={index} className="flex">
          <GridItem
            icon={
              <FaClock className="h-5 w-5 text-black dark:text-neutral-400" />
            }
            title={service.title}
            day={service.day}
            time={service.time}
            description={service.description}
          />
        </li>
      ))}
    </ul>
  );
};

const GridItem = ({ icon, title, day, time, description }) => {
  return (
    <div className="relative flex flex-col w-full h-auto rounded-2xl border p-4 md:p-5 shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
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
          <p className="text-sm md:text-md font-semibold text-gray-700 dark:text-gray-300">
            {day} | {time}
          </p>
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-semibold text-black dark:text-white">
          {title}
        </h3>

        <p className="text-md md:text-lg text-black dark:text-neutral-400">
          {description}
        </p>
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
      "Join us for our weekly Sunday worship service where we come together to praise and worship God through song, prayer, and a powerful sermon. This is a time to connect with our community and grow in our faith.",
  },
  {
    title: "Meeting With The Lord",
    time: "9:00 AM - 2:00 PM",
    day: "FRIDAY",
    description:
      "Experience God's power through prayers and prophetic sessions during our 'Meeting With The Lord'. This extended session is dedicated to intense prayer, worship, and receiving prophetic words.",
  },
  {
    title: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    day: "TUESDAY",
    description:
      "Deep dive into the scriptures with our midweek Bible study. This session offers an in-depth exploration of the Bible, providing insights and understanding of God's word.",
  },
];

export default ChurchServices;
