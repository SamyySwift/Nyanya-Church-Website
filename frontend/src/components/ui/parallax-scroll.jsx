import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";
import { FaClock } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const ITEMS_PER_PAGE = 9; // Adjust this number based on how many items you want per page

export const ParallaxScroll = ({ items, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [currentPage]);

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
    <motion.div
      style={{ y: translateY }}
      key={idx}
      className="flex justify-center w-full"
    >
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800"
            // "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            // "hover:scale-105 transition-all duration-500"
          )}
        >
          <img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
          <div className="text relative z-50">
            <h1 className="font-bold font-poppins text-xl  text-gray-50 relative">
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

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-4 py-2 mx-2 rounded-full ${
              currentPage === i ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === 2 && currentPage > 3) {
        pageNumbers.push(
          <span key="dots1" className="px-4 py-2 mx-2">
            ...
          </span>
        );
      } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
        pageNumbers.push(
          <span key="dots2" className="px-4 py-2 mx-2">
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-10 pt-5 md:py-40 px-5"
        ref={gridRef}
      >
        <div className="flex flex-col items-center">
          {firstPart.map((el, idx) => (
            <a href={el.link} target="_blank" key={idx}>
              <Card
                imgSrc={el.image}
                title={el.title}
                preacher={el.preacher}
                date={el.date}
                key={`grid-1-${startIndex + idx}`}
                translateY={translateFirst}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {secondPart.map((el, idx) => (
            <a href={el.link} target="_blank" key={idx}>
              <Card
                imgSrc={el.image}
                title={el.title}
                preacher={el.preacher}
                date={el.date}
                key={`grid-2-${startIndex + idx}`}
                translateY={translateSecond}
              />
            </a>
          ))}
        </div>
        <div
          className={cn(
            "flex flex-col items-center",
            thirdPart.length <= 1 ? "mt-[300px] md:mt-0" : "mt-0"
          )}
        >
          {thirdPart.map((el, idx) => (
            <a href={el.link} target="_blank" key={idx}>
              <Card
                imgSrc={el.image}
                title={el.title}
                preacher={el.preacher}
                date={el.date}
                key={`grid-3-${startIndex + idx}`}
                translateY={translateThird}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10 md:my-20">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded-lg font-grotesque disabled:opacity-50"
        >
          Prev
        </button>
        {renderPagination()}
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
