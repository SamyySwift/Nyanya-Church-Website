import { motion } from "framer-motion";
const slideInUp = {
  hidden: { opacity: 0, y: 200 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 * index, duration: 1, ease: "easeInOut" },
  }),
};

const HeroSection = ({ words }) => {
  return (
    <div className="relative w-full my-[100px] md:my-[150px] h-[700px] md:h-[900px] flex items-center justify-left text-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65  to-black/10"></div>
      </div>

      <div className="relative max-w-2xl px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-anton">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="block"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* <Link to="/welcome">
            <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-600 text-black rounded-full mt-8 font-karla font-light text-lg">
              Get Started
            </button>
          </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
