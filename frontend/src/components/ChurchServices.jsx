import { ParallaxBanner } from "react-scroll-parallax";
import HoverBorderGradientButton from "./ui/hover-border-gradient";
import { CiStreamOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const ChurchServices = () => {
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
      layers={[
        { image: "src/assets/images/worship.jpg", speed: -20 },
        gradientOverlay,
      ]}
      className="h-screen"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute inset-0 flex flex-col items-center gap-8 justify-center text-white">
        <h1 className="text-6xl md:text-8xl font-light  font-vibes ">
          Worship With Us
        </h1>
        <HoverBorderGradientButton
          text={"Watch Live Stream"}
          icon={<CiStreamOn size={22} />}
        />
        <div className=" text-white font-poppins">
          <p className="font-extralight text-md md:text-lg">
            Follow us on our Socials
          </p>
          <div className="flex items-center justify-center gap-3 ">
            <FaFacebook size={25} className="hover:text-sky-500 rounded-full" />
            <FaInstagram
              size={25}
              className="hover:text-sky-500 rounded-full"
            />
            <FaYoutube size={27} className="hover:text-sky-500 rounded-full" />
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default ChurchServices;
