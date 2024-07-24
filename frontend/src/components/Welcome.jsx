import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { useParallax } from "react-scroll-parallax";

export function Welcome({ title, text, imgSrc = images }) {
  const { ref } = useParallax({ speed: -15 });
  return (
    <section className="overflow-hidden">
      <div
        className="h-[760px] sm:h-screen md:h-[500px] lg:h-[700px] xl:h-screen flex flex-col md:flex-row justify-around md:justify-between items-center gap-5 px-5 lg:px-[40px] xl:px-[80px]"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0.0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col justify-center md:max-w-md xl:max-w-lg space-y-[30px] md:space-y-[100px]"
        >
          <h1 className="text-4xl lg:text-6xl font-semibold font-grotesque">
            {title}
          </h1>
          <div>
            <span className="font-grotesque font-light md:text-md lg:text-xl leading-[30px] md:leading-[40px] lg:leading-[45px] xl:leading-[45px]">
              {text}
            </span>
          </div>
        </motion.div>

        <ImagesSlider
          images={imgSrc}
          opacity={0}
          className="max-w-2xl md:max-w-lg h-[400px] rounded-2xl"
        />
      </div>
    </section>
  );
}
const images = [
  "images/welcome-bg-8.webp",
  "images/welcome-bg-10.webp",
  "images/welcome-bg-9.webp",
  "images/welcome-bg-1.webp",
  "images/welcome-bg-6.webp",
  "images/welcome-bg-2.webp",
  "images/welcome-bg-7.webp",
  "images/welcome-bg-3.webp",
  "images/welcome-bg-4.webp",
  "images/welcome-bg-5.webp",
  "images/welcome-bg-11.webp",
];
