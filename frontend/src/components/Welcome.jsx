import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

export function Welcome({ title, text, imgSrc = images }) {
  return (
    <div className="container mx-auto px-5 py-10 md:py-[20rem] md:h-[400px] lg:h-[800px]  flex flex-col md:flex-row justify-around md:justify-between items-center gap-5">
      <motion.div
        initial={{ opacity: 0.0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 2,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-center md:max-w-sm xl:max-w-2xl space-y-[30px] md:space-y-[60px]"
      >
        <h1 className="text-4xl lg:text-8xl font-anton">{title}</h1>
        <div>
          <span className="font-karla font-light md:text-md lg:text-2xl leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[45px]">
            {text}
          </span>
        </div>
      </motion.div>

      <ImagesSlider
        images={imgSrc}
        // opacity={90}
        className="max-w-[40rem] h-[400px] lg:h-[500px]"
      />
    </div>
  );
}
const images = [
  "images/welcome-bg-1.webp",
  "images/welcome-bg-2.webp",
  "images/welcome-bg-3.webp",
  "images/welcome-bg-5.webp",
  "images/welcome-bg-8.webp",
];
