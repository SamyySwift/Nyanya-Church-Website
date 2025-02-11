import Transition from "../utils/transition";
import PageTitle from "../components/PageTitle";
import { LayoutGrid } from "../components/ui/layout-grid";
import HeroSection from "../components/HeroSection";

const JoinAGroup = () => {
  return (
    <>
      <PageTitle
        title="Nyanya Assembly | Join a Team"
        description="Different church groups"
      />
      {/* <Hero text="Teams" background="video" src="/join.webm" /> */}
      <HeroSection
        title={"Teams"}
        section_title={"Join a Team"}
        backgroundImage="/images/people.jpg"
        svg_color="#F7F2E9"
        description={`Discover exciting groups and teams in nyanya to join that will
            uplift your spirit and enrich your journey. Get connected and stay
            motivated!`}
        content={<LayoutGrid cards={cards} />}
      />
    </>
  );
};

export default Transition(JoinAGroup);

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
        Userring Team
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
        Be a part of the Userring Team and make a difference in creating
        welcoming environments. Whether you're greeting guests or helping with
        logistics, your role is essential in ensuring smooth and memorable
        experiences for everyone.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Classical Choir
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
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
    className: "md:col-span-1",
    thumbnail: "images/youth1.webp",
    link: "/youth-fellowship",
  },
  {
    id: 2,
    title: "Praise Team",
    content: <SkeletonTwo />,
    className: "md:col-span-1",
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
    title: "Userring Team",
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "images/youth4.webp",
    link: "/youth-fellowship",
  },
  {
    id: 5,
    title: "Classical Choir",
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "images/choir3.webp",
    link: "/classical-choir",
  },
];
