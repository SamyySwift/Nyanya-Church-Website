import { ParallaxBanner } from "react-scroll-parallax";
import { FlipWords } from "../components/ui/flip-words";

const WorshipWithUs = () => {
  const words = ["Power", "Healing", "Miracle", "Deliverance"];
  const gradientOverlay = {
    opacity: [0.5, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black" />
    ),
  };
  return (
    <ParallaxBanner
      layers={[{ image: "/images/worship.jpg", speed: -20 }, gradientOverlay]}
      className="h-screen"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl md:text-8xl font-light  font-vibes ">
          Worship With Us <br />
        </h1>
        <span className="font-poppins text-2xl md:text-4xl font-thin">
          ...and experience God's <FlipWords words={words} />
        </span>
      </div>
    </ParallaxBanner>
  );
};

export default WorshipWithUs;
