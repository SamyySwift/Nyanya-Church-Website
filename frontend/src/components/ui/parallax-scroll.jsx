import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { FaClock } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const ITEMS_PER_PAGE = 9; // Adjust this number based on how many items you want per page

export const ParallaxScroll = ({ items, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef,
    // offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const third = Math.ceil(paginatedImages.length / 3);
  const firstPart = paginatedImages.slice(0, third);
  const secondPart = paginatedImages.slice(third, 2 * third);
  const thirdPart = paginatedImages.slice(2 * third);

  const Card = ({ imgSrc, title, preacher, date, idx, translateY }) => (
    <motion.div style={{ y: translateY }} key={idx}>
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9wdHhpdXMzanQyaXFqbWU0M2ZmYjNrcnp5ZTUzZWE0NG04eGR5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z01yV397AZubSmVimm/giphy.gif')] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text relative z-50">
            <h1 className="font-bold font-grotesque text-xl md:text-3xl text-gray-50 relative">
              {title}
            </h1>
            <p className="flex items-center gap-2 font-normal font-grotesque text-base text-gray-50 relative mt-4">
              <BsPersonCircle />
              {preacher}
            </p>
            <p className="flex items-center gap-2 font-normal font-grotesque text-base text-gray-50 relative">
              <FaClock />
              {date}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <Card
              imgSrc={el.bgImg}
              title={el.title}
              preacher={el.preacher}
              date={el.date}
              idx={"grid-1" + idx}
              translateY={translateFirst}
            />
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <Card
              imgSrc={el.bgImg}
              title={el.title}
              preacher={el.preacher}
              date={el.date}
              idx={"grid-2" + idx}
              translateY={translateSecond}
            />
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <Card
              imgSrc={el.bgImg}
              title={el.title}
              preacher={el.preacher}
              date={el.date}
              idx={"grid-3" + idx}
              translateY={translateThird}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-20">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded-lg font-grotesque disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-2 rounded-full font-grotesque ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 rounded-lg disabled:opacity-50 font-grotesque"
        >
          Next
        </button>
      </div>
    </div>
  );
};
