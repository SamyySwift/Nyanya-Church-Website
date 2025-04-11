import Transition from "../utils/transition";
import PageTitle from "../components/PageTitle";
import { LayoutGrid } from "../components/ui/layout-grid";
import HeroSection from "../components/HeroSection";

const JoinAGroup = () => {
  return (
    <>
      <PageTitle
        title="Teams | Nyanya Assembly"
        description="Different church groups"
      />

      <HeroSection backgroundVideo="joinbg.mp4" svg_color="#F7F2E9" />
      <section className="bg-[#F7F2E9] py-[80px]">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl mb-10 lg:text-7xl xl:text-8xl">
            <span className="font-anton">Explore Our</span>{" "}
            <span className="font-thin italic font-saol">Teams</span>
          </h2>
          <p className="font-karla text-neutral-700 font-light mb-[60px] text-xl text-justify max-w-2xl">
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
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold font-karla md:text-4xl text-xl text-white">
//         Ushering Team
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
//         Be a part of the Userring Team and make a difference in creating
//         welcoming environments. Whether you're greeting guests or helping with
//         logistics, your role is essential in ensuring smooth and memorable
//         experiences for everyone.
//       </p>
//     </div>
//   );
// };

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Witness Movement
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
        Join the Witness Movement and be a light in your community. From
        outreach programs to evangelism efforts, this team is dedicated to
        sharing the love of Christ beyond the church walls. Together, we bring
        hope, serve with purpose, and impact lives for God's glory.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Main Choir
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
        Join the Main Choir and support a worthy cause through your musical
        talents. Participate in events and performances that uplift and inspire!
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold font-karla md:text-4xl text-xl text-white">
        Junior Choir
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal font-karla text-base my-4 max-w-md text-neutral-200">
        Join the Junior Choir and support a worthy cause through your musical
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
    thumbnail: "images/youth5.webp",
    link: "/youth-fellowship",
  },
  {
    id: 2,
    title: "Praise Team",
    content: <SkeletonTwo />,
    className: "md:col-span-1",
    thumbnail: "images/praise-team-3.webp",
    link: "/praise-team",
  },
  {
    id: 3,
    title: "Media Team",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "images/media1.webp",
    link: "/media-team",
  },
  {
    id: 4,
    title: "Witness Movement",
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: "images/witness-1.jpeg",
    link: "/witness",
  },
  // {
  //   id: 4,
  //   title: "Ushering Team",
  //   content: <SkeletonFour />,
  //   className: "col-span-1",
  //   thumbnail: "images/ushering.webp",
  //   link: "/ushering-team",
  // },
  {
    id: 5,
    title: "Main Choir",
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: "images/choir3.webp",
    link: "/classical-choir",
  },

  {
    id: 6,
    title: "Junior Choir",
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: "images/choir5.webp",
    link: "/classical-choir",
  },
];

export default Transition(JoinAGroup);
