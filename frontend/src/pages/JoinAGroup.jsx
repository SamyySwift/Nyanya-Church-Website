import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import Card from "../components/ui/Card";
import transition from "../utils/transition";

const JoinAGroup = () => {
  return (
    <>
      <Hero text="JOIN A GROUP" src="images/group.jpg" mainHero={false} />
      <section style={{ backgroundColor: "#EBE3D5" }}>
        <Welcome
          title="JOIN A GROUP"
          text="Life is better when you go through it together – join a group and team and get connected today."
          imgSrc="group3.jpg"
        />
      </section>
      <section>
        <div className="text-center pt-20">
          <h1 className=" font-vibes text-5xl md:text-8xl">
            Discover Various Groups
          </h1>
          <p className="font-poppins font-extralight text-xl md:text-2xl max-w-3xl mx-auto mt-5 px-5 md:px-0">
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
    title: "Youth Fellowship",
    description:
      "Join us for an unforgettable youth rally filled with exciting activities, inspiring talks, and meaningful interactions. This event is designed to empower and uplift the youth of Nyanya, providing them with the tools",
    color: "#BBACAF",
    src: "images/youth.jpg",
    link: "/youth-fellowship",
  },
  {
    title: "Praise&Worship Team",
    description:
      "Let's come together to make a positive impact on our community by participating in a community cleanup event. By joining forces, we can make Nyanya a cleaner and more beautiful place for everyone to enjoy.",
    color: "#B0A695",
    src: "images/praise.jpg",
    link: "/praise-team",
  },
  {
    title: "Media Team",
    description:
      "Raise awareness about important health issues and promote healthy living habits in Nyanya. Our health awareness campaign aims to educate residents about preventive measures, disease management, and the importance of leading a healthy lifestyle.",
    color: "#A9B388",
    src: "images/media2.jpg",
    link: "/media-team",
  },
  {
    title: "Classical Choir",
    description:
      "Support a worthy cause and make a positive impact on the lives of those in need by attending our charity fundraiser event. Your generosity will help provide essential.",
    color: "#B4B4B8",
    src: "images/help.jpg",
    link: "/classical-choir",
  },
  {
    title: "Tech Team",
    description:
      "Experience the vibrant culture and rich heritage of Nyanya at our annual cultural festival. Celebrate diversity through music, dance, food, and traditional performances showcasing the unique traditions of our community.",
    color: "#8BA28D",
    src: "images/tech-team.jpeg",
    link: "/tech-team",
  },
];
