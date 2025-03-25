import HeroSection from "../components/HeroSection";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import customFetch from "../hooks/customFetch";
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
        <h2 className="text-2xl md:text-3xl font-anton">{message.title}</h2>

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
      <HeroSection backgroundImage="images/bible.webp" svg_color="#F7F2E9" />
      <div className="bg-[#F7F2E9] py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl mb-10 lg:text-7xl xl:text-8xl">
            <span className="font-anton">Church</span>{" "}
            <span className="font-thin italic font-saol">Sermons</span>
          </h2>
          <p className="font-karla text-neutral-700 font-light mb-[90px] text-xl text-justify max-w-2xl">
            Explore our collection of sermons that offer spiritual guidance,
            inspiration, and encouragement. Stay connected with our community
            and deepen your faith through these powerful messages.
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
