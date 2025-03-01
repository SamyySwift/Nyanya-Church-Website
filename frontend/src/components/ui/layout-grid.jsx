import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { LazyLoadedComponent } from "../LazyLoadComponent";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-auto py-[20px] grid grid-cols-1 md:grid-cols-3 container mx-auto px-5 gap-10 relative">
      {cards.map((card, i) => (
        <LazyLoadedComponent key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 rounded-3xl h-full w-full"
                : "rounded-3xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} selected={selected} />
          </motion.div>
        </LazyLoadedComponent>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ selected, card }) => {
  return (
    <div className="h-full w-full min-h-[250px] md:min-h-[500px]">
      <img
        src={card.thumbnail}
        height="500"
        width="500"
        loading="lazy"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
        )}
        alt="thumbnail"
      />
      {!selected?.id && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl shadow-md"
          style={{ backgroundColor: "#f7f2e9" }}
        >
          <h3 className="text-md text-center text-black underline underline-offset-8 font-karla">
            {card.title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlurImage;

const SelectedCard = ({ selected }) => {
  return (
    <div className=" bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-20 z-[70]"
      >
        <Link to={selected?.link}>
          {selected?.content}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl shadow-md"
            style={{ backgroundColor: "#f7f2e9" }}
          >
            <h3 className="text-md text-center text-black underline underline-offset-8 font-karla">
              Click to Join
            </h3>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};
