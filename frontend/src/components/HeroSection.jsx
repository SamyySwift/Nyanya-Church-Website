import { cn } from "../utils/cn";

const HeroSection = ({
  title,
  section_title,
  description,
  content,
  backgroundImage,
  svg_color = "",
}) => {
  return (
    <div className="flex flex-col">
      {/* Background Image */}
      <div className="w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-5 relative z-10 flex items-center h-full text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-poppins">
            {title}
          </h1>
        </div>
      </div>

      {/* C-Curve Bottom */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
        <path
          fill={svg_color}
          d="M0,256 C480,400 960,100 1440,256 L1440,320 L0,320 Z"
        ></path>
      </svg>

      {/* Content Below the Curve */}
      <div className={`bg-[${svg_color}] text-black py-[60px]  md:text-start`}>
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-10 md:text-6xl font-extrabold font-poppins">
            {section_title}
          </h2>
          <p className="font-karla font-light mt-5 mb-[50px] text-xl md:text-2xl text-justify max-w-2xl">
            {description}
          </p>
          {content}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
