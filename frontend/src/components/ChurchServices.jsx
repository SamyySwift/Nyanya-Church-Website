import InfiniteMovingCards from "./ui/infinite-moving-cards";

const ChurchServices = () => {
  return (
    <div className="my-20 mb-20 md:mb-40">
      <h1 className="text-5xl md:text-6xl xl:text-7xl text-black mb-10">
        <span className="font-anton">Our Church</span>{" "}
        <span className="font-saol italic">Services</span>
      </h1>

      <InfiniteMovingCards type="card" items={services} start pauseOnHover />
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
    title: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    day: "TUESDAY",
    description:
      "Deep dive into the scriptures with our midweek Bible study and get an in-depth exploration of God's word.",
  },
  {
    title: "Midweek Prayer",
    time: "6:30 AM - 7:00 AM",
    day: "WEDNESDAY",
    description:
      "Join us for our mid-week online prayer sessions where we come together to pray earnestly.",
  },
  {
    title: "Meeting With The Lord",
    time: "9:00 AM - 2:00 PM",
    day: "FRIDAY",
    description:
      "Experience God's power through prayers and prophetic sessions during our 'Meeting With The Lord'.",
  },
];

export default ChurchServices;
