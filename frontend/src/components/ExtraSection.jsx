// import { ParallaxBanner } from "react-scroll-parallax";
// import { LayoutGrid } from "../components/ui/layout-grid";
import InfiniteMovingCards from "./ui/infinite-moving-cards";

const ExtraSection = () => {
  return (
    // <div>
    //   <ParallaxBanner
    //     layers={[{ image: "src/assets/images/help.jpg", speed: -30 }]}
    //     className="h-[1200px] flex flex-col items-center justify-center"
    //   >
    //     <div className="absolute inset-0 bg-black opacity-50"></div>
    //     <h1 className="absolute inset-0 text-white text-center font-vibes mt-10 text-7xl md:text-9xl">
    //       Our Outreaches
    //     </h1>
    //     <LayoutGrid cards={cards} />
    //   </ParallaxBanner>
    // </div>
    <div
      className="h-[600px] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#EADBC8" }}
    >
      {/* Testimony */}
      <div>
        <h1 className="font-light font-vibes text-6xl md:text-8xl text-center">
          Testimonials
        </h1>
        <h1 className="text-center font-poppins font-light  md:text-3xl mb-10">
          Get inspired from other peoples testimonies...
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          type="card"
        />
      </div>
    </div>
  );
};

export default ExtraSection;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "src/assets/images/outreach2.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "src/assets/images/outreach1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "src/assets/images/outreach3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "src/assets/images/outreach4.jpg",
  },
];

const testimonials = [
  {
    quote:
      "During the darkest moments of my life, I found the light of faith shining brightest. In times of despair, I discovered hope. Through the challenges I faced, I learned the true meaning of perseverance and the power of God's love.",
    name: "John Doe",
    title: "Finding Light in Darkness",
  },
  {
    quote:
      "In moments of uncertainty and doubt, I turned to prayer and found the strength to face my fears. Through faith, I realized that God's plan for me is greater than any obstacle. I am grateful for His guidance and grace.",
    name: "Jane Smith",
    title: "Strength in Prayer",
  },
  {
    quote:
      "Every trial I've faced has been a stepping stone on my journey of faith. In moments of weakness, I felt God's presence lifting me up and carrying me through. Today, I stand firm in my belief, knowing that He is always by my side.",
    name: "David Johnson",
    title: "Walking by Faith",
  },
  {
    quote:
      "Through the challenges and struggles of life, I've experienced God's faithfulness and provision. His love has sustained me through the storms, and His promises have given me hope for the future. I am forever grateful for His unfailing love.",
    name: "Sarah Williams",
    title: "Experiencing God's Faithfulness",
  },
  {
    quote:
      "In moments of doubt and uncertainty, I've learned to trust in God's plan for my life. His guidance has led me through the unknown, and His peace has calmed my restless heart. I am thankful for His presence in every season.",
    name: "Michael Brown",
    title: "Trusting in God's Plan",
  },
];
