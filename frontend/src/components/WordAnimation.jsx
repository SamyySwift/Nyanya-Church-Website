import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WordAnimation = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 0.9"],
  });
  const { scrollYProgress: p } = useScroll({
    target: ref2,
    offset: ["start end", "center 0.9"],
  });
  const { scrollYProgress: p2 } = useScroll({
    target: ref3,
    offset: ["start end", "end 0.8"],
  });
  const scale = useTransform(p2, [0, 1], [0, 20]);

  return (
    <section
      className="h-screen relative overflow-hidden "
      style={{ backgroundColor: "#FEFAF6" }}
    >
      <h1
        className="flex absolute top-[100px] md:top-[150px] xl:top-[100px] left-10 h-full"
        ref={ref}
      >
        <AnimateEachLetter word="CHRIST" progress={scrollYProgress} />
      </h1>

      <h1
        className="flex absolute top-[350px] md:top-[500px] lg:top-[500px] xl:top-[350px] right-20 h-full"
        ref={ref2}
      >
        <AnimateEachLetter word="IS" progress={p} />
      </h1>
      <h1
        className="flex absolute bottom-[150px] left-[130px] md:bottom-[70px] md:left-[250px] lg:left-[450px] xl:left-[650px]"
        ref={ref3}
      >
        <AnimateEachLetter word="LOVE" progress={p2} />
      </h1>

      {/* <motion.div
        className="absolute inset-0 flex items-center justify-center circle"
        style={{ scaleX: scale, scaleY: scale, transitionDuration: "0.7s" }}
      ></motion.div> */}
    </section>
  );
};

const AnimateEachLetter = ({ word, progress }) => {
  const letters = word.split("");
  return letters.map((letter, index) => {
    const start = index / letters.length;
    const end = start + 1 / letters.length;
    return (
      <Animate key={index} range={[start, end]} progress={progress}>
        {letter}
      </Animate>
    );
  });
};

const Animate = ({ children, range, progress }) => {
  const translateY = useTransform(progress, range, [50, 0]);
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span
      style={{ y: translateY, opacity, transitionDuration: "1s" }}
      className="font-alfa text-7xl md:text-9xl lg:text-[120px] tracking-tight text-black"
    >
      {children}
    </motion.span>
  );
};

export default WordAnimation;
