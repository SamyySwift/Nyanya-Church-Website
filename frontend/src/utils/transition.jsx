import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};
const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <div className="fixed top-0 left-0 w-full h-full flex flex-col pointer-events-none transform origin-top">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="relative flex flex-1 bg-[#E5E0D4] -m-[0.25px]"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 2, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col pointer-events-none transform origin-bottom">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="relative flex flex-1 bg-[#E5E0D4] -m-[0.25px]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 2, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
