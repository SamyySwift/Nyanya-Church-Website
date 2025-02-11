import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

export function Welcome({ title, text, imgSrc = images }) {
  return (
    <div className="container mx-auto px-5 md:h-[400px] lg:h-[800px]  flex flex-col md:flex-row justify-around md:justify-between items-center gap-5">
      <motion.div
        initial={{ opacity: 0.0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-center md:max-w-md xl:max-w-2xl space-y-[30px] md:space-y-[80px]"
      >
        <h1 className="text-4xl lg:text-7xl font-extrabold font-poppins">
          {title}
        </h1>
        <div>
          <span className="font-grotesque md:text-md lg:text-2xl leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[45px]">
            {text}
          </span>
        </div>
      </motion.div>

      <ImagesSlider
        images={imgSrc}
        opacity={0}
        className="max-w-[40rem] h-[400px] md:h-[500px]"
      />
    </div>
  );
}
const images = [
  "images/welcome-bg-8.webp",
  // "images/welcome-bg-10.webp",
  // "images/welcome-bg-9.webp",
  // "images/welcome-bg-1.webp",
  // "images/welcome-bg-2.webp",
  // "images/welcome-bg-7.webp",
  // "images/welcome-bg-3.webp",
  // "images/welcome-bg-4.webp",
  // "images/welcome-bg-5.webp",
  // "images/welcome-bg-11.webp",
];
