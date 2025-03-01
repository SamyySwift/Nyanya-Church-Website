import HeroSection from "../components/HeroSection";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import customFetch from "../hooks/customFetch";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Link } from "react-router-dom";
import { RenderText } from "../components/RenderRichText";
import { LazyLoadedComponent } from "../components/LazyLoadComponent";

const DailyCard = ({ message }) => {
  return (
    <div className="flex flex-col md:flex-row mb-20 font-karla">
      <img
        src={message.image.url}
        alt={message.title}
        className="w-[520px] h-[350px] object-cover"
      />
      <div className="flex flex-col items-start md:px-8 mt-5 md:mt-0 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-alfa">{message.title}</h2>

        <p className="text-xl mt-3 font-light">
          <span className="font-normal">Preacher: </span>
          {message.preacher}
        </p>
        <p className="text-xl font-light">
          <span className="font-normal">Bible Portion: </span> {message.portion}
        </p>

        <p className="text-xl md:text-2xl mt-4 line-clamp-2">
          <RenderText content={message.content} />
        </p>

        <Link
          to={"/read-more"}
          state={{ message }}
          className="text-[#F2A83C] hover:underline mt-5 text-lg"
        >
          Read More
        </Link>
      </div>
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
      <HeroSection backgroundImage="images/daily.jpg" svg_color="#F7F2E9" />
      <div className="bg-[#F7F2E9] py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-5 md:text-4xl font-alfa">Daily Word</h2>
          <p className="font-karla text-neutral-700 font-light mb-[90px] text-xl text-justify max-w-2xl">
            <TextGenerateEffect
              words={`Explore our daily word of God bullets to gain inspiration, wisdom,
            and guidance for your spiritual journey. Each day brings a new
            opportunity to deepen your faith and connect with the teachings of
            the Bible.`}
            />
          </p>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="loader"></span>
            </div>
          ) : error ? (
            <div className="py-20">
              <h1 className="flex justify-center  text-center text-xl  py-[100px] font-karla">
                Could not retrieve daily words, try again.
              </h1>
            </div>
          ) : (
            <div>
              {data?.data?.length > 0 ? (
                data.data.map((message, index) => (
                  <LazyLoadedComponent key={index}>
                    <DailyCard message={message} />
                  </LazyLoadedComponent>
                ))
              ) : (
                <p className="flex justify-center  text-center text-xl  py-[100px] font-karla">
                  No Daily Words at the moment. Try again later
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
