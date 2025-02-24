import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import PageTitle from "../components/PageTitle";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { motion } from "framer-motion";
import Transition from "../utils/transition";
import customFetch from "../hooks/customFetch";

const RenderText = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-lg">
              {block.children.map((child, childIndex) => (
                <span
                  key={childIndex}
                  className={`
                    ${child.bold ? "font-bold" : ""}
                    ${child.italic ? "italic" : ""}
                    ${child.underline ? "underline underline-offset-2" : ""}
                    ${child.strikethrough ? "line-through" : ""}
                  `}
                >
                  {child.text}
                </span>
              ))}
            </p>
          );
        }

        if (block.type === "list") {
          return block.format === "unordered" ? (
            <ul key={index} className="list-disc list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => (
                    <span
                      key={childIndex}
                      className={child.strikethrough ? "line-through" : ""}
                    >
                      {child.text}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          ) : (
            <ol key={index} className="list-decimal list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => (
                    <span
                      key={childIndex}
                      className={child.strikethrough ? "line-through" : ""}
                    >
                      {child.text}
                    </span>
                  ))}
                </li>
              ))}
            </ol>
          );
        }

        return null;
      })}
    </div>
  );
};

const DailyCard = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row mb-20 font-karla">
      <img
        src={event.image.url}
        alt={event.title}
        className="w-[500px] h-[350px] object-cover"
      />
      <div className="flex flex-col items-start md:px-8 mt-5 md:mt-0 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-alfa">{event.title}</h2>

        <p className="text-lg mt-3">
          <span className="font-medium">Preacher: </span>
          {event.preacher}
        </p>
        <p className="text-lg">
          <span className="font-medium">Bible Portion: </span> {event.portion}
        </p>

        <p className="text-lg md:text-xl mt-4 line-clamp-2">
          <RenderText content={event.content} />
        </p>

        <Modal>
          <ModalTrigger className="bg-black flex justify-center group/modal-btn mt-8">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-yellow-600 text-lg font-karla">
              Read More
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {event.title}
              </h4>
              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100"
                >
                  <img
                    src={event.image.url}
                    alt="event image"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              </div>
              <div className="py-10 mx-auto text-white font-karla">
                <h4 className="font-light text-lg text-neutral-400">
                  Preacher: {event.preacher}
                </h4>

                <h4 className="font-light text-lg text-neutral-400 mb-10">
                  Bible Portion: {event.portion}
                </h4>

                <RenderText content={event.content} />
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

const LazyLoadedComponent = ({ event }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <DailyCard event={event} />
    </div>
  );
};

const DailyRefresh = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/daily-words?populate=*"
  );

  return (
    <>
      <PageTitle
        title="Daily Word | Nyanya Assembly"
        description="page containing all church daily words"
      />
      <HeroSection backgroundVideo="joinbg.mp4" svg_color="#F7F2E9" />
      <div className="bg-[#F7F2E9] py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-5 md:text-4xl font-alfa">Daily Word</h2>
          <p className="font-karla text-neutral-700 font-light mb-[90px] text-xl text-justify max-w-2xl">
            Explore our daily word of God bullets to gain inspiration, wisdom,
            and guidance for your spiritual journey. Each day brings a new
            opportunity to deepen your faith and connect with the teachings of
            the Bible.
          </p>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="loader"></span>
            </div>
          ) : error ? (
            <div className="py-20">
              <h1 className="text-xl">
                Could not retrieve daily words, try again.
              </h1>
            </div>
          ) : (
            <div>
              {data?.data?.length > 0 ? (
                data.data.map((event, index) => (
                  <LazyLoadedComponent key={index} event={event} />
                ))
              ) : (
                <p className="flex justify-center  text-center text-xl  py-[100px] font-karla">
                  No Daily Words at the momemt. Try again later
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Transition(DailyRefresh);
