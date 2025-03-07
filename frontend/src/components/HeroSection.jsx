const HeroSection = ({
  title,
  backgroundImage,
  backgroundVideo,
  svg_color = "",
}) => {
  return (
    <div className="relative h-[500px] md:h-screen">
      {/* Background */}
      <div className="w-full h-full overflow-hidden relative">
        {backgroundVideo ? (
          // Render Video Background if backgroundVideo is supplied
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ objectPosition: "center" }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Render Image Background otherwise
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="absolute w-full bottom-20 text-neutral-400">
          <h1 className="container mx-auto px-5 text-5xl md:text-6xl lg:text-6xl font-alfa">
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
