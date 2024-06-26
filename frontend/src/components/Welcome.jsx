import { motion } from "framer-motion";

export function Welcome({ title, text, imgSrc }) {
  return (
    <div className="h-[760px] sm:h-screen md:h-[500px] lg:h-[700px] xl:h-screen flex flex-col md:flex-row justify-around md:justify-between items-center gap-5 md:mx-5 lg:mx-12">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-grotesque ">
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
          className="h-[420px] md:h-[400px] lg:h-[500px] lg:w-full object-cover rounded-[50px]"
        />
      </div>
    </div>
  );
}
