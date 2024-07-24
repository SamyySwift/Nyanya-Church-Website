import { FaClock } from "react-icons/fa6";
import { useParallax } from "react-scroll-parallax";

const ChurchServices = () => {
  return (
    <div
      className="relative py-10  bg-black flex flex-col items-center justify-center overflow-hidden"
      // ref={ref}
    >
      <h1 className="md:text-7xl text-4xl lg:text-6xl mb-20 font-semibold text-center text-slate-300 relative font-grotesque">
        Our Church Services
      </h1>
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-5">
                <div className="flex items-center mb-4 font-grotesque">
                  <div className="bg-black h-10 w-10 mr-2 flex items-center justify-center text-white rounded-xl font-extralight">
                    {service.day.substring(0, 3)}
                  </div>
                  <h3 className="text-xl  font-semibold text-black tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <hr
                  className="w-full mb-1"
                  style={{
                    height: "1px",
                  }}
                />
                <div className="flex items-center mb-2 text-md py-2">
                  <FaClock className="text-xl text-gray-500 mr-2" />

                  <p className="text-gray-600 font-grotesque font-light">
                    {service.time}
                  </p>
                </div>
                <hr
                  className="w-full"
                  style={{
                    height: "1px",
                  }}
                />
                <p className="text-gray-900 font-grotesque font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Sunday Worship",
    time: "9:00 AM - 11:00 AM",
    day: "SUNDAY",
    description: "Join us for our weekly Sunday worship service.",
  },
  {
    title: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    day: "TUESDAY",
    description: "Deep dive into the scriptures with our midweek Bible study.",
  },
  {
    title: "Meeting With The Lord",
    time: "9:00 AM - 2:00 PM",
    day: "FRIDAY",
    description:
      "Experience God's power through prayers and prohetic sessions.",
  },
];

export default ChurchServices;
