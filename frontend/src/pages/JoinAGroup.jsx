import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import transition from "../utils/transition";
import PageTitle from "../components/PageTitle";
import { LayoutGrid } from "../components/ui/layout-grid";

const JoinAGroup = () => {
  const images = [
    "images/youth5.webp",
    "images/youth1.webp",
    "images/youth3.webp",
    "images/youth4.webp",
  ];
  return (
    <>
      <PageTitle
        title="Nyanya Assembly | Join a Team"
        description="Different church groups"
      />
      <Hero text="Join A Team" background="video" src="/bg.webm" />
      {/* WELCOME */}
      {/* <section style={{ backgroundColor: "##F7F2E9" }}>
        <Welcome
          title="Teams"
          text="Join a team at Nyanya Assembly to contribute to our vision. Connect with like-minded individuals, learn new skills, and find your fit. Together, we can achieve so much more!"
          imgSrc={images}
        />
      </section> */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="text-center py-10">
          <p className="font-grotesque text-base md:text-xl text-justify font-light max-w-xl mx-auto px-5 md:px-0">
            Discover exciting groups and teams in nyanya to join that will
            uplift your spirit and enrich your journey. Get connected and stay
            motivated!
          </p>
        </div>

        <LayoutGrid cards={cards} />
      </section>
    </>
  );
};

export default transition(JoinAGroup);

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Youth Movement
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-lg text-neutral-200">
        Join us for engaging activities, inspiring talks, and meaningful
        interactions at the Youth Fellowship.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Praise Team
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-lg text-neutral-200">
        Come together with the Praise Team to make a joyful noise and worship
        through music. Join us in making Nyanya a more beautiful place for
        everyone by lifting spirits with our musical talents.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Media Team
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-lg text-neutral-200">
        Be part of the Media Team to capture and share the vibrant life of our
        church. Help us raise awareness and promote our message through various
        media channels
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Classical Choir
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-lg text-neutral-200">
        Join the Classical Choir and support a worthy cause through your musical
        talents. Participate in events and performances that uplift and inspire!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Youth Movement",
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "images/youth1.webp",
    link: "/youth-fellowship",
  },
  {
    id: 2,
    title: "Praise Team",
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "images/praise-team-2.webp",
    link: "/praise-team",
  },
  {
    id: 3,
    title: "Media Team",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "images/media.webp",
    link: "/media-team",
  },
  {
    id: 4,
    title: "Classical Choir",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "images/choir3.webp",
    link: "/classical-choir",
  },
];
