import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export function Welcome({ title, text, imgSrc }) {
  const textScale = useParallax({
    scale: [0.8, 1, "easeInQuad"],
  });
  return (
    <div className="h-[760px] sm:h-screen md:h-[500px] lg:h-[700px] xl:h-screen flex flex-col md:flex-row justify-around md:justify-between items-center gap-5 md:mx-5 lg:mx-10">
      <motion.div
        initial={{ opacity: 0.0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="md:max-w-md xl:max-w-lg space-y-[30px] md:space-y-[100px] xl:space-y-[120px] mx-4">
          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-semibold font-grotesque "
            ref={textScale.ref}
          >
            {title}
          </h1>
          <div>
            <span className="font-grotesque md:text-md lg:text-xl xl:text-2xl leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[50px]">
              {text}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Image  */}
      <div className="max-w-2xl md:max-w-xl mx-3">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          src={`/images/${imgSrc}`}
          className="h-[420px] md:h-[400px] lg:h-[500px] lg:w-full object-cover rounded-tl-[200px] lg:rounded-tl-[300px] rounded-br-[60px] md:rounded-bl-none rounded-bl-[50px]"
        />
      </div>
    </div>
  );
}
