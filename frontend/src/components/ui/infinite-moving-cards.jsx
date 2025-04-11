import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "./glowing-effect";
import { FaClock } from "react-icons/fa6";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  type = "text",
  textContent,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {type === "text" ? (
          <h1 className="font-bold font-karla text-6xl text-white">
            {textContent}
          </h1>
        ) : type === "image" ? (
          <>
            {items.map((item, idx) => (
              <div key={idx} className="w-[400px] h-[500px]">
                <img
                  src={item}
                  loading="lazy"
                  className="object-cover w-full h-full object-center"
                />
              </div>
            ))}
          </>
        ) : type === "card" ? (
          <>
            {items.map((item, idx) => (
              <div key={idx} className="min-w-[300px] max-w-[400px]">
                <GridItem
                  icon={
                    <FaClock className="h-5 w-5 text-black dark:text-neutral-600" />
                  }
                  title={item.title}
                  day={item.day}
                  time={item.time}
                  description={item.description}
                />
              </div>
            ))}
          </>
        ) : null}
      </ul>
    </div>
  );
};

const GridItem = ({ icon, title, day, time, description }) => {
  return (
    <div className="relative flex flex-col w-full h-[300px] rounded-2xl border p-4 md:p-5 shadow-sm transform transition-transform duration-300 hover:scale-105">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col gap-4 justify-between font-karla">
        <div className="flex items-center gap-2">
          <div className="w-fit rounded-lg border border-gray-500 p-3">
            {icon}
          </div>
          <p className="text-md font-semibold text-black">
            {day} | {time}
          </p>
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-semibold text-black">
          {title}
        </h3>

        <p className="text-md md:text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
