import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import Card from "../components/ui/Card";
import transition from "../utils/transition";
import PageTitle from "../components/PageTitle";

const JoinAGroup = () => {
  const images = ["images/youth4.JPG"];
  return (
    <>
      <PageTitle title="Join a Group" description="Different church groups" />
      <Hero text="Join A Team" background="video" src="/bg2.mp4" />
      <section style={{ backgroundColor: "#f7f2e9" }}>
        <Welcome
          title="JOIN A TEAM"
          text="Join a team at Nyanya Assembly to contribute to our vision. Connect with like-minded individuals, learn new skills, and find your fit. Together, we can achieve so much more!"
          imgSrc={images}
        />
      </section>
      <section>
        <div className="text-center pt-20">
          <h1 className=" font-vibes text-5xl md:text-8xl mx-2">
            Discover Various Groups
          </h1>
          <p className="font-grotesque text-justify font-extralight text-xl md:text-2xl max-w-3xl mx-auto mt-5 px-5 md:px-0">
            Discover exciting groups and teams in nyanya to join that will
            uplift your spirit and enrich your journey. Get connected and stay
            motivated!
          </p>
        </div>
        {events.map((event, idx) => {
          return <Card key={idx} {...event} i={idx} />;
        })}
      </section>
    </>
  );
};

export default transition(JoinAGroup);

const events = [
  {
    title: "Youth Movement",
    description:
      "Join us for engaging activities, inspiring talks, and meaningful interactions at the Youth Fellowship. This event is designed to empower and uplift the youth of Nyanya, providing them with the tools and support they need to thrive.",
    color: "#BBACAF",
    src: "images/youth4.JPG",
    link: "/youth-fellowship",
  },
  {
    title: "Praise Team",
    description:
      "Come together with the Praise Team to make a joyful noise and worship through music. Join us in making Nyanya a more beautiful place for everyone by lifting spirits with our musical talents.",
    color: "#B0A695",
    src: "images/praise-team-5.JPG",
    link: "/praise-team",
  },
  {
    title: "Media Team",
    description:
      "Be part of the Media Team to capture and share the vibrant life of our church. Help us raise awareness and promote our message through various media channels, showcasing the importance of community and faith.",
    color: "#A9B388",
    src: "images/media4.jpg",
    link: "/media-team",
  },
  {
    title: "Classical Choir",
    description:
      "Join the Classical Choir and support a worthy cause through your musical talents. Participate in events and performances that uplift and inspire, making a positive impact on our community.",
    color: "#B4B4B8",
    src: "images/choir3.jpg",
    link: "/classical-choir",
  },
  // {
  //   title: "Tech Team",
  //   description:
  //     "Experience the innovation and creativity of the Tech Team. Help us enhance our events and services with cutting-edge technology, celebrating the diverse talents within our community.",
  //   color: "#8BA28D",
  //   src: "images/tech-team.jpeg",
  //   link: "/tech-team",
  // },
];
