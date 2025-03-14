import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";

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
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {type === "text" ? (
          <h1 className="font-bold font-grotesque text-6xl text-white">
            {textContent}
          </h1>
        ) : (
          <>
            {items.map((item, idx) => (
              // <li
              //   className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
              //   style={{
              //     background:
              //       // "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              //       "black",
              //   }}
              //   key={item.name}
              // >
              //   <blockquote>
              //     <div
              //       aria-hidden="true"
              //       className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              //     ></div>
              //     <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-poppins font-light">
              //       {item.quote}
              //     </span>
              //     <div className="relative z-20 mt-6 flex flex-row items-center">
              //       <span className="flex flex-col gap-1">
              //         <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              //           {item.name}
              //         </span>
              //         <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              //           {item.title}
              //         </span>
              //       </span>
              //     </div>
              //   </blockquote>
              // </li>
              <div className="w-[400px] h-[500px]">
                <img
                  src={item}
                  key={idx}
                  loading="lazy"
                  className="object-cover w-full h-full object-center"
                />
              </div>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
