import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed inset-0 w-full h-screen z-50"
        style={{ transformOrigin: "top", backgroundColor: "#f7f2e9" }}
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "-100%" }}
        exit={{ translateY: "0%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-6xl lg:text-9xl font-grotesque font-bold">
            WELCOME
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-50"
        style={{ transformOrigin: "top", backgroundColor: "#f7f2e9" }}
        initial={{ translateY: "0%" }}
        animate={{ translateY: "-100%" }}
        exit={{ translateY: "-100%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
