const HeroSection = ({ title, backgroundImage, svg_color = "" }) => {
  return (
    <div className="relative h-[500px] md:h-screen">
      {/* Background Image */}
      <div className="w-full h-full overflow-hidden relative">
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
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold font-poppins">
            {title}
          </h1>
        </div>
      </div>

      {/* Curve Bottom */}
      <svg className="absolute bottom-0" viewBox="0 0 1440 320">
        <path
          fill={svg_color}
          d="M0,256 C480,400 960,100 1440,256 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
