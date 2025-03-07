import PageTitle from "../components/PageTitle";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import transition from "../utils/transition";
import customFetch from "../hooks/customFetch";
import HeroSection from "../components/HeroSection";

const Sermons = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/sermons?populate=*"
  );

  // Extracting the necessary fields from the fetched data
  const sermons = data?.data?.map((sermon) => ({
    image: sermon.image.url,
    title: sermon.title,
    link: sermon.link,
    preacher: sermon.preacher,
    date: new Date(sermon.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

  return (
    <>
      <PageTitle
        title="Sermons | Nyanya Assembly"
        description="Listen to inspiring sermons from Nyanya Assembly"
      />
      {/* <Hero text="Sermons" src="images/bible.webp" mainHero={false} /> */}

      <HeroSection
        // title="Sermons"
        backgroundVideo="sermonbg.mp4"
        svg_color="#F7F2E9"
      />
      <section className="bg-[#F7F2E9] py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl mb-10 lg:text-7xl xl:text-8xl">
            <span className="font-anton">Church</span>{" "}
            <span className="font-thin italic font-saol">Sermons</span>
          </h2>
          <p className="font-karla text-neutral-700 font-light mb-[60px] text-xl text-justify max-w-2xl">
            Explore our collection of sermons that offer spiritual guidance,
            inspiration, and encouragement. Stay connected with our community
            and deepen your faith through these powerful messages.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center my-20">
            <span class="loader"></span>
          </div>
        ) : error ? (
          <p className="flex justify-center  text-center text-xl  py-[100px] font-karla">
            No Sermons at the momemt. Try again later
          </p>
        ) : (
          <ParallaxScroll items={sermons} />
        )}
      </section>
    </>
  );
};

export default transition(Sermons);
